import { FETCH_SURVEYS } from '../actions/types';
export default function(state = [], aciton) {
	switch (aciton.type) {
		case FETCH_SURVEYS:
			return aciton.payload;
		default:
			return state;
	}
}
