import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartDashboard = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayTotalPrice, setDisplayTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItem);
    const total = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, []);

  const handleSortBtn = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
toast.warning(' removed this product from your cart.', {
  position: "top-center",
});
    const cartUpdatedEvent = new Event("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
  };

  const handlePurchase = () => {
    setDisplayTotalPrice(totalPrice); 
    setIsModalOpen(true);

    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    setTotalPrice(0);

    const cartUpdatedEvent = new Event("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/"); 
  };

  return (
    <div className="">
      <div className="flex justify-between items-center w-9/12  bg-[#F7F7F7]">
        <h1 className="text-2xl font-bold">Cart</h1>

        <div className="flex  items-center gap-6">
          <h2 className="text-2xl font-bold">
            Total Cost: <span>${totalPrice.toFixed(2)}</span>
          </h2>

          <div
            onClick={handleSortBtn}
            className="text-[#9538E2] border-[1px] text-lg font-medium cursor-pointer flex py-[6px] px-4  gap-[5px] rounded-full border-[#9538E2]"
          >
            Sort by price
            <img src="/Frame.png" alt="" />
          </div>

          <button
            onClick={handlePurchase}
            className={` border-[1px] text-white text-lg font-medium py-[6px] px-4 rounded-full border-[#9538E2] ${
              totalPrice === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{
              background: "linear-gradient(90deg, #9538E2, #C256E3)",
            }}
            disabled={totalPrice === 0}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className=" bg-[#F7F7F7]">
        {cart.map((cartItem) => {
          const { title, image, price, id, description } = cartItem;
          return (
            <div className=" bg-white border-2 mt-6 rounded-xl">
              <div
                key={cartItem.id}
                className="card border-red-900   p-4 flex flex-row justify-between items-center px-10 "
              >
                <div className="flex items-center gap-8">
                  <figure className="h-[150px] w-[250px]">
                    <img
                      className="w-full border-2  rounded-2xl  h-full object-contain overflow-hidden"
                      src={image}
                      alt="Product"
                    />
                  </figure>
                  <div className="space-y-[5px]">
                    <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                    <p>{description}</p>
                    <p className="text-xl font-medium text-[#09080F99]">
                      Price: ${price}
                    </p>
                  </div>
                </div>

                {/* delete icon */}
                <div className="border-2 border-red-500 cursor-pointer py-2 px-[12px] rounded-full">
                  <div
                    onClick={() => handleRemove(id)}
                    className="text-red-500 "
                  >
                    <i class="fa-solid fa-x"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 flex flex-col justify-center items-center max-w-sm w-full">
            <img src="/Group.png" alt="" />
            <h2 className="text-2xl font-bold mb-4">Payment Successfully!</h2>
            <hr className="border-[#09080F] opacity-10 w-full my-4" />

            <p>Thanks for purchasing.</p>
            <p>Total: ${displayTotalPrice.toFixed(2)}</p>
            <button
              onClick={closeModal}
              className="mt-4 w-full text-black bg-[#1100003c] py-2 px-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDashboard;
