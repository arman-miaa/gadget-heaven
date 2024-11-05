import { useEffect, useState } from "react";

const WishList = () => {
  // State to hold wishlist items
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    // Retrieve wishlist items from localStorage or initialize an empty array
    const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(wishItems);
  }, []);

  const addToWishlist = (product) => {
    // Retrieve existing wishlist items
    const existingWish = JSON.parse(localStorage.getItem("wish")) || [];

    // Check if the product is already in the wishlist
    const isProductInWishlist = existingWish.some(
      (item) => item.id === product.id
    );

    if (!isProductInWishlist) {
      // If the product is not already in the wishlist, add it
      const updatedWishlist = [...existingWish, product];
      localStorage.setItem("wish", JSON.stringify(updatedWishlist));
      setWishList(updatedWishlist);
    } else {
      // Notify the user that the item is already in the wishlist
      console.log("This item is already in your wishlist.");
      alert("This item is already in your wishlist.");
    }
  };

  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedWishList = wishList.filter((item) => item.id !== id);

    // Update localStorage with the new array
    localStorage.setItem("wish", JSON.stringify(updatedWishList));

    // Update state to reflect the removal
    setWishList(updatedWishList);
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
      <h1>Your Wishlist</h1>
      {/* Buttons to add mock products to wishlist */}
      <button onClick={() => addToWishlist(mockProduct1)} className="btn">
        Add Sample Product 1 to Wishlist
      </button>
      <button onClick={() => addToWishlist(mockProduct2)} className="btn">
        Add Sample Product 2 to Wishlist
      </button>
      {wishList.map((cart) => {
        const { title, image, price, id, description } = cart;
        return (
          <div
            key={id}
            className="card bg-base-100 p-4 flex flex-row shadow-xl"
          >
            <figure className="h-[200px]">
              <img
                className="w-full border-2 rounded-xl h-full object-contain overflow-hidden"
                src={image}
                alt="Product"
              />
            </figure>
            <div>
              <h2 className="text-2xl font-semibold mt-4">{title}</h2>
              <p>{description}</p>
              <p className="text-xl font-medium text-[#09080F99]">
                Price: ${price}
              </p>
              <button onClick={() => handleRemove(id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
