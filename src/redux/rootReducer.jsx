import { combineReducers } from 'redux';
import todoReducer from './reducer';

const rootReducer = combineReducers({
	toDoList: todoReducer,
});

export default rootReducer;
