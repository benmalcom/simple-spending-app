import React, { Component } from 'react';
import AddExpense from './AddExpense/AddExpense';
import ExpenseList from './ExpenseList/ExpenseList';
import { connect } from 'react-redux';
import { showExpenses } from '../../redux/actions/ui';
interface ComponentProps {
	expensesVisible: boolean;
	showExpenses: Function;
}

class Expense extends Component<ComponentProps, any> {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.showExpenses();
	}

	render() {
		const {expensesVisible} = this.props;
		return (expensesVisible ? <ExpenseList/> : <AddExpense/>);
	}
}
const stateProps = ({uiReducer: {expensesVisible}}) => ({
	expensesVisible
});
const dispatchProps = (dispatch: any) => ({
	showExpenses: () => dispatch(showExpenses()),
});
export default connect(stateProps, dispatchProps)(Expense);
