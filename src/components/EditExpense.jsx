import React from 'react';
import { inject } from 'mobx-react';

import AddExpenseForm from './AddExpenseForm.jsx';
import database from '../firebase/firebase';

@inject("store")
class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(id) {
        // database().ref(`expenses/${id}`).remove().then(() => {
        //     this.props.store.removeExpense(id);
        //     this.props.history.push('/');
        // });
        this.props.store.removeExpense(id).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        let expense = this.props.store.findExpenseById(this.props.match.params.id);
        return (
            <div>
                <h1>Edit Expenses</h1>
                <AddExpenseForm
                    expense={expense}
                    onSubmit={(updatedExpense) => {
                        // database().ref(`expenses`).update({
                        //     [expense.id]: updatedExpense
                        // }).then(() => {
                        //     this.props.store.editExpense(expense.id, updatedExpense);
                        //     this.props.history.push('/');
                        // });

                        this.props.store.editExpense(expense.id, updatedExpense).then(() => {
                            this.props.history.push('/');
                        });
                    }}
                />
                <button onClick={this.onRemove.bind(this, expense.id)}>Remove Expense</button>
            </div>
        )
    }
};

export default EditExpense;