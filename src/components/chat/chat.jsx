import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import chat from './chat.css';
import Features from '../features';
import Room from '../room';
import AddRoom from '../room/addroom';
import Message from '../message';
import SendMessage from '../message/sendmessage';

class Chat extends Component {
	state = {
		rooms: [],
		message: '',
		messages: [],
	};

	panelRef = React.createRef();

	componentWillMount() {
		this.addMessage();
		this.connectUser();
		const { socket, history, match: { params } } = this.props;
		socket.on('ROOM_CREATED', (room) => {
			this.setState(({ rooms }) => ({
				rooms: [...rooms, room],
			}));
			this.changeRoom(room);
		});
		socket.emit('REQUEST_ROOMS');
		socket.on('SEND_ROOMS', (rooms) => {
			this.setState({ rooms });
			if (rooms.indexOf(params.room) === -1) {
				history.push('/main');
			}
		});
		socket.emit('REQUEST_ROOM_MESSAGES', params.room);
		socket.on('SEND_ROOM_MESSAGES', (messages) => {
			console.log(messages);
			this.setState({ messages });
		});
	}


	componentDidUpdate() {
		this.scrollToBottom();
	}


	onRoomAdd = (room) => {
		const { socket } = this.props;
		socket.emit('ROOM_ADDED', room);
	};

	onMessageSend = (message) => {
		this.setState({ message });
		const { socket, user, match: { params } } = this.props;
		socket.emit('MESSAGE_SENDED', message, user, params.room);
	};

	changeRoom = (room) => {
		const { socket, history } = this.props;

		history.push(`/${room}`);
		socket.emit('REQUEST_ROOM_MESSAGES', room);
	};

	addMessage() {
		const { socket } = this.props;
		socket.on('MESSAGE_ACCEPTED', (message, user, room) => {
			console.log(this.state);
			this.setState(({ messages }) => ({
				messages: [
					...messages, { user, message },
				],
			}));
		});
	}

	connectUser() {
		const { user, socket } = this.props;
		socket.emit('USER_CONNECTED', user);
	}

	scrollToBottom() {
		this.panelRef.current.scrollTo(0, this.panelRef.current.scrollHeight);
	}


	render() {
		const { rooms, messages } = this.state;
		const { user, onLogout, match: { params } } = this.props;
		console.log(this.state, this.props);
		return (
			<div className={chat.container}>
				<div className={chat.chat}>
					<div className={chat.features}>
						<Features user={user} onLogout={onLogout} />
					</div>
					<div className={chat.main}>
						<div className={chat.rooms} ref={this.panelRef}>
							<Room rooms={rooms} changeRoom={this.changeRoom} activeRoom={params.room} />
						</div>
						<div className={chat.messages} ref={this.panelRef}>
							{messages ? <Message messages={messages} /> : null}
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
	socket: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
	history: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
	match: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};

export default withRouter(Chat);
