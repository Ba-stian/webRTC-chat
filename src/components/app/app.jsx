import React, { Component } from 'react';
import io from 'socket.io-client';
import app from './app.css';
import Chat from '../chat';
import User from '../user';


class App extends Component {
	state = {
		user: '',
		socket: '',
	};

	componentDidMount() {
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
		this.addUser();
	};

	addUser = () => {
		const { socket, user } = this.state;
		socket.emit('USER_CONNECTED', user);
	};

	onLogout = () => {
		this.setState({
			user: '',
		});
	};

	render() {
		const { user, socket } = this.state;
		if (!user) {
			return (
				<div className={app.app}>
					<User onUserSubmit={this.onUserSubmit} />
				</div>
			);
		}
		return (
			<div className={app.app}>
				<Chat user={user} onLogout={this.onLogout} socket={socket} />
			</div>
		);
	}
}


export default App;
