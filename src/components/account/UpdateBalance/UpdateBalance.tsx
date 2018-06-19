import React, { Component, FormEvent } from 'react';
import './UpdateBalance.css';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { incrementBalance } from '../../../redux/actions/balance';
import { showBalance } from '../../../redux/actions/ui';
interface ComponentProps {
	incrementBalance: Function;
	showBalance: Function;
}
class UpdateBalance extends Component<ComponentProps, any> {
	constructor(props){
		super(props);
		this.state = {
			amount: ''
		}
	}
	@autobind
	handleUpdate(){
		const {amount}  = this.state;
		this.props.incrementBalance(amount);
		this.props.showBalance();
	}

	@autobind
	handleInputChange(e: FormEvent<HTMLInputElement>){
		const target = e.currentTarget;
		this.setState({[target.name]: parseInt(target.value)});
	}

	render() {
		const {amount} = this.state;
		return (<div className="col-md-4 col-12 update">
			<div className="update-top center-content">
				<h5 className="text-muted">Update Balance</h5>
			</div>
			<div className="update-details center-content px-2">
				<input type="number" placeholder="Enter amount" value={amount}
					   className="form-control" onChange={this.handleInputChange}
					   name="amount"/>
			</div>
			<div className="update-actions center-content">
				<button onClick={this.handleUpdate} className="btn btn-outline-info">Update</button>
			</div>
		</div>);
	}
}
const dispatchProps = (dispatch: any) => ({
	incrementBalance: (amount: number) => dispatch(incrementBalance(amount)),
	showBalance: () => dispatch(showBalance()),
});

export default connect(null, dispatchProps)(UpdateBalance);
