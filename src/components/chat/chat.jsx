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
		room: '',
		rooms: ['Главная'],
		message: '',
		messages: [],
	};

	componentWillMount() {
		this.addMessage();
		this.createRoom();
	}

	componentWillUnmount() {
		const { socket } = this.props;
		socket.emit('USER_LOGOUT');
	}

	onRoomAdd = (room) => {
		const { socket } = this.props;
		socket.emit('ROOM_ADDED', room);
	};

	onMessageSend = (message) => {
		this.setState({ message });
		const { socket, user } = this.props;
		socket.emit('MESSAGE_SENDED', message, user);
		this.setState({ message: '' });
	};

	addMessage() {
		const { socket } = this.props;
		socket.on('MESSAGE_ACCEPTED', (message, user) => {
			this.setState(({ messages }) => ({
				messages: [...messages, { message, user }],
			}));
		});
	}

	createRoom() {
		const { socket } = this.props;
		socket.on('ROOM_CREATED', (room) => {
			this.setState(({ rooms }) => ({
				rooms: [...rooms, room],
			}));
		});
	}


	render() {
		const { rooms, messages } = this.state;
		const { user, onLogout } = this.props;
		console.log(this.state);
		return (
			<div className={chat.container}>
				<div className={chat.chat}>
					<div className={chat.features}>
						<Features user={user} onLogout={onLogout} />
					</div>
					<div className={chat.main}>
						<div className={chat.rooms}>
							<Room room={rooms} />
						</div>
						<div className={chat.messages}>
							<Message messages={messages} />
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
	onLogout: PropTypes.func.isRequired,
	socket: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default Chat;
