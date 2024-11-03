import Hero from "../components/Hero";

const Home = () => {
    return (
      <div>
        <div className="bg-[#9538E2] relative  pb-32 text-white -mt-[48px] text-center rounded-b-xl">
          <h1 className="font-bold text-5xl ">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p>
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button className="btn">Shop Now</button>

          <Hero></Hero>
        </div>
        <div className="mb-16 w-full  -mt-8 sticky">
          <div className="border-2 w-1/2 mx-auto p-4 rounded-xl">
            <img
              className=" w-full mx-auto rounded-2xl  text-center  h-[363px] "
              src="/public/banner.jpg"
              alt=""
            />
          </div>
        </div>
        <h1>Home Page...</h1>
      </div>
    );
};

export default Home;