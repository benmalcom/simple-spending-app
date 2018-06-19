export const GET_EXPENSES = 'GET_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const getExpenses = () => ({
	type: GET_EXPENSES
});

export const addExpense = (expense: object) => ({
	type: ADD_EXPENSE,
	expense,
});
