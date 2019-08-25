import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { messageSended } from '../../../actions';
import SendMessage from './sendmessage';

const SendmessageContainer = ({ onMessageSend }) => (
	<SendMessage onMessageSend={onMessageSend} />
);
const mapDispatchToProps = {
	onMessageSend: messageSended,
};

SendmessageContainer.propTypes = {
	onMessageSend: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(SendmessageContainer);
