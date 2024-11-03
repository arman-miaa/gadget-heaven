import Hero from "../components/Hero";

const Home = () => {
    return (
      <div>
        <div className="bg-[#9538E2] text-white -mt-[48px]">
          <h1 className="font-bold text-5xl text-center">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <Hero></Hero>
        </div>
        <h1>Home Page...</h1>
      </div>
    );
};

export default Home;