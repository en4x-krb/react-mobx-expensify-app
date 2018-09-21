import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { autorun } from 'mobx';

import database from './firebase/firebase';

import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import ExpenseStore from './stores/expensifyStore';

const store = ExpenseStore;

autorun(() => {
    console.log('store', store.filteredExpenses);
});

database().ref('expenses').on('child_removed', (removedExpense) => {
    console.log(removedExpense);
});

database().ref('expenses').on('child_changed', (changedExpense) => {
    console.log(changedExpense);
});

database().ref('expenses').on('child_added', (addedExpense) => {
    console.log(addedExpense);
});

class App extends React.Component {

    UNSAFE_componentWillMount() {
        database().ref('expenses').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                store.createExpense({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
        })
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
};

ReactDOM.render(<App />, document.getElementById("root"));