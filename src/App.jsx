import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Error from "./pages/error/Error";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Main from "./components/Main";
import { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import slice from "./redux/slice";

const store = configureStore({
  reducer: { cart: slice },
});

function Layout() {
  return (
    <Main>
      <ScrollTop />
      <Navigation />
      <Outlet />
      <Footer />
    </Main>
  );
}

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products/",
        element: <Products />,
      },

      {
        path: "/products/:type",
        element: <Products />,
      },

      {
        path: "/product/:productId",
        element: <Product />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}
