import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Chat from '../chat';
import app from './app.css';
import User from '../user/user-container';


class App extends Component {
	componentWillMount() {
		this.initSocket();
	}

	initSocket = () => {
		const socketUrl = '127.0.0.1:8000';
		const socket = io(socketUrl);
		socket.on('conect', () => {
			console.log('connected');
		});
	};

	render() {
		const { user } = this.props;
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
	}
}

const mapStateToProps = ({ user }) => ({
	user,
});

App.propTypes = {
	user: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, null)(App);
