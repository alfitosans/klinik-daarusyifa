import React, { useState } from "react";
import "./../styles/loginregis.css";
import regisLogo from "./../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi teks input tidak boleh kosong
    if (!name || !email || !password) {
      return Swal.fire("Error", "Mohon lengkapi semua kolom", "error");
    }

    let res = await axios.get(
      "https://64e224b4ab0037358818bf67.mockapi.io/users"
    );
    let data = await res.data;

    const ambilData = async () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email) {
          result.push(data[i]);
        }
      }

      console.log(result);

      if (result.length === 0) {
        axios
          .post("https://64e224b4ab0037358818bf67.mockapi.io/users", {
            name: name,
            email: email,
            password: password,
            image:
              "https://img.icons8.com/?size=512&id=tZuAOUGm9AuS&format=png",
          })
          .then((result) => {
            Swal.fire(
              "Success!",
              "your account has been successfully created.",
              "success"
            ).then((result) => {
              if (result.isConfirmed) {
                navigate("/login");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        Swal.fire("Important Message!", "Email already registered.", "warning");
      }
    };
    ambilData();
  };

  return (
    <div>
      <section className="login d-flex">
        <div
          className="login-left h-100"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-7">
              <div className="header">
                <h1>Daftar dulu yuk</h1>
                <p>
                  Gratis konsultasi di Klinik Daarusyifa dimanapun dan kapanpun
                </p>
              </div>
              <div className="login-form">
                <form id="form-register" onSubmit={handleRegister}>
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan Nama"
                  />

                  <label htmlFor="email" className="form-label mrgn-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email"
                  />

                  <label htmlFor="password" className="form-label mrgn-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />

                  <button className="btn-regis" type="submit">
                    Daftar
                  </button>
                </form>
                <p className="fsize-15 d-block text-center">
                  Sudah punya akun?
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    <span className="regis">Silahkan Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right w-50 h-100 bg-color">
          <div className="d-flex justify-content-center py-5">
            <img src={regisLogo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
