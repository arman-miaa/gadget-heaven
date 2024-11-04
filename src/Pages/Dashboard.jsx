import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import CartDashboard from "../components/CartDashboard";

const Dashboard = () => {
  const location = useLocation();
    return (
      <div>
        <div className="bg-[#9538E2] relative py-6   text-white -mt-[48px] text-center ">
          <h1 className="font-bold text-5xl ">Dashboard</h1>
          <p className="my-6">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <div className="space-x-4">
            <NavLink
              to='dashboard'
              className="border-2 py-1 px-6 rounded-full"
            >
              Cart
            </NavLink>
            <Link to="wishlist" className="border-2 py-1 px-6 rounded-full">
              Whislist
            </Link>
          </div>

          <Hero></Hero>
        </div>

        <Outlet></Outlet>
      </div>
    );
};

export default Dashboard;