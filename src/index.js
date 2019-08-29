import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';


render(
	<Provider store={store}>
		<ErrorBoundry>
			<App />
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root'),
);
