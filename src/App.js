import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    { path: "", element: <LayOut />, children: [
      {path: "home", element: <Home/>},
      {path: "brands", element: <Brands/>},
      {path: "cart", element: <Cart/>},
      {path: "products", element: <Products/>},
      {path: "categories", element: <Categories/>},
      {path: "login", element: <Login/>},
      {path: "register", element: <Register/>},

      {path: "*", element: <NotFound/>}
    ] },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
