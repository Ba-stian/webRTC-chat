import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../widgets/form';
import sendmessage from './sendmessage.css';

class SendMessage extends Component {
	state = {
		message: '',
	};

	onChange = (e) => {
		this.setState({
			message: e.target.value,
		});
	};

	onMessageSend = (e) => {
		e.preventDefault();
		const { message } = this.state;
		const { onMessageSend } = this.props;
		if (!message) {
			return;
		}
		onMessageSend(message);
		this.setState({
			message: '',
		});
	};

	render() {
		const { message } = this.state;
		return (
			<>
				<Form
					onChange={this.onChange}
					btnClass={sendmessage.btn}
					btnLabel="Отправить сообщение"
					inputClass={sendmessage.input}
					formClass={sendmessage.form}
					onSubmit={this.onMessageSend}
					placeholder="Ваше сообщение"
					inputValue={message}
				/>
			</>
		);
	}
}


SendMessage.propTypes = {
	onMessageSend: PropTypes.func.isRequired,
};

export default SendMessage;
