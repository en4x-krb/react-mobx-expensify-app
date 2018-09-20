import React from 'react';
import {inject, observer} from 'mobx-react';

@inject("store")
@observer
class ExpenseFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
    }

    onFilterTextChange(e) {
        this.props.store.setTextFilter(e.target.value);
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Text Filter" 
                    value={this.props.store.filters.text}
                    onChange={this.onFilterTextChange}
                />

                <label htmlFor ="sortBy">Sort By</label>
                <select id="sortBy">
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>

            </form>
        );
    }
};

export default ExpenseFilters;