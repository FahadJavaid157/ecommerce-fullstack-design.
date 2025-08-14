import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Display } from "./pages/Display.jsx";
import Cart from "./pages/cart.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AdminPanel from "./pages/Admin.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "display",
        element: <Display />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: <AdminPanel />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
