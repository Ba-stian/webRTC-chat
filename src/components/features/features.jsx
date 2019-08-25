import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import features from './features.css';

const Features = ({ user }) => (
	<div className={features.features}>
		<div className={features.user}>
			<p className={features.name}>{user}</p>
			<button type="button" className={features.logout} />
		</div>
		<div className={features.video}><button type="button" className={features.videocall} /></div>
	</div>
);

const mapStateToProps = ({ user }) => ({
	user,
});

Features.propTypes = {
	user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Features);
