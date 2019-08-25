import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from '../chat';
import app from './app.css';
import User from '../user/user-container';


const App = ({ user }) => {
	if (!user) {
		return (
			<div className={app.app}>
				<User />
			</div>
		);
	}
	return (
		<div className={app.app}>
			<Chat user={user} />
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	user,
});

App.propTypes = {
	user: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, null)(App);
