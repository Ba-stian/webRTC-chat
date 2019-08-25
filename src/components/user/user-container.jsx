import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './user';
import { userSubmitted } from '../../actions';

const UserContainer = ({ onUserSubmit }) => (
	<User onUserSubmit={onUserSubmit} />
);


const mapDispatchToProps = {
	onUserSubmit: userSubmitted,
};

UserContainer.propTypes = {
	onUserSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UserContainer);
