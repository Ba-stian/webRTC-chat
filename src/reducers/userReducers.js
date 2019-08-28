const initialState = {
	user: '',
};

const createUser = (state = initialState, action) => {
	switch (action.type) {
	case 'USER_SUBMITTED':
		return {
			user: action.payload,
		};
	case 'USER_LOGOUT':
		return {
			user: initialState.user,
		};
	default:
		return {
			user: state.user,
		};
	}
};

export default createUser;
