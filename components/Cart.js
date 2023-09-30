javascript
// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkout } from '../actions';

const Cart = () => {
 const myCart = useSelector((state) => state.myCart.myCart);
 const dispatch = useDispatch();

 const handleRemoveFromCart = (id) => {
   dispatch(removeFromCart(id));
 };

 const handleCheckout = () => {
   dispatch(checkout());
 }

 return (
   <div>
     <h1>Cart</h1>
     <div>
       {myCart.map((item) => (
         <div key={item.id}>
           <h2>{item.name}</h2>
           <p>{item.description}</p>
           <p>{item.price}</p>
           <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
         </div>
       ))}
     </div>
     <button onClick={handleCheckout}>Checkout</button>
   </div>
 );
};

export default Cart;