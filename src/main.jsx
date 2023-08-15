import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import article
import ArticleHome from "./pages/ArticleHome";
import ArticleAltruisme from "./pages/ArticleAltruisme";
import ArticleHeatwave from "./pages/ArticleHeatwave";
import ArticleCascara from "./pages/ArticleCascara";
import ArticleKeluarga from "./pages/ArticleKeluarga";
import ArticleMood from "./pages/ArticleMood";
import ArticleSelingkuh from "./pages/ArticleSelingkuh";
import ArticleStalk from "./pages/ArticleStalk";
import ArticleStress from "./pages/ArticleStress";
import ArticleVita from "./pages/ArticleVita";

// import bmi
import BmiCalculator from "./pages/BmiCalculator";

// import page and components

import Login from "./pages/login";
import Register from "./pages/Register";
import ListDoctor from "./components/ListDoctor.jsx";
import Layout from "./components/Layout.jsx";

// impoort outlet
import Landing from "./components/Landing";
import ConsultRoom from "./components/ConsultRoom";
import CategoryDoctor from "./components/CategoryDoctor";
import LoginDoctor from "./pages/LoginDoctor";
import RegisterDoctor from "./pages/RegisterDoctor";
import RoomChat from "./components/RoomChat";
import RoomChatProvider from "./context/roomChatContext";

// import payment
import PaymentPage from "./pages/PaymentPage";
import PaymentProvider from "./context/paymentContext";
import BookingPage from "./pages/BookingPage";
import Consult from "./pages/Consult";
import DetailDoctor from "./pages/DetailDoctor";
import RoomChatForDoctorProvider from "./context/roomChatForDoctor";
import RoomChatDoctor from "./components/RoomChatDoctor";
import BookingProvider from "./context/bookingContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}

      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />
        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/articlehome" element={<ArticleHome />} />
        <Route path="/articlevita" element={<ArticleVita />} />
        <Route path="/articlecascara" element={<ArticleCascara />} />
        <Route path="/articleheatwave" element={<ArticleHeatwave />} />
        <Route path="/articleselingkuh" element={<ArticleSelingkuh />} />
        <Route path="/articlemood" element={<ArticleMood />} />
        <Route path="/articlestress" element={<ArticleStress />} />
        <Route path="/articlekeluarga" element={<ArticleKeluarga />} />
        <Route path="/articlestalk" element={<ArticleStalk />} />
        <Route path="/articlealtruisme" element={<ArticleAltruisme />} />
        <Route path="/bmicalculator" element={<BmiCalculator />} />

        {/* <Route path="/article" element={<About />} /> */}
        <Route path="/" element={<Landing />} />
        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/article" element={<About />} /> */}
        <Route path="/listdoctor" element={<ListDoctor />} />
        <Route path="/paymentdoctor/:id" element={<PaymentPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />

        <Route path="/consult" element={<Consult />}>
          <Route path="/consult/chatroom" element={<ConsultRoom />}>
            <Route path="/consult/chatroom/:id" element={<RoomChat />} />
          </Route>
          <Route path="/consult/category" element={<CategoryDoctor />} />
          <Route path="/consult/category/:id" element={<ListDoctor />} />
        </Route>
      </Route>

      <Route path="/detailDoctor" element={<DetailDoctor />}>
        <Route path="/detailDoctor/:id" element={<RoomChatDoctor />} />
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
    <RoomChatForDoctorProvider>
      <RoomChatProvider>
        <BookingProvider>
          <PaymentProvider>
            {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
            <RouterProvider router={router} />
          </PaymentProvider>
        </BookingProvider>
      </RoomChatProvider>
    </RoomChatForDoctorProvider>
  </React.StrictMode>
);
