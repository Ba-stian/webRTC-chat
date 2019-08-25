import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Room = ({ room }) => (
	<>
		<p>{room || ''}</p>
	</>
);


const mapStateToProps = ({ room }) => ({
	room,
});

Room.propTypes = {
	room: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, null)(Room);
