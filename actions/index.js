javascript
// actions/index.js
export const setProducts = (products) => ({
 type: 'SET_PRODUCTS',
 payload: products,
});

export const addToCart = (product) => ({
 type: 'ADD_TO_CART',
 payload: product,
});

export const removeFromCart = (id) => ({
 type: 'REMOVE_FROM_CART',
 payload: id,
});

export const checkout = () => ({
 type: 'CHECKOUT',
});