import React from 'react';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import DevTools from 'mobx-react-devtools'
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header.jsx';
import NotFound from '../components/NotFound.jsx';
import ExpenseDashBoard from '../components/ExpenseDashBoard.jsx';
import EditExpense from '../components/EditExpense.jsx';
import CreateExpense from '../components/CreateExpense.jsx';
import LoginPage from '../components/LoginPage.jsx';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <DevTools/>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={LoginPage}/>
                <Route path="/dashboard" exact={true} component={ExpenseDashBoard}/>
                <Route path="/create" exact={true} component={CreateExpense}/>
                <Route path="/edit/:id" exact={true} component={EditExpense}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    </Router>
);

export default AppRouter;