import makeActionCreator from './actionCreator';
import {SET_TEXT_FILTER, SORT_BY_AMOUNT, SORT_BY_DATE, SET_START_DATE, SET_END_DATE} from './constants';

export const setTextFilter = makeActionCreator(SET_TEXT_FILTER, 'text');
export const sortByAmount = makeActionCreator(SORT_BY_AMOUNT);
export const sortByDate = makeActionCreator(SORT_BY_DATE);
export const setStartDate = makeActionCreator(SET_START_DATE, 'startDate');
export const setEndDate = makeActionCreator(SET_END_DATE, 'endDate');