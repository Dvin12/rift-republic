import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Error from "./pages/error/Error";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import AccountSettings from "./pages/accountSettings/accountSettings";
import Home from "./pages/home/home";

function Layout() {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}

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

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/settings",
        element: <AccountSettings />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
