import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { autorun } from 'mobx';

import database, {firebase} from './firebase/firebase';

import './styles/style.scss';

import AppRouter, {history} from './routers/AppRouter';
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

    // UNSAFE_componentWillMount() {
    //     database().ref('expenses').once('value').then((snapshot) => {
    //         snapshot.forEach((childSnapshot) => {
    //             store.populateExpense({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //             })
    //         });
    //     })
    // }

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
};

let hasRendered = false;
function renderApp() {
    if(!hasRendered) {
        hasRendered = true;
        ReactDOM.render(<App />, document.getElementById("root"));
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        renderApp();
        
        database().ref('expenses').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                store.populateExpense({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
        })

        if(history.location.pathname === '/')
            history.push('/dashboard');
    }
    else {
        renderApp();
        history.push('/');
    }
});

ReactDOM.render(<App />, document.getElementById("root"));