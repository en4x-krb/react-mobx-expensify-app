import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {observer} from 'mobx-react';

const Expense = ({ id, note, amount, createdAt, description }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{note}</h3>
        </Link>
        {description && <h4>{description}</h4>}
        <p>Amount Rs. {amount / 100} | Created At: {moment(createdAt).format('DD/MM/YYYY')}</p>
    </div>
);

export default Expense;