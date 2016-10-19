//todo: define a reducer for plate
import { ADD_TO_PLATE } from '../constants'; // must use brackets if not exported as default

export default function plate(state = [], action) {
	switch(action.type) {
		case ADD_TO_PLATE:
			return state.concat(action.item); // keeps the old state, returns a new arr
		default:
			return state;
	}
}