import { SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY_AMOUNT, SORT_BY_DATE } from '../actions/constants';

const defaultFilters = {
    text: '',
    sortBy: 'amount',
    startDate: null,
    endDate: null
};

const filtersReducer = (state = defaultFilters, actions) => {
    switch (actions.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: actions.text
            }

        case SET_START_DATE:
            return {
                ...state,
                startDate: actions.startDate
            };

        case SET_END_DATE:
            return {
                ...state,
                endDate: actions.endDate
            };

        case SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: 'amount'
            };

        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date'
            }

        default:
            return state;
    }
};

export default filtersReducer;