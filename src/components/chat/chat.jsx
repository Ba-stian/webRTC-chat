import React from 'react';
import chat from './chat.css';
import Room from '../room';
import SendmessageContainer from '../message/sendmessage';
import Message from '../message';
import AddroomContainer from '../room/addroom';
import Features from '../features';

const Chat = () => (
	<div className={chat.container}>
		<div className={chat.chat}>
			<div className={chat.features}>
				<Features />
			</div>
			<div className={chat.main}>
				<div className={chat.rooms}>
					<Room />
				</div>
				<div className={chat.messages}>
					<Message />
				</div>
			</div>
			<div className={chat.footer}>
				<div className={chat.new_room}>
					<AddroomContainer />
				</div>
				<div className={chat.new_message}>
					<SendmessageContainer />
				</div>
			</div>
		</div>
	</div>
);

export default Chat;
