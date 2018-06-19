import { Action } from 'redux';
import { ADD_EXPENSE, GET_EXPENSES } from '../actions/expense';

interface ExpenseAction extends Action{
	expense: object;
}

const expenseReducer = (state = {expenses: []}, action: ExpenseAction) => {
	switch (action.type) {
		case ADD_EXPENSE:
			return Object.assign({}, state, {
				expenses: [...state.expenses, action.expense]
			});
		case GET_EXPENSES:
		default:
			return state;
	}
};

export default expenseReducer;
