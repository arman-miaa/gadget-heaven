import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);


  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
    setCartCount(cartItems.length);
    setWishCount(wishItems.length);

    const handleCartUpdate = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    const handleWishUpdate = () => {
      const wishItems = JSON.parse(localStorage.getItem("wish")) || [];
      setWishCount(wishItems.length);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("wishUpdated", handleWishUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("wishUpdated", handleWishUpdate);
    };
  }, []);
  

  return (
    <div
      className={`${
        location.pathname === "/" || location.pathname.startsWith("/category/")
          ? "bg-[#9538E2] rounded-t-xl px-6 text-white"
          : "bg-white"
      }`}
    >
      <div className="navbar mt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-white">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-2xl gap-2">
          <NavLink
            to="/dashboard"
            className="relative mr-2 bg-white rounded-full py-[4px] px-2"
          >
            <i className="fa-solid fa-cart-arrow-down text-xl text-black"></i>
            <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </NavLink>

          <button className="relative bg-white rounded-full py-[4px] px-2">
            <i className="fa-regular fa-heart text-xl text-black"></i>
            <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {wishCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
