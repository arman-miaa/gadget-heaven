import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const MainLayout = () => {
    return (
      <div>
        {/* Navbar */}
        <div className="container mx-auto">
                <Navbar></Navbar>
                {/* Hero */}
        </div>
        {/* Dynamic Content */}
        <div className="min-h-[calc(100vh-298px)] py-12 container mx-auto ">
          <Outlet></Outlet>
        </div>
                {/* <Hero></Hero> */}

        <Footer></Footer>
        {/* Footer */}
      </div>
    );
};

export default MainLayout;