import React, { useState } from 'react'
import "./../styles/loginregis.css"
import loginLogo from './../assets/login.svg'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginDoctor() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  
  const handleLogin=async(e)=>{
    e.preventDefault()

    let res = await axios.get("https://6487fbcf0e2469c038fcbc44.mockapi.io/doctor");
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
        alert("Gagal Login")
      } else {
        // alert("Berhasil Login")
        const loginData = {
          email: result[0].email,
          name: result[0].name,
          id: result[0].id,
          instansi : result[0].instansi,
          kategori: result[0].kategori,
          img: result[0].image,
        };
        const loginDataJson = JSON.stringify(loginData);
        localStorage.setItem("idDoctor", loginDataJson);
        // localStorage.setItem("idUser", result[0].id)
        navigate("/detaildoctor")

      }
    };
    ambilData();
  };

  return (
    <div>
    <section className="login d-flex">
      <div className="login-left h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-7">
            <div className="header" data-aos="fade-right" data-aos-duration="1000">
              <h1>Hallo, Dokter</h1>
              <p>Login dulu yuk sebelum kamu mengakses Carevul</p>
            </div>
            <div className="login-form">

              <form id="form-login" onSubmit={handleLogin} data-aos="fade-right" data-aos-duration="1000">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Masukkan Email" />

                <label htmlFor="password" className="form-label mrgn-1">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Masukkan Password" />

                <button className="btn-2" type="submit">Login</button>
              </form>
              <p className="fsize-15 d-block text-center" data-aos="fade-right" data-aos-duration="1000">
                Kamu belum punya akun?
                <Link to={"/regisdoctor"} style={{ textDecoration: "none" }}>
                <span className="regis">Daftar Disini</span>
              </Link>
              </p>
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
  )
  }

export default LoginDoctor