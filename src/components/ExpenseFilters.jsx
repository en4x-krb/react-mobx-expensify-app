import React from 'react';
import {inject, observer} from 'mobx-react';
import moment from 'moment';

@inject("store")
@observer
class ExpenseFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onSortByChange = this.onSortByChange.bind(this);
        this.onFromDate = this.onFromDate.bind(this);
        this.onToDate = this.onToDate.bind(this);
    }

    onFilterTextChange(e) {
        this.props.store.setTextFilter(e.target.value);
    }

    onSortByChange(e) {
        if (e.target.value === 'amount')
            this.props.store.sortByAmount();
        
        else
            this.props.store.sortByDate();
    }

    onFromDate(e) {
        this.props.store.filters.startDate = moment(e.target.value).valueOf();
    }

    onToDate(e) {
        this.props.store.filters.endDate = moment(e.target.value).valueOf();
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
                <select 
                    value={this.props.store.filters.sortBy} 
                    id="sortBy"
                    onChange={this.onSortByChange}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <br/>
                <label htmlFor="from">From</label>
                <input 
                    type="date" 
                    id="from" 
                    value={moment(this.props.store.filters.startDate).format('YYYY-MM-DD')} 
                    onChange={this.onFromDate}
                /> 

                <label htmlFor="to">To</label>
                <input 
                    type="date" 
                    id="to" 
                    value={moment(this.props.store.filters.endDate).format('YYYY-MM-DD')} 
                    onChange={this.onToDate}
                />
            </form>
        );
    }
};

export default ExpenseFilters;