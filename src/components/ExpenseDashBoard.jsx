import React from 'react';
import Expenses from './Expenses.jsx';
import ExpenseFilters from './ExpenseFilters.jsx';

const ExpenseDashBoard = () => (
    <div>
        <h1>ExpenseDashBoard</h1>
        <ExpenseFilters/>
        <Expenses/>
    </div>
);

export default ExpenseDashBoard;