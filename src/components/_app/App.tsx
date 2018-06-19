import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
// import ReduxToastr from 'react-redux-toastr';

// Import general css dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Account from '../account/Account';
import Expense from '../expense/Expense';


const App = () => (<div className="container-fluid">
						<div className="row col-md-8 mx-auto">
							<Account/><Expense/>
						</div>
				</div>);
export default App;
