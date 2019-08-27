import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ message, user }) => ({
	message,
	user,
});

Message.propTypes = {
	user: PropTypes.string.isRequired,
	message: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default connect(mapStateToProps, null)(Message);
