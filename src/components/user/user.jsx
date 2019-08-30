import React, { Component } from 'react';
import PropTypes from 'prop-types';
import user from './user.css';
import Form from '../widgets/form';

export default class User extends Component {
	state = {
		username: '',
	};

	onChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { username } = this.state;
		const { onUserSubmit } = this.props;
		if (!username) {
			return;
		}
		onUserSubmit(username);
		this.setState({
			username: '',
		});
	};

	render() {
		const { username } = this.state;
		return (
			<div className={user.user}>
				<h1 className={user.header}>Представьтесь, пожалуйста</h1>
				<Form
					onChange={this.onChange}
					btnClass={user.btn}
					btnLabel="войти"
					inputClass={user.input}
					formClass={user.form}
					onSubmit={this.onSubmit}
					placeholder="Введите ваше имя"
					inputValue={username}
				/>
			</div>
		);
	}
}

User.propTypes = {
	onUserSubmit: PropTypes.func.isRequired,
};
