import { useLoaderData, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const { detail } = useParams();
  // console.log(detail);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [wishList,setWishList] =useState([])

  useEffect(() => {
    const productDetails = data.find((item) => Number(item.id )=== Number(detail));
    setProduct(productDetails)
  }, [data,detail])
  const { image, title, price, description, specification, rating } = product;

 useEffect(() => {
   
   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
   setCart(existingCart);

   const existingWish = JSON.parse(localStorage.getItem("wish")) || [];
   setWishList(existingWish);
 }, []);
const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const isProductInCart = existingCart.some((item) => item.id === product.id);

  if (!isProductInCart) {
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

   
    const cartUpdatedEvent = new Event("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
     toast.success(` ${title} added in your cart.`, {
       position: "top-center",
     });
  } else {
    toast.warn(` ${title} already added in your cart.`, {
      position: "top-center",
    });
  }
};

const addToWishlist = (product) => {
  const existingWish = JSON.parse(localStorage.getItem("wish")) || [];
  const isProductInWishlist = existingWish.some(
    (item) => item.id === product.id
  );

  if (!isProductInWishlist) {
    const updatedWishlist = [...existingWish, product];
    localStorage.setItem("wish", JSON.stringify(updatedWishlist));
    setWishList(updatedWishlist);

     toast.success(` ${title} added in your cart.`, {
       position: "top-center",
     });

    const wishUpdatedEvent = new Event("wishUpdated");
    window.dispatchEvent(wishUpdatedEvent);
  } else {
     toast.warn(` ${title} already added in your cart.`, {
       position: "top-center",
     });
  }
  };
  
  useEffect(() => {
    document.title = "Product Details";
  }, []);


  return (
    <div>
      <div className="bg-[#9538E2] rounded-xl relative  pb-32 text-white -mt-[48px] text-center ">
        <h1 className="font-bold text-5xl pt-8 ">Product Details</h1>
        <p className="my-6">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>

        <Hero></Hero>
      </div>
      <div className="mb-16 w-full   -mt-28 sticky">
        <div className="border-2 bg-white w-3/4 mx-auto p-4 rounded-xl flex   gap-6">
          <div className="border-2 rounded-xl w-[300px]">
            <img src={image} alt="" />
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className="text-xl font-semibold">Price:${price}</p>
            <button className="bg-[#309C081A] border-2 border-green-400 p-[4px] px-2 rounded-full">
              <span className={product?.availability ? "text-green-500 px-4" : "text-red-500"}>
  {product?.availability ? "In Stock" : "No"}
</span>

            </button>
            <p className="text-xl text-[#09080F99]">{description}</p>
            <h3 className="text-xl font-bold">Specification:</h3>
            <ul className="text-[#09080F99] text-lg space-y-[4px]">
              {specification?.map((item, ind) => (
                <li key={ind}>
                  {ind + 1}. {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-xl">Rating : {rating}⭐ </p>
            <div className=" w-full flex justify-start items-center gap-4  py-1">
              <button
                className="bg-[#9538E2] md:w-max font-bold text-lg rounded-full py-[6px] px-4 text-[white]"
                onClick={() => addToCart(product)}
              >
                Add To Card{" "}
                <i className="fa-solid fa-cart-arrow-down ml-[4px] "></i>
              </button>

              <button onClick={() => addToWishlist(product)}>
                {" "}
                <i className="fa-regular fa-heart text-2xl border-2 py-2 px-[10px] rounded-full"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;