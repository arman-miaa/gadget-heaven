import { Link, NavLink, useLocation } from "react-router-dom";

// console.log(location);

const Navbar = () => {
    const location = useLocation();
    return (
      <div
        className={`${
          location.pathname === "/" ? "bg-[#9538E2] rounded-t-xl text-white" : "bg-white"
        }`}
      >
        <div className="navbar mt-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end text-2xl gap-2">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    );
};

export default Navbar;