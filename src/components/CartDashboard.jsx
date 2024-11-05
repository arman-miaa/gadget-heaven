
const CartDashboard = () => {
    
    const cartItem = JSON.parse(localStorage.getItem("cart"));
  // console.log(cartItem);
  
  
    // const {title,image,price,id,description } = cartItem;

    return (
      <div>
        <div className="flex justify-between">
          <h1>Cart Dashboard Page</h1>
          <div className="flex">
            <h2>
              Total Cost <span>0</span>
            </h2>

            <button className="text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2]">
              Sort by price
            </button>
            <button className="text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2]">
              Purchse
            </button>
          </div>
        </div>
        {
          cartItem.map((cart) => {
            const { title, image, price, id, description } = cart;
            return (
              <div className="card bg-base-100 p-4 flex flex-row shadow-xl">
                <figure className=" h-[200px] ">
                  <img
                    className="w-full border-2 rounded-xl h-full object-contain overflow-hidden"
                    src={image}
                    alt="Product"
                  />
                </figure>
                <div className="">
                  <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                  <p>{description}</p>
                  <p className="text-xl font-medium text-[#09080F99]">
                    Price: ${price}
                  </p>
                </div>
              </div>
            );
          })
        }
        <div>
         
        </div>
      </div>
    );
};

export default CartDashboard;