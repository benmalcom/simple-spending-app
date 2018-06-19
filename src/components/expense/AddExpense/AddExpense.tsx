import React, { Component, FormEvent } from 'react';
import './AddExpense.css';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { addExpense } from '../../../redux/actions/expense';
import { showExpenses } from '../../../redux/actions/ui';
import { decrementBalance } from '../../../redux/actions/balance';
interface ComponentProps {
	addExpense: Function;
	showExpenses: Function;
	decrementBalance: Function;
}
class UpdateBalance extends Component<ComponentProps, any> {
	constructor(props){
		super(props);
		this.state = {
			amount: '',
			description: ''
		}
	}
	@autobind
	handleSubmit(){
		const values = Object.assign({}, this.state, {created_at: Date.now()});
		this.props.addExpense(values);
		this.props.decrementBalance(values.amount);
		this.props.showExpenses();
	}

	@autobind
	handleInputChange(e: FormEvent<HTMLInputElement>){
		const target = e.currentTarget;
		this.setState({[target.name]: target.value});
	}

	render() {

		return (<div className="col-md-7 summary p-2 ml-3">
			<form onSubmit={this.handleSubmit}>
				<legend className="text-muted text"><h4>Add new expense</h4></legend>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Expense Description</label>
					<input type="text" className="form-control" name="description" required={true}
						   placeholder="Enter description" onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Amount</label>
					<input type="number" className="form-control" name="amount" required={true}
						   placeholder="Enter amount spent" onChange={this.handleInputChange}/>
				</div>
				<button type="submit" className="btn btn-info">Submit</button>
			</form>
		</div>);
	}
}
const dispatchProps = (dispatch) => ({
	addExpense: (obj: object) => dispatch(addExpense(obj)),
	showExpenses: () => dispatch(showExpenses()),
	decrementBalance: (amount: number) => dispatch(decrementBalance(amount))
});
export default connect(null,dispatchProps)(UpdateBalance);
