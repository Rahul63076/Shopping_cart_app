javascript
// reducers/myCartReducer.js
const initialState = {
 myCart: [],
};

const myCartReducer = (state = initialState, action) => {
 switch (action.type) {
 case 'ADD_TO_CART':
   return { ...state, myCart: [...state.myCart, action.payload] };
 case 'REMOVE_FROM_CART':
   return { ...state, myCart: state.myCart.filter((item) => item.id !== action.payload) };
 case 'CHECKOUT':
   return { ...state, myCart: [] };
 default:
   return state;
 }
};

export default myCartReducer;