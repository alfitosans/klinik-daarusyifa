import React, { useState } from "react";
import "./../styles/loginregis.css";
import regisLogo from "./../assets/register.svg";
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

    let res = await axios.get("https://6454b891f803f345762f6469.mockapi.io/users");
    let data = await res.data;

    const ambilData = async() => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) {
          await result.push(data[i]);
        }
      }

      console.log(result);

      if (result == 0) {
        await axios
          .post("https://6454b891f803f345762f6469.mockapi.io/users", {
            name: name,
            email: email,
            password: password,
            image: "https://img.icons8.com/?size=512&id=tZuAOUGm9AuS&format=png",
          })
          .then((result) => {
            new Swal(
              "Success!",
              "your account has been successfully created.",
              "success",
              {
                timer: 3000,
              },
              navigate("/login")
            );
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        new Swal("Important Message!", "Email already registered.", "warning", {
          timer: 3000,
        });
      }
    };
    ambilData();
  };

  return (
    <div>
      <section className="login d-flex">
        <div className="login-left h-100"  data-aos="fade-right" data-aos-duration="1000">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-7">
              <div className="header">
                <h1>Daftar dulu yuk</h1>
                <p>Gratis konsultasi di Carevul dimanapun dan kapanpun</p>
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
