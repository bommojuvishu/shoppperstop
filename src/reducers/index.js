import grocery from './grocery_reducer.js';
import shoppingBag from './shoppingBag_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers ({grocery,shoppingBag});

export default rootReducer;
