import createUser from './userReducers';
import createMessage from './messageReducers';
import createRoom from './roomReducers';

const reducer = (state, action) => ({
	...createUser(state, action),
	...createMessage(state, action),
	...createRoom(state, action),
});

export default reducer;
