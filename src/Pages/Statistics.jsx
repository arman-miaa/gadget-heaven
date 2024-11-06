import { useEffect } from "react";
import Hero from "../components/Hero";



const Statistics = () => {
   useEffect(() => {
     document.title = "Statistics Page";
   }, []);

    return (
      <div>
        <div className="bg-[#9538E2] relative pt-12 pb-32 text-white  text-center -mt-8 rounded-xl">
          <h1 className="font-bold text-5xl ">Statistics</h1>
          <p className="my-6 w-1/2 mx-auto">
            Connect with us to discover the latest gadgets that will elevate
            your experience. From innovative smart devices to top-notch
            accessories, Gadget Heaven is here to bring you the best in tech!
          </p>

          <Hero></Hero>
        </div>
        <h1>Statistics Page....</h1>
      </div>
    );
};

export default Statistics;