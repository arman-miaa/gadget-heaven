import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";
import ProductDetails from "../Pages/ProductDetails";
import WishList from "../components/WishList";
import CartDashboard from "../components/CartDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <CartDashboard></CartDashboard>,
          },
          {
            path:'dashboard',
            element: <CartDashboard></CartDashboard>,
          },

          {
            path: "wishlist",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
      {
        path: "productDetails",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
