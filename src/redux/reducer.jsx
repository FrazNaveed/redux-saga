const initialState = ['Add work'];
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			state.unshift(action.payload);
			return [...state];
		case 'DELETE_TODO':
			state.splice(action.payload, 1);
			return [...state];
		case 'FETCH_DATA_SUCCESS':
			return [...state, action.res];
		default:
			return state;
	}
};

export default todoReducer;
