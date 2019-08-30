import React, { Component } from 'react';
import PropTypes from 'prop-types';
import chat from './chat.css';
import Features from '../features';
import Room from '../room';
import AddRoom from '../room/addroom';
import Message from '../message';
import SendMessage from '../message/sendmessage';

class Chat extends Component {
	state = {
		room: ['Главная'],
		message: [],
	};

	onRoomAdd = (room) => {
		this.setState({
			room: [...this.state.room, room],
		});
	};

	onMessageSend = (message) => {
		this.setState({
			message: [...this.state.message, message],
		});
	};

	render() {
		const { room, message } = this.state;
		const { user, onLogout } = this.props;
		return (
			<div className={chat.container}>
				<div className={chat.chat}>
					<div className={chat.features}>
						<Features user={user} onLogout={onLogout}/>
					</div>
					<div className={chat.main}>
						<div className={chat.rooms}>
							<Room room={room} />
						</div>
						<div className={chat.messages}>
							<Message user={user} message={message} />
						</div>
					</div>
					<div className={chat.footer}>
						<div className={chat.new_room}>
							<AddRoom onRoomAdd={this.onRoomAdd} />
						</div>
						<div className={chat.new_message}>
							<SendMessage onMessageSend={this.onMessageSend} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Chat.propTypes = {
	user: PropTypes.string.isRequired,
};

export default Chat;
