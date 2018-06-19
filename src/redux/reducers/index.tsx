import { combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import balanceReducer from '../reducers/balance';
import uiReducer from '../reducers/ui';

export default combineReducers({
	expenseReducer,
	balanceReducer,
	uiReducer
});
