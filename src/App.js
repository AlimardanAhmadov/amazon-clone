import "./App.css";
import Navigation from "./components/Navigation";
import MainBody from "./components/MainBody";
import Checkout from "../src/pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LYpbOCX5IENONQwRErOJKAmv5jRPff4aJQFL2j2MOxOIN4y72oxi1iRU8oz9XdLLkeqXrIyWCTQGPRN26GZFLcr00GSoOqtDf"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <MainBody />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Navigation />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <>
              <Navigation />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <>
              <Navigation />
              <Orders />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
