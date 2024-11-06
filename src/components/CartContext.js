// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export  const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [wishCount, setWishCount] = useState(0);

//   const updateCounts = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
//     setCartCount(cartItems.length);
//     setWishCount(wishItems.length);
//   };

//   useEffect(() => {
//     updateCounts();
//   }, []);

//   // Provide a way to manually update the counts when adding/removing items
//   const addItemToCart = (item) => {
//     // Add the item to cart and update localStorage here
//     updateCounts();
//   };

//   const addItemToWishList = (item) => {
//     // Add the item to wishlist and update localStorage here
//     updateCounts();
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartCount, wishCount, addItemToCart, addItemToWishList }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
