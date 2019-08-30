import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
	formClass, onSubmit, inputValue, onChange, inputClass, btnClass, placeholder, btnLabel,
}) => (
	<form className={formClass} onSubmit={onSubmit}>
		<input
			type="text"
			className={inputClass}
			value={inputValue}
			onChange={onChange}
			placeholder={placeholder}
			autoComplete="off"
		/>
		<button className={btnClass} type="submit">{btnLabel}</button>
	</form>
);

Form.propTypes = {
	formClass: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	inputValue: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	inputClass: PropTypes.string.isRequired,
	btnClass: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	btnLabel: PropTypes.string.isRequired,
};

export default Form;
