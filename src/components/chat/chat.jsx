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
		rooms: ['Главная'],
		message: '',
		messages: [],
	};

	componentWillMount() {
		const { socket } = this.props;
		socket.on('MESSAGE_ACCEPTED', (message, user) => {
			console.log('add message', message, user);
			this.setState(({ messages }) => ({
				messages: [...messages, { message, user }],
			}));
		});
	}

	componentWillUnmount() {
		const { socket } = this.props;
		socket.emit('USER_LOGOUT');
	}

	onRoomAdd = (room) => {
		this.setState(prevState => ({
			room: [...prevState.room, room],
		}));
	};

	onMessageSend = (message) => {
		this.setState({ message });
		const { socket, user } = this.props;
		socket.emit('MESSAGE_SENDED', message, user);
		this.setState({ message: '' });
	};


	render() {
		const { room, messages } = this.state;
		const { user, onLogout, socket } = this.props;
		console.log(this.state);
		return (
			<div className={chat.container}>
				<div className={chat.chat}>
					<div className={chat.features}>
						<Features user={user} onLogout={onLogout} />
					</div>
					<div className={chat.main}>
						<div className={chat.rooms}>
							<Room room={room} />
						</div>
						<div className={chat.messages}>
							<Message messages={messages} />
						</div>
					</div>
					<div className={chat.footer}>
						<div className={chat.new_room}>
							<AddRoom onRoomAdd={this.onRoomAdd} socket={socket} />
						</div>
						<div className={chat.new_message}>
							<SendMessage
								onMessageSend={this.onMessageSend}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Chat.propTypes = {
	user: PropTypes.string.isRequired,
	onLogout: PropTypes.func.isRequired,
	socket: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default Chat;
