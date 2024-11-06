import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartDashboard = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItem);
    const total = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, []);

  const handlSortBtn = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

 const handleRemove = (id) => {
   const updatedCart = cart.filter((item) => item.id !== id);
   localStorage.setItem("cart", JSON.stringify(updatedCart));
   setCart(updatedCart);
   const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
   setTotalPrice(total);

   // Dispatch custom event to notify Navbar about the update
   const cartUpdatedEvent = new Event("cartUpdated");
   window.dispatchEvent(cartUpdatedEvent);
 };

 const handlePurchase = () => {
   setIsModalOpen(true);
   localStorage.setItem("cart", JSON.stringify([]));
   setCart([]);
   setTotalPrice(0);

   // Dispatch custom event to notify Navbar about the update
   const cartUpdatedEvent = new Event("cartUpdated");
   window.dispatchEvent(cartUpdatedEvent);
 };


  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect to home page
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
          <button
            onClick={handlePurchase}
            className={`text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2] ${totalPrice === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={totalPrice === 0}
          >
            Purchase
          </button>
        </div>
      </div>
      {cart.map((cartItem) => {
        const { title, image, price, id, description } = cartItem;
        return (
          <div key={id} className="card bg-base-100 p-4 flex flex-row shadow-xl">
            <figure className="h-[200px]">
              <img className="w-full border-2 rounded-xl h-full object-contain overflow-hidden" src={image} alt="Product" />
            </figure>
            <div>
              <h2 className="text-2xl font-semibold mt-4">{title}</h2>
              <p>{description}</p>
              <p className="text-xl font-medium text-[#09080F99]">Price: ${price}</p>
              <button onClick={() => handleRemove(id)} className="text-red-500">Delete</button>
            </div>
          </div>
        );
      })}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your purchase has been successful!</p>
            <button onClick={closeModal} className="mt-4 text-white bg-[#9538E2] py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDashboard;
