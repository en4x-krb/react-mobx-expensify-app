import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DevTools from 'mobx-react-devtools'


import Header from '../components/Header.jsx';
import NotFound from '../components/NotFound.jsx';
import ExpenseDashBoard from '../components/ExpenseDashBoard.jsx';
import EditExpense from '../components/EditExpense.jsx';
import CreateExpense from '../components/CreateExpense.jsx';

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <DevTools/>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashBoard}/>
                <Route path="/create" exact={true} component={CreateExpense}/>
                <Route path="/edit/:id" exact={true} component={EditExpense}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;