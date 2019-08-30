import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';


render(
	<ErrorBoundry>
		<App />
	</ErrorBoundry>,
	document.getElementById('root'),
);
