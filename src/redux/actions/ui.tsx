export const SHOW_BALANCE = 'SHOW_BALANCE';
export const HIDE_BALANCE = 'HIDE_BALANCE';
export const SHOW_EXPENSES = 'SHOW_EXPENSES';
export const HIDE_EXPENSES = 'HIDE_EXPENSES';

export const showBalance = () => ({
	type: SHOW_BALANCE
});
export const hideBalance = () => ({
	type: HIDE_BALANCE
});

export const showExpenses = () => ({
	type: SHOW_EXPENSES
});
export const hideExpenses = () => ({
	type: HIDE_EXPENSES
});

