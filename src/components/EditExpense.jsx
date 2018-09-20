import React from 'react';
import {inject} from 'mobx-react';
// import { connect } from 'react-redux';
// import { editExpense, removeExpense } from '../actions/expenses';

import AddExpenseForm from './AddExpenseForm.jsx';

@inject("store")
class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(id) {
        this.props.store.removeExpense(id);
        this.props.history.push('/');
    }

    render() {
        let expense = this.props.store.findExpenseById(this.props.match.params.id);
        return (
            <div>
                <div>
                    <h1>Edit Expenses</h1>
                    <AddExpenseForm expense={expense} onSubmit={(updatedExpense) => {
                        console.log(updatedExpense);
                        this.props.store.editExpense(expense.id, updatedExpense);
                        this.props.history.push('/');
                    }} />
                    <button onClick={this.onRemove.bind(this, expense.id)}>Remove Expense</button>
                </div>
            </div>
        )
    }
};

// const mapStateToProps = (state, props) => ({
//     expense: state.expenses.find(expense => expense.id == props.match.params.id)
// });

// export default connect(mapStateToProps)(EditExpense);
export default EditExpense;