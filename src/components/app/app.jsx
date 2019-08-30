import React, { Component } from 'react';
import Chat from '../chat';
import app from './app.css';
import User from '../user';


class App extends Component {
	state = {
		user: '',
	};

	onUserSubmit = (username) => {
		this.setState({
			user: username,
		});
	};

	onLogout = () => {
		this.setState({
			user: '',
		});
	};

	render() {
		const { user } = this.state;
		if (!user) {
			return (
				<div className={app.app}>
					<User onUserSubmit={this.onUserSubmit} />
				</div>
			);
		}
		return (
			<div className={app.app}>
				<Chat user={user} onLogout={this.onLogout} />
			</div>
		);
	}
}


export default App;
