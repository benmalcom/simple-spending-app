import { DECREMENT_BALANCE, GET_BALANCE, INCREMENT_BALANCE, } from '../actions/balance';
import { Action } from 'redux';

interface BalanceAction extends Action{
	amount: number;
}

const balanceReducer = (state = {balance: 0}, action: BalanceAction) => {
	switch (action.type) {
		case INCREMENT_BALANCE:
			return Object.assign({}, state, { balance: state.balance + action.amount });
		case DECREMENT_BALANCE:
			return Object.assign({}, state, { balance: state.balance - action.amount });
		case GET_BALANCE:
		default:
			return state;
	}
};

export default balanceReducer;
