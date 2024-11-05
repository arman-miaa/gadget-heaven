
const WishList = ({ product }) => {
    // console.log(product);
    const wishItem = JSON.parse(localStorage.getItem("wish"));

    return (
      <div>
        {wishItem.map((cart) => {
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
        })}
      </div>
    );
};

export default WishList;