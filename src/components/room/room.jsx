import React from 'react';
import PropTypes from 'prop-types';
import style from './room.css';

const Room = ({ room }) => (
	<>
		{room.map(rm => <p className={style.room} key={Math.random()}>{rm || ''}</p>)}
	</>
);


Room.propTypes = {
	room: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default Room;
