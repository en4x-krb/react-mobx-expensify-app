import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header.jsx';
import NotFound from '../components/NotFound.jsx';
import ExpenseDashBoard from '../components/ExpenseDashBoard.jsx';
import EditExpense from '../components/EditExpense.jsx';
import CreateExpense from '../components/CreateExpense.jsx';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashBoard}/>
                <Route path="/create" exact={true} component={CreateExpense}/>
                <Route path="/edit/:id" exact={true} component={EditExpense}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;