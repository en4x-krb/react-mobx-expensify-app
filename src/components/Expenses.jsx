import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense.jsx';
import {inject, observer} from 'mobx-react';

@inject("store")
@observer
class Expenses extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>There are {this.props.store.filteredExpenses.length} expense(s)</p> 
                {
                    this.props.store.filteredExpenses.map(expense => <Expense key={expense.id} {...expense} ></Expense>)
                }
            </React.Fragment>
        )
    }
}

// const mapStateToProps = (state) => ({
//     expenses: state.expenses
// });

// export default connect(mapStateToProps)(Expenses);
export default Expenses;    