// import React, { useState, useEffect } from 'react';

// const CartContext = React.createContext();

// function CartProvider({ children }) {
//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

//     // Save to local storage whenever cart changes
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (product) => {
//         // Add your add to cart logic here
//     };

//     const removeFromCart = (productId) => {
//         // Add your remove from cart logic here
//     };

//     // More functions as needed...

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export { CartContext, CartProvider };




// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const isItemInCart = prevCart.find((cartItem) => cartItem.id === product.id);
//       if (isItemInCart) {
//         return prevCart.map((cartItem) => 
//           cartItem.id === product.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const isItemInCart = prevCart.find((cartItem) => cartItem.id === product.id);
      if (isItemInCart) {
        return prevCart.map((cartItem) => 
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};