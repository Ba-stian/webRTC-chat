const initialState = {
	message: [],
};

const createMessage = (state = initialState, action) => {
	switch (action.type) {
	case 'MESSAGE_SENDED':
		return {
			...state,
			message: [...state.message, action.payload],
		};
	default:
		return {
			message: state.message,
		};
	}
};

export default createMessage;
