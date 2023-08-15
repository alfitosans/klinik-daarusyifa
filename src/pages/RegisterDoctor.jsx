import React, { useState } from "react";
import "./../styles/loginregis.css";
import regisLogo from "./../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function RegisterDoctor() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kategori, setKategori] = useState("");
  const [instansi, setInstansi] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    let res = await axios.get("https://6487fbcf0e2469c038fcbc44.mockapi.io/doctor");
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
        axios
          .post("https://6487fbcf0e2469c038fcbc44.mockapi.io/doctor", {
            name: name,
            email: email,
            password: password,
            kategori: kategori,
            instansi: instansi,
          })
          .then((result) => {
            new Swal(
              "Success!",
              "your account has been successfully created.",
              "success",
              {
                timer: 3000,
              },
              navigate("/logindoctor")
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
                <h1>Daftar dulu yuk, Dok</h1>
                <p>Silahkan melakukan pendaftaran terlebih dahulu</p>
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

                  <label htmlFor="category" className="form-label mrgn-1">
                    Kategori
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="category"
                    id="category"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                  >
                    <option defaultValue={""}>Pilih Kategori</option>
                    <option value="umum">Dokter Umum</option>
                    <option value="anak">Dokter Anak</option>
                    <option value="kulit_kelamin">Dokter Kulit & Kelamin</option>
                    <option value="gigi">Dokter Gigi</option>
                    <option value="kandungan">Dokter Kandungan</option>
                    <option value="tht">Dokter THT</option>
                    <option value="psikiater">Dokter Psikiater</option>
                    <option value="saraf">Dokter Saraf</option>
                    <option value="penyakit_dalam">Dokter Penyakit Dalam</option>
                    <option value="mata">Dokter Mata</option>
                    <option value="tulang">Dokter Tulang</option>
                  </select>

                  <label htmlFor="instansi" className="form-label mrgn-1">
                    Instansi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="instansi"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    placeholder="Masukkan Instansi"
                  />

                  <button className="btn-regis" type="submit">
                    Daftar
                  </button>
                </form>
                <p className="fsize-15 d-block text-center">
                  Sudah punya akun?
                  <Link to={"/logindoctor"} style={{ textDecoration: "none" }}>
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

export default RegisterDoctor;
