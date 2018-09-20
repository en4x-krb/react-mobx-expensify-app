import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import {Provider, inject, observer} from 'mobx-react';
import {autorun, observable} from 'mobx';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import ExpenseStore from './stores/expensifyStore';
// import configureStore from './stores/configureStore';
// import { addExpense, editExpense, removeExpense } from './actions/expenses';
// import {setEndDate, setStartDate, setTextFilter,sortByAmount, sortByDate} from './actions/filters';

// const store = configureStore();
const store = ExpenseStore;

// store.subscribe((state) => {
//     console.log(store.getState());
// });

// store.dispatch(addExpense({
//     id: 1,
//     note: 'Bought Pen',
//     amount: 1000,
//     createdAt: 1234567890,
//     description: 'Bought the best pen ever'
// }));

// store.dispatch(addExpense({
//     id: 2,
//     note: 'A&TW',
//     amount: 15000,
//     createdAt: 4234567890,
//     description: 'Ant-man & The Wasp'
// }));

// store.dispatch(addExpense({
//     id: 3,
//     note: 'Water Bottle',
//     amount: 50000,
//     createdAt: 9234567890,
//     description: 'Bought the best water bottle ever'
// }));


// store.dispatch(setTextFilter('aaloo'));
// store.dispatch(setEndDate(10203));
// store.dispatch(setStartDate(0));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

autorun(() => {
    console.log('store', store.filteredExpenses, store.filters.startDate);
});

store.createExpense({
    note: 'Aaloo',
    description: 'Aaloo',
    amount: 1320
});

store.createExpense({
    note: 'Potato',
    description: 'Potato',
    amount: 13320
});

store.createExpense({
    note: 'Patole',
    description: 'Patole',
    amount: 4320
});

store.setTextFilter('p');

// @inject("store")
// @observer
// class Tag extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <ul>
//                 {this.props.store.filteredExpenses.map((expense) => <li key={expense.id}>{expense.note}</li>)}
//             </ul>
//         );
//     } 
// };

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById("root"));

setTimeout(() => {
    store.expenses[0].note = "New Expense";
}, 4000);