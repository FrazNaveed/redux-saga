export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const add_TODO = (todo) => {
	return {
		type: 'ADD_TODO',
		payload: todo,
	};
};
export const delete_TODO = (todo) => {
	return {
		type: 'DELETE_TODO',
		payload: todo,
	};
};
export const fetchData = () => {
	return {
		type: 'FETCH_DATA_SUCCESS',
	};
};
