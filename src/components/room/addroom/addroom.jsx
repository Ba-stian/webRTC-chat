import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../widgets/form';
import addroom from './addroom.css';

export default class AddRoom extends Component {
	state = {
		room: '',
	};

	onChange = (e) => {
		this.setState({
			room: e.target.value,
		});
	};

	onRoomAdd = (e) => {
		e.preventDefault();
		const { room } = this.state;
		const { onRoomAdd } = this.props;
		if (!room) {
			return;
		}
		onRoomAdd(room);
		this.setState({
			room: '',
		});
	};

	render() {
		const { room } = this.state;
		return (
			<>
				<Form
					onChange={this.onChange}
					btnClass={addroom.btn}
					btnLabel="добавить"
					inputClass={addroom.input}
					formClass={addroom.form}
					onSubmit={this.onRoomAdd}
					placeholder="Новая комната"
					inputValue={room}
				/>
			</>
		);
	}
}

AddRoom.propTypes = {
	onRoomAdd: PropTypes.func.isRequired,
};
