import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import  App from './components/_app/App';
import './Index.css';

ReactDOM.render(<Provider store={store}>
							<App/>
						</Provider>,
	document.getElementById('root'));
