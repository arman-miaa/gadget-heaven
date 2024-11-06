import { useEffect, useState } from "react";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(wishItems);
  }, []);

const handleRemove = (id) => {
  const updatedWishList = wishList.filter((item) => item.id !== id);

  localStorage.setItem("wish", JSON.stringify(updatedWishList));

  setWishList(updatedWishList);

  const wishUpdatedEvent = new Event("wishUpdated");
  window.dispatchEvent(wishUpdatedEvent);
};


  const addToCart = (product) => {
    const { title } = product;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const isProductInCart = existingCart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      existingCart.push(product);
      localStorage.setItem("cart", JSON.stringify(existingCart));

       toast.success(` ${title} added in your cart.`, {
         position: "top-center",
       });
      const cartUpdatedEvent = new Event("cartUpdated");
      window.dispatchEvent(cartUpdatedEvent);
    } else {
        toast.warn(` ${title} already added in your cart.`, {
          position: "top-center",
        });
    }
  };

  
 

  return (
    <div>
      <h1 className="text-2xl font-bold"> Wishlist</h1>

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

              <button
                onClick={() => handleRemove(id)}
                className="bg-red-500 text-white rounded-full py-1 px-3 mt-2"
              >
                Delete
              </button>

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
