import { observable, action, computed } from 'mobx';
import database from '../firebase/firebase';
class Expense {
    @observable note;
    @observable description;
    @observable createdAt;
    @observable amount;

    constructor({ note, description, amount, createdAt, id }) {
        // this.id = Math.floor(Math.random() * Date.now());
        this.id = id;
        this.createdAt = createdAt || Date.now();
        this.note = note;
        this.description = description;
        this.amount = amount;
    }
}

class ExpenseStore {
    @observable expenses = [];

    @observable filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null
    };

    @computed get filteredExpenses() {
        // return this.expenses;

        return this.expenses.filter((expense) => {
            const startDate = !this.filters.startDate || expense.createdAt >= this.filters.startDate;
            const endDate = !this.filters.endDate || expense.createdAt <= this.filters.endDate;

            const matchPattern = new RegExp(this.filters.text, "i");
            const text = matchPattern.test(expense.note);

            return startDate && endDate && text;
        }).sort((a, b) => {
            if (this.filters.sortBy === 'date')
                return a.createdAt < b.createdAt ? 1 : -1;
            else
                return a.amount < b.amount ? 1 : -1;
        });
    }

    @action populateExpense(newExpense) {
        this.expenses.push(new Expense(newExpense));
    }

    @action createExpense(newExpense) {
        return database().ref('expenses').push(newExpense).then(postedExpense => {
            newExpense.id = postedExpense.key;
            this.expenses.push(new Expense(newExpense));
        });
    }

    @action editExpense(id, updatedExpense) {
        return database().ref('expenses').update({
            [id]: updatedExpense
        }).then(() => {
            this.expenses.find((expense, i) => {
                if (expense.id === id)
                    this.expenses[i] = {
                        ...this.expenses[i],
                        ...updatedExpense
                    };
            });
        });

    }

    @action removeExpense(id) {
        return database().ref(`expenses/${id}`).remove().then(() => {
            this.expenses = this.expenses.filter((expense) => expense.id !== id);
        });
    }

    findExpenseById(id) {
        return this.expenses.find((expense) => expense.id == id);
    }

    @action setTextFilter(text) {
        this.filters.text = text;
    }

    @action setStartDate(startDate) {
        this.filters.startDate = startDate;
    }

    @action setEndDate(endDate) {
        this.filters.endDate = endDate;
    }

    @action sortByAmount() {
        this.filters.sortBy = 'amount';
    }

    @action sortByDate() {
        this.filters.sortBy = 'date';
    }
}

let store = new ExpenseStore;


// autorun(() => {
//     console.log(store.filteredExpenses);
// });

export default store;