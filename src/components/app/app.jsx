import React, { Component } from 'react';
import io from 'socket.io-client';
import { Route, Switch } from 'react-router-dom';
import app from './app.css';
import Chat from '../chat';
import User from '../user';

class App extends Component {
	state = {
		user: '',
		socket: '',
	};

	componentWillMount() {
		this.initSocket();
	}

	initSocket = () => {
		const socket = io('127.0.0.1:8000');
		this.setState({
			socket,
		});
	};


	onUserSubmit = (username) => {
		this.setState({
			user: username,
		});
	};

	onLogout = () => {
		const { socket, user } = this.state;
		socket.emit('USER_LOGOUT', user);
		this.setState({
			user: '',
		});
	};

	render() {
		const { user, socket } = this.state;
		if (!user) {
			return (
				<User onUserSubmit={this.onUserSubmit} />
			);
		}
		return (
			<div className={app.app}>
				<Switch>
					<Route path="/:room?" component={() => <Chat user={user} onLogout={this.onLogout} socket={socket} />} />
				</Switch>
			</div>
		);
	}
}


export default App;
