import { useEffect, useState } from "react";

const WishList = () => {
  // Retrieve wishlist items from localStorage or initialize an empty array
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(wishItems);
  }, []);

  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedWishList = wishList.filter((item) => item.id !== id);

    // Update localStorage with the new array
    localStorage.setItem("wish", JSON.stringify(updatedWishList));

    // Update state to reflect the removal
      setWishList(updatedWishList);
    //   window.location.reload();
  };

  return (
    <div>
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
