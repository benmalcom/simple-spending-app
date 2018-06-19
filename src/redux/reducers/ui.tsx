import { Action } from 'redux';
import { HIDE_BALANCE, HIDE_EXPENSES, SHOW_BALANCE, SHOW_EXPENSES } from '../actions/ui';

const uiReducer = (state: object = {}, action: Action) => {
	switch (action.type) {
		case SHOW_BALANCE:
			return Object.assign({}, state, { balanceVisible: true });
		case HIDE_BALANCE:
			return Object.assign({}, state, { balanceVisible: false });
		case SHOW_EXPENSES:
			return Object.assign({}, state, { expensesVisible: true });
		case HIDE_EXPENSES:
			return Object.assign({}, state, { expensesVisible: false });
		default:
			return state;
	}
};

export default uiReducer;
