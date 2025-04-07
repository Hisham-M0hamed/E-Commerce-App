import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import Root from "./Root";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/contact/Contact";
import MainAbout from "./components/About/MainAbout";
import MainSign from "./components/SignUp/MainSign";
import { Auth0Provider } from "@auth0/auth0-react";
import SignInRegister from "./components/SignUp/SignInRegister";
import SignOneTime from "./components/SignUp/SignOneTime";
import Profile from "./components/MainIcons/Profile";
import AddToCart from "./components/MainIcons/AddToCart";
import WishList from "./components/MainIcons/WishList";
import CheckOut from "./components/MainIcons/CheckOut";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "E-Commerce-App",
        element: <Home />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "signup",
        element: <MainSign />,
        children: [
          {
            index: true,
            element: <SignOneTime />,
          },
          {
            path: "login",
            element: <SignInRegister />,
          },
          {
            path: "logout",
            element: <Home />,
          },

          {
            path: "register",
            element: <SignInRegister />,
          },
        ],
      },
      {
        path: "about",
        element: <MainAbout />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <AddToCart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart/checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-p40h8k8ajen8kzq2.us.auth0.com"
    clientId="Nv3kNqH5B4CXz8ZtYXP6y4z4FSNYnZ9A"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={routes} />
  </Auth0Provider>
);
