export const userSubmitted = user => ({
	type: 'USER_SUBMITTED',
	payload: user,
});

export const messageSended = message => ({
	type: 'MESSAGE_SENDED',
	payload: message,
});

export const roomAdded = room => ({
	type: 'ROOM_ADDED',
	payload: room,
});

export const userLogout = () => ({
	type: 'USER_LOGOUT',
});
