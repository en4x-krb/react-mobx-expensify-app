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
                    // database().ref('expenses').push(newExpense).then((posted) => {
                    //     this.props.store.createExpense({
                    //         id: posted.key,
                    //         ...newExpense
                    //     });
                    //     this.props.history.push('/');
                    // });
                    this.props.store.createExpense(newExpense).then(() => {
                        this.props.history.push('/');
                    });
                }} />
            </div>
        )
    }
}

export default CreateExpense;
// export default connect()(CreateExpense);