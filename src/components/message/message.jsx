import React from 'react';
import PropTypes from 'prop-types';
import style from './message.css';


const Message = ({ user, message }) => {
	const time = new Date().toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
	return (
		<>
			{message.map(msg => (
				<div className={style.message} key={Math.random()}>
					<p className={style.sign}>{message && user}</p>
					<p className={style.text}>{msg}</p>
					<p className={style.sign}>{message && time}</p>
				</div>
			))}
		</>
	);
};


Message.propTypes = {
	user: PropTypes.string.isRequired,
	message: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default Message;
