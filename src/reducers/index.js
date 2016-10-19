import { combineReducers } from 'redux';
import plate from './plate';
import menu from './menu';

//todo: build a rootReducer:
const rootReducer = combineReducers({
	plate,
	menu
});

export default rootReducer;
