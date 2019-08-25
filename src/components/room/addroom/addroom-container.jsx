import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddRoom from './addroom';
import { roomAdded } from '../../../actions';

const AddroomContainer = ({ onRoomAdd }) => (
	<AddRoom onRoomAdd={onRoomAdd} />
);

const mapDispatchToProps = {
	onRoomAdd: roomAdded,
};
AddroomContainer.propTypes = {
	onRoomAdd: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(AddroomContainer);
