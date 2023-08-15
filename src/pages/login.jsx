import React, { useContext, useState } from "react";
import "./../styles/loginregis.css";
import loginLogo from "./../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PaymentContext } from "../context/paymentContext";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { payment, setPayment } = useContext(PaymentContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    let res = await axios.get(
      "https://6454b891f803f345762f6469.mockapi.io/users"
    );
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
        alert("Gagal Login");
      } else {
        // alert("Berhasil Login");
        const loginData = {
          email: result[0].email,
          name: result[0].name,
          id: result[0].id,
          img: result[0].image,
        };
        const loginDataJson = JSON.stringify(loginData);
        localStorage.setItem("idUser", loginDataJson);

        // if payment context have a data, then redirect to booking page
        if (payment) {
          navigate("/bookingpage");
        } else {
          navigate("/");
        }
        // else redirect to home page
      }
    };
    ambilData();
  };

  return (
    <div>
      <section className="login d-flex">
        <div className="login-left h-200">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-7">
              <div className="header">
                <h1 data-aos="fade-right" data-aos-duration="1000">Hallo, Carefriends</h1>
                <p data-aos="fade-right" data-aos-duration="1000">Login dulu yuk sebelum kamu mengakses Carevul</p>
              </div>
              <div className="login-form">
                <form id="form-login" onSubmit={handleLogin}>
                  <label htmlFor="email" className="form-label"  data-aos="fade-right" data-aos-duration="1000">
                    Email
                  </label>
                  <input
                    data-aos="fade-right" data-aos-duration="1000"
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email"
                  />

                  <label htmlFor="password" className="form-label mrgn-1" data-aos="fade-right" data-aos-duration="1000">
                    Password
                  </label>
                  <input  data-aos="fade-right" data-aos-duration="1000"
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />

                  <button className="btn-2" type="submit" data-aos="fade-right" data-aos-duration="1000">
                    Login
                  </button>
                </form>
                <p className="fsize-15 d-block text-center"  data-aos="fade-right" data-aos-duration="1000">
                  Kamu belum punya akun?
                  <Link to={"/regis"} style={{ textDecoration: "none" }}>
                    <span className="regis"  data-aos="fade-right" data-aos-duration="1000">Daftar Disini</span>
                  </Link>
                </p>
                <div>
                <p className="fsize-15 d-block text-center" data-aos="fade-right" data-aos-duration="1000">
                  Kamu Dokter?
                  <Link to={"/logindoctor"} style={{ textDecoration: "none" }}>
                    <span className="regis">Login disini yuk!</span>
                  </Link>
                </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right w-50 h-100 bg-color">
          <div className="d-flex justify-content-center py-5">
            <img src={loginLogo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
