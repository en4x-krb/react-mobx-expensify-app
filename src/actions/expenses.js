import makeActionCreator from './actionCreator';
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from "./constants";

export const addExpense = makeActionCreator(ADD_EXPENSE, 'expense');
export const editExpense = makeActionCreator(EDIT_EXPENSE, 'id', 'updatedExpense');
export const removeExpense = makeActionCreator(REMOVE_EXPENSE, 'id');