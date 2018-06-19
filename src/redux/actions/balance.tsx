export const GET_BALANCE = 'GET BALANCE';
export const INCREMENT_BALANCE = 'INCREMENT BALANCE';
export const DECREMENT_BALANCE = 'DECREMENT BALANCE';

export const getBalance = () => ({
	type: GET_BALANCE
});

export const incrementBalance = (amount: Number) => ({
	type: INCREMENT_BALANCE,
	amount,
});
export const decrementBalance = (amount: Number) => ({
	type: DECREMENT_BALANCE,
	amount,
});
