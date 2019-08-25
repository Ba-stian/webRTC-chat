const initialState = {
	room: 'Главная',
};

const createRoom = (state = initialState, action) => {
	switch (action.type) {
	case 'ROOM_ADDED':
		return {
			room: action.payload,
		};
	default:
		return {
			room: state.room,
		};
	}
};

export default createRoom;
