import History from "../assets/medical-doctor.svg";
import Doctor from "../assets/medical-history.svg";
import Online from "../assets/medical-online.svg";
import Amanah from "../assets/HandHeart.svg";
import Users from "../assets/Users.svg";
import "../styles/Landing.css";
import Pict1 from "../assets/pict1.png";
import Pict2 from "../assets/pict2.png";
import { Container, Row } from "react-bootstrap";
import ArticleLanding from "../pages/ArticleLanding";
import { Link } from "react-router-dom";

// Aos
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="mt-0 hero">
        <div className="hero-container d-flex justify-content-space-between m-3 mt-0">
          <div
            className="hero-text "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1>
              Selamat Datang
              <br />
              di Daarusyifa !
            </h1>
            <p className="text-white mt-3">
              Klinik Pratama dengan Pelayanan Paripurna di Kecamatan Cipayung,
              Jakarta Timur
            </p>
            <Link
              to={"/consult/category"}
              className="logindong btn text-carevul border-carevul text-color-carevul bg-white mt-3"
            >
              Lebih Lanjut
            </Link>
          </div>
          <div className="hero-image">
            <img src={Pict1} className="Character" alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="service">
        <div className="">
          <h1 className="a-text d-flex mt-5">Tata Nilai AHWAN</h1>
          <h5 className="text-center mb-5">
            Semua Staff klinik pratama Daarusyifa telah berikrar untuk
            memberikan pelayanan <br></br>kesehatan masyarakat dengan tata Nilai
            yaitu AHWAN :
          </h5>
          <div className="container-fluid mb-4">
            <Row className="gap-5 justify-content-center">
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Online} alt="" />
                    <h3 className="text-center mx-2">Konsultasi Online</h3>
                    <h6 className="text-center2 mx-3">
                      Menyediakan layanan konsultasi online selama 24 jam
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={History} alt="" />
                    <h3 className="text-center mx-2">Medis Profesional</h3>
                    <h6 className="text-center2 mx-3">
                      Tenaga medis yang sudah berpengalaman di bidangnya
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Users} alt="" />
                    <h3 className="text-center mx-2">Dokter Berkualitas</h3>
                    <h6 className="text-center2 mx-3">
                      Lulusan dokter dari banyak negara maju yang berkualitas
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Amanah} alt="" />
                    <h3 className="text-center mx-2">Dokter Berkualitas</h3>
                    <h6 className="text-center2 mx-3">
                      Lulusan dokter dari banyak negara maju yang berkualitas
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Doctor} alt="" />
                    <h3 className="text-center mx-2">Dokter Berkualitas</h3>
                    <h6 className="text-center2 mx-3">
                      Lulusan dokter dari banyak negara maju yang berkualitas
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>

        <section
          className="introduction"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="a-container ">
            <div className="card-introduction d-flex align-center justify-center">
              <img src={Pict2} className="Character2" alt="" />
              <div className="desc">
                <h2>Kenalan sama kita yuk!</h2>
                <p>
                  Dear Carefriends, terima kasih telah membersamai kami sejak
                  tahun 2023. Kami berkomitmen untuk membantu masyarakat dalam
                  layanan konsultasi secara online dengan tenaga kesehatan yang
                  ahli dan profesional.
                </p>
                <p>
                  Tetap berkembang bersama kami untuk mendukung fasilitas
                  Telemedicine yang nyaman digunakan ya Carefriends!
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div>
        {/* article */}
        <section className="articlelanding container">
          <ArticleLanding />
        </section>
      </div>
    </>
  );
};

export default Landing;
