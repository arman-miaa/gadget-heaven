import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import CartDashboard from "../components/CartDashboard";

const Dashboard = () => {
  const location = useLocation();
  const isCartActive = location.pathname === "/dashboard";
    return (
      <div className="bg-[#F7F7F7] pb-8">
        <div className="bg-[#9538E2] mb-10 relative py-6 rounded-xl   text-white -mt-[48px] text-center ">
          <h1 className="font-bold text-5xl ">Dashboard</h1>
          <p className="my-6">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <div className="space-x-4">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `border-2 py-1 px-6 rounded-full ${
                  isActive ? "bg-white text-black" : "bg-transparent"
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="wishlist"
              className={({ isActive }) =>
                `border-2 py-1 px-6 rounded-full ${
                  isActive ? "bg-white text-black" : "bg-transparent"
                }`
              }
            >
              Wishlist
            </NavLink>
          </div>

          <Hero></Hero>
        </div>

        <Outlet></Outlet>
      </div>
    );
};

export default Dashboard;