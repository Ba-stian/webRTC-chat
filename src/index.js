import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';


render(
	<ErrorBoundry>
		<Router>
			<App />
		</Router>
	</ErrorBoundry>,
	document.getElementById('root'),
);
