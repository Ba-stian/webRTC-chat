import React from 'react';
import PropTypes from 'prop-types';
import style from './message.css';


const Message = ({ messages }) => {
	const time = new Date().toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
	return (
		<>
			{messages.map(({ message, user }) => (
				<div className={style.message} key={Math.random()}>
					<p className={style.sign}>{user}</p>
					<p className={style.text}>{message}</p>
					<p className={style.sign}>{time}</p>
				</div>
			))}
		</>
	);
};


Message.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default Message;
