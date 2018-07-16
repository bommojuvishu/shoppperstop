import { ADD_GROCERY,REMOVE_GROCERY } from '../actions';
import groceryItemsList from '../data/groceryItems.json';
import {addToBag} from './helper.js';

export default function shoppingBag(state=[], action) {
	switch(action.type) {
		case ADD_GROCERY:
		console.log("add grocery clicked and shoppingBag action is ");
			let shoppingBag = [...state, addToBag(action.id)];

			return shoppingBag;
		case REMOVE_GROCERY:
		shoppingBag=state.filter((item) => item.id !== action.id );
		return shoppingBag;
		default:
			return state;
	}
}
