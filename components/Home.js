javascript
// components/Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, addToCart } from '../actions';

const Home = () => {
 const products = useSelector((state) => state.products.products);
 const dispatch = useDispatch();

 useEffect(() => {
 fetch('https://dummyjson.com/products')
   .then((res) => res.json())
   .then((data) => dispatch(setProducts(data)));
 }, [dispatch]);

 const handleAddToCart = (product) => {
  dispatch(addToCart(product));
 };

 return (
   <div>
     <h1>Products</h1>
     <div>
       {products.map((product) => (
         <div key={product.id}>
           <h2>{product.name}</h2>
           <p>{product.description}</p>
           <p>{product.price}</p>
           <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
         </div>
       ))}
     </div>
   </div>
 );
};

export default Home;