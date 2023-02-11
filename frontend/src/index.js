import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import NewCard from "./NewCard";
<<<<<<< HEAD
import SeeSet from "./SeeSet";
=======
import Review from "./Review";
import Login from "./Login";
>>>>>>> 306834705de1c48814c915df1d7bf9a3391bd8a0
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newcard",
    element: <NewCard />,
  },
  {
    path: "/viewset",
    element: <SeeSet />
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
