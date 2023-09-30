javascript
// reducers/index.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import myCartReducer from './myCartReducer';

export default combineReducers({
 products: productsReducer,
 myCart: myCartReducer,
});