import carevulLogo from "../assets/carevul-logo.svg";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/icon/fb.png";
import ins from "../assets/icon/ig.png";
import lin from "../assets/icon/in.png";
import twi from "../assets/icon/twt.png";
import yt from "../assets/icon/yt.png";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container ">
          <div className="row d-flex justify-content-between pt-4 pb-3">
            <div className="col-mb-5 col-md-4 mt">
              <img src={carevulLogo} alt="" />
              <div className="text-gray  mb-4">
                <p>
                  Kamu lagi sakit?
                  <span className="text-carevul fw-bolder"> Carevul</span>{" "}
                  {/* <span className="text-carevul fw-bolder"> Carevul </span> */}
                  solusinya,
                  <br />
                  tanpa antri, tanpa ribet, konsulin aja!
                </p>
              </div>

              <div className=" social-media d-flex justify-content-between mb-5">
                <img src={fb} alt="" />
                <img src={ins} alt="" />
                <img src={twi} alt="" />
                <img src={lin} alt="" />
                <img src={yt} alt="" />
              </div>
            </div>

            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer flex-column d-flex justify-content-around">
                <div className="d-flex flex-column  gap-2">
                  <h5 className="text-carevul">Site Map</h5>
                  <Link to="/" className="fw-normal text-gray">
                    Home
                  </Link>
                  <Link to="/articlehome" className="fw-normal text-gray">
                    Artikel
                  </Link>

                  <Link to="/bmicalculator" className="fw-normal text-gray">
                    Kalkulator BMI
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer ">
                <div className="d-flex flex-column  gap-2 ">
                  <h5 className="text-carevul">Lainnya</h5>
                  <Link to="" className="fw-normal  text-gray">
                    Syarat & Ketentuan
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Kebijakan Privasi
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3  mb-md-2">
              <div className="list-footer">
                <div className="fw-2 d-flex flex-column gap-2">
                  <h5 className="text-carevul ">Kontak Kami</h5>

                  <span className="fw-normal">Carevul@help.com </span>

                  <span>Sumatra, Indonesia</span>
                  <span>0822-8903-9601</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center ">
              Copyright © 2023 Carevul
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
