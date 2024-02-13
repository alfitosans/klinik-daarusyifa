import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import page and components

import Login from "./pages/login";
import Register from "./pages/Register";
import Layout from "./components/Layout.jsx";

// impoort outlet
import Landing from "./components/Landing";
import CategoryDoctor from "./components/CategoryDoctor";
import LoginDoctor from "./pages/LoginDoctor";
import RegisterDoctor from "./pages/RegisterDoctor";

// import payment
import PaymentPage from "./pages/PaymentPage";
import PaymentProvider from "./context/paymentContext";

import Consult from "./pages/Consult";

import BookingProvider from "./context/bookingContext";
import BookingStatus from "./components/BookingStatus.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}

      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />

        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        <Route path="/paymentdoctor/" element={<PaymentPage />} />
        <Route
          path="/paymentdoctor/bookingstatus"
          element={<BookingStatus />}
        />

        <Route path="/consult" element={<Consult />}>
          <Route path="/consult/category" element={<CategoryDoctor />} />
          <Route
            path="/consult/paymentdoctor/bookingstatus"
            element={<BookingStatus />}
          />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Register />} />
      <Route path="/logindoctor" element={<LoginDoctor />} />
      <Route path="/regisdoctor" element={<RegisterDoctor />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookingProvider>
      <PaymentProvider>
        {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
        <RouterProvider router={router} />
      </PaymentProvider>
    </BookingProvider>
  </React.StrictMode>
);
