import React from 'react';
import AddExpenseForm from './AddExpenseForm.jsx';
// import {addExpense} from '../actions/expenses';
// import {connect} from 'react-redux';
import { inject } from 'mobx-react';

@inject("store")
class CreateExpense extends React.Component {
    render() {
        return (
            <div>
                <h1>Create Expense</h1>
                <AddExpenseForm onSubmit={(newExpense) => {
                    this.props.store.createExpense(newExpense);
                    this.props.history.push('/');
                }} />
            </div>
        )
    }
}

export default CreateExpense;
// export default connect()(CreateExpense);