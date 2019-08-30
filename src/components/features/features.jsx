import React from 'react';
import PropTypes from 'prop-types';
import features from './features.css';

const Features = ({ user, onLogout }) => (
	<div className={features.features}>
		<div className={features.user}>
			<p className={features.name}>{user}</p>
			<button type="button" className={features.logout} onClick={onLogout} />
		</div>
		<div className={features.video}>
			<button type="button" className={features.videocall} />
		</div>
	</div>
);


Features.propTypes = {
	user: PropTypes.string.isRequired,
};

export default Features;
