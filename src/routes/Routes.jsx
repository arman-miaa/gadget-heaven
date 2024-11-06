import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";
import ProductDetails from "../Pages/ProductDetails";
import WishList from "../components/WishList";
import CartDashboard from "../components/CartDashboard";
import Products from "../components/Products";
import Carts from "../components/Carts";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        
        children: [
          {
            path: "/",
            element: <Carts />,
            loader: () => fetch("../products.json"),
          },
        
          {
            path: "/category/:category",
            element: <Carts></Carts>,
            loader: () => fetch("../products.json"),
          },
        ],
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
            path: "dashboard",
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
        path: "/detail/:detail",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default router;
