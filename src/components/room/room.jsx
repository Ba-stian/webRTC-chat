import React from 'react';
import PropTypes from 'prop-types';
import style from './room.css';

const Room = ({ rooms, changeRoom, activeRoom }) => (
	<>
		{rooms.map((room) => {
			const linkClasses = activeRoom === room ? style.active : '';
			return (
				<button
					type="button"
					onClick={() => changeRoom(room)}
					className={`${style.room} ${linkClasses}`}
					key={Math.random()}
				>
					{room}
				</button>

			);
		})}
	</>
);


Room.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	changeRoom: PropTypes.func.isRequired,
	activeRoom: PropTypes.string.isRequired,
};


export default Room;
