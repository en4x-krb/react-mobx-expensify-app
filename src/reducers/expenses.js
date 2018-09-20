import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actions/constants';

const defaultExpenses = [];

const expensesReducer = (state = defaultExpenses, actions) => {
    switch (actions.type) {
        case ADD_EXPENSE:
            return [
                ...state,
                actions.expense
            ];

        case EDIT_EXPENSE:
            return state.map((expense) => {
                if (expense.id === actions.id)
                    return {
                        ...expense,
                        ...actions.updatedExpense
                    }
                return expense;
            });

        case REMOVE_EXPENSE:
            return state.filter((expense) => expense.id !== actions.id);

        default:
            return state;
    }
};

export default expensesReducer;