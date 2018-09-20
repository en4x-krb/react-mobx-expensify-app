import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify: Track your expenses</h1>
        <NavLink to="/" exact={true} activeStyle={{fontWeight: 'bold', color: 'teal'}}>Dashboard|</NavLink>
        <NavLink to="/create" exact={true} activeStyle={{fontWeight: 'bold', color: 'teal'}}>|Create Expense</NavLink>
    </div>
);

export default Header;