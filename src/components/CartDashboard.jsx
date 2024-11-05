import { useEffect, useState } from "react";

const CartDashboard = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItem);
  }, []);

  useEffect(() => {
    // Recalculate total price whenever cart updates
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handlSortBtn = () => {
    // Sort cart items by price in descending order
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedCart = cart.filter((item) => item.id !== id);

    // Update localStorage with the new array
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update state to reflect the removal
    setCart(updatedCart);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Cart Dashboard Page</h1>
        <div className="flex">
          <h2>
            Total Cost: <span>${totalPrice}</span>
          </h2>

          <button
            onClick={handlSortBtn}
            className="text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2]"
          >
            Sort by price
          </button>
          <button className="text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2]">
            Purchase
          </button>
        </div>
      </div>
      {cart.map((cartItem) => {
        const { title, image, price, id, description } = cartItem;
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
              <button onClick={() => handleRemove(id)} className="text-red-500">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartDashboard;
