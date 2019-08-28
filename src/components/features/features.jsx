import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import features from './features.css';
import { userLogout } from '../../actions';

const Features = ({ user, userLogout }) => (
	<div className={features.features}>
		<div className={features.user}>
			<p className={features.name}>{user}</p>
			<button type="button" className={features.logout} onClick={userLogout} />
		</div>
		<div className={features.video}>
			<button type="button" className={features.videocall} />
		</div>
	</div>
);

const mapStateToProps = ({ user }) => ({
	user,
});

const mapDispatchToProps = {
	userLogout,
};

Features.propTypes = {
	user: PropTypes.string.isRequired,
	userLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
