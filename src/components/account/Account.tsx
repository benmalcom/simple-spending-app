import React, { Component } from 'react';
import AccountSummary from './AccountSummary/AccountSummary';
import UpdateBalance from './UpdateBalance/UpdateBalance';
import { connect } from 'react-redux';
import { showBalance } from '../../redux/actions/ui';

interface ComponentProps {
	showBalance: Function;
	balanceVisible: boolean;
}

class Account extends Component<ComponentProps, any> {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.showBalance();
	}

	render() {
		const {balanceVisible} = this.props;
		return (balanceVisible ? <AccountSummary /> : <UpdateBalance/>);
	}
}

const stateProps = ({uiReducer: {balanceVisible}}) => ({
	balanceVisible
});
const dispatchProps = (dispatch: any) => ({
	showBalance: () => dispatch(showBalance()),
});
export default connect(stateProps, dispatchProps)(Account);
