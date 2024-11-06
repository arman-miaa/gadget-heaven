import { useEffect, useState } from "react";

const WishList = () => {
  // State to hold wishlist items
  const [wishList, setWishList] = useState([]);

  // Effect to load wishlist from localStorage on initial load
  useEffect(() => {
    // Retrieve wishlist items from localStorage or initialize an empty array
    const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(wishItems);
  }, []);

  // Function to handle removing an item from the wishlist
  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedWishList = wishList.filter((item) => item.id !== id);

    // Update localStorage with the new wishlist array
    localStorage.setItem("wish", JSON.stringify(updatedWishList));

    // Update state to reflect the removal of the item
    setWishList(updatedWishList);
  };

  // Function to handle adding an item to the cart
  const addToCart = (product) => {
    // Retrieve existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      // If the product is not already in the cart, add it
      existingCart.push(product);
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // Update state with the new cart
      // Optional: You can dispatch a custom event here if needed
      const cartUpdatedEvent = new Event("cartUpdated");
      window.dispatchEvent(cartUpdatedEvent);
    } else {
      // Optionally handle the case where the product is already in the cart
      alert("This item is already in your cart.");
    }
  };

  // Mock product data for demonstration (you can replace this with actual product data from your app)
  const mockProduct1 = {
    id: 1,
    title: "Sample Product 1",
    image: "https://via.placeholder.com/150",
    price: 29.99,
    description: "This is a sample product description.",
  };

  const mockProduct2 = {
    id: 2,
    title: "Sample Product 2",
    image: "https://via.placeholder.com/150",
    price: 19.99,
    description: "This is another sample product description.",
  };

  return (
    <div>
      <h1> Wishlist Page</h1>

      {/* Loop through the wishlist and display each item */}
      {wishList.map((cart) => {
        const { title, image, price, id, description } = cart;
        return (
          <div
            key={id}
            className="card bg-base-100 p-4 flex flex-row shadow-xl"
          >
            {/* Product image */}
            <figure className="h-[200px]">
              <img
                className="w-full border-2 rounded-xl h-full object-contain overflow-hidden"
                src={image}
                alt="Product"
              />
            </figure>
            <div>
              {/* Product title and description */}
              <h2 className="text-2xl font-semibold mt-4">{title}</h2>
              <p>{description}</p>
              <p className="text-xl font-medium text-[#09080F99]">
                Price: ${price}
              </p>

              {/* Button to remove the item from the wishlist */}
              <button
                onClick={() => handleRemove(id)}
                className="bg-red-500 text-white rounded-full py-1 px-3 mt-2"
              >
                Delete
              </button>

              {/* Button to add the item to the cart */}
              <button
                onClick={() => addToCart(cart)}
                className="bg-blue-500 text-white rounded-full py-1 px-3 mt-2 ml-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
