import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './room.css';

const Room = ({ room }) => (
	<>
		{room.map(rm => <p className={style.room} key={Math.random()}>{rm || ''}</p>)}
	</>
);


const mapStateToProps = ({ room }) => ({
	room,
});

Room.propTypes = {
	room: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default connect(mapStateToProps, null)(Room);
