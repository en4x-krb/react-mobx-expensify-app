import React from 'react';
import {NavLink} from 'react-router-dom';
import {firebase} from '../firebase/firebase';

const Header = () => (
    <div>
        <h1>Expensify: Track your expenses</h1>
        <NavLink to="/dashboard" exact={true} activeStyle={{fontWeight: 'bold', color: 'teal'}}>Dashboard|</NavLink>
        <NavLink to="/create" exact={true} activeStyle={{fontWeight: 'bold', color: 'teal'}}>|Create Expense</NavLink>
        <button onClick={() => {
            firebase.auth().signOut();
        }}>|Logout</button>
    </div>
);

export default Header;