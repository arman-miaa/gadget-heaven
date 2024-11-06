import { Link, Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Categories from "../components/Categories";
import { useEffect } from "react";



const Home = () => {
  const categories = useLoaderData();
  useEffect(() => {
    document.title = "Home Page";
  }, []);
    return (
      <div id="products" className="bg-[#F7F7F7] pb-16 rounded-xl">
        <div className="bg-[#9538E2] relative  pb-32 text-white -mt-[48px] text-center rounded-b-xl">
          <h1 className="font-bold text-5xl ">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="my-6">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <Link
            to="/dashboard"
            className="btn rounded-full text-xl font-bold px-6 mb-6 text-[#9538E2]"
          >
            Shop Now
          </Link>

          <Hero></Hero>
        </div>
        <div className="mb-16 w-full  -mt-28 sticky">
          <div className="border-2 w-3/4 mx-auto p-4 rounded-xl">
            <img
              className=" w-full mx-auto rounded-2xl  text-center  h-[363px] "
              src="/banner.jpg"
              alt=""
            />
          </div>
        </div>
        {/* <Products></Products> */}
        <h1 id="my" className="text-center text-4xl font-bold mb-12">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className=" flex gap-8 mx-8">
          <div className="flex">
            <Categories categories={categories}></Categories>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Home;