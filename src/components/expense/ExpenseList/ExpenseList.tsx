import React, { Component } from 'react';
import './ExpenseList.css';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { hideExpenses } from '../../../redux/actions/ui';

interface Expense {
	id: string;
	amount: number;
	description: string;
	created_at: Date;
}

interface ComponentProps {
	expenses: Array<Expense>;
	hideExpenses: Function;
}

class ExpenseList extends Component<ComponentProps, any> {
	constructor(props) {
		super(props);
	}

	@autobind
	onAddExpenseClick() {
		this.props.hideExpenses();
	}

	render() {
		const {expenses} = this.props;
		let list = expenses.sort((a: Expense, b: Expense) => Number(b.created_at) - Number(a.created_at))
			.map((expense: Expense) => (
				<li key={expense.id}
					className="list-group-item d-flex justify-content-between align-items-center">
					{expense.description}
					<span className="badge badge-info badge-pill">&#36;{Number(expense.amount).toLocaleString()}</span>
				</li>));
		return (<div className="col-md-7 col-12 summary p-2 ml-3">
			<button onClick={this.onAddExpenseClick} className="btn btn-outline-info">Add Expense</button>
			{list.length > 0 && <ul className="list-group mt-2">{list}</ul>}
			{!list.length && <p className="alert alert-light mt-2">No expenses yet!</p>}
		</div>);
	}
}

const stateProps = ({expenseReducer: {expenses}}) => ({
	expenses
});
const dispatchProps = (dispatch) => ({
	hideExpenses: () => dispatch(hideExpenses())
});
export default connect(stateProps, dispatchProps)(ExpenseList);
