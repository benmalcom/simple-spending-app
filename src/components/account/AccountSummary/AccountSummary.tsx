import React, { Component } from 'react';
import './AccountSummary.css';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { hideBalance } from '../../../redux/actions/ui';

interface ComponentProps {
	balance: number;
	hideBalance: Function;
}

class AccountSummary extends Component<ComponentProps, any> {
	constructor(props) {
		super(props);
	}

	@autobind
	onTopUpButtonClicked() {
		this.props.hideBalance();
	}

	render() {
		const {balance} = this.props;
		return (<div className="col-md-4 col-12 summary">
			<div className="summary-top center-content">
				<h5 className="text-muted">Available Balance</h5>
			</div>
			<div className="summary-details center-content">
				{balance >= 0 && <h2>&#36;{Number(balance).toLocaleString()}</h2>}
				{balance < 0 && <h2 className="alert alert-danger">{Number(balance).toLocaleString()}&#36;</h2>}
			</div>
			<div className="summary-actions center-content">
				<button onClick={this.onTopUpButtonClicked}
						className="btn btn-outline-info align-self-center">
					Top-up Balance
				</button>
			</div>
		</div>);
	}
}
const dispatchProps = (dispatch) => ({
	hideBalance: () => dispatch(hideBalance())
});
const stateProps = ({balanceReducer: {balance}}) => ({
	balance
});
export default connect(stateProps,dispatchProps)(AccountSummary);
