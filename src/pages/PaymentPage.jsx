import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import "./../styles/Calendar.css";

import gopayLogo from "./../assets/gopay.svg";
import shopeepayLogo from "./../assets/shopeepay.svg";
import ovoLogo from "./../assets/ovo.svg";
import danaLogo from "./../assets/dana.svg";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../context/paymentContext";
import { Outlet, useNavigate, useParams } from "react-router";
import { Input } from "@mui/material";

const PaymentPage = () => {
  const [radioVal, setRadioVal] = useState(false);
  const [doctor, setDoctor] = useState({});

  const navigate = useNavigate();
  const param = useParams();

  // localStorage.setItem("idUser", result[0].id)
  const loginUser = JSON.parse(localStorage.getItem("idUser"));

  useEffect(() => {
    fetch(`https://64de412c825d19d9bfb25d14.mockapi.io/doctor/${param.id}`)
      .then((response) => response.json())
      .then((data) => setDoctor(data));
  }, []);

  // from Context
  const { payment, setPayment } = useContext(PaymentContext);

  const handleRadioChange = (event) => {
    setRadioVal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPayment({
      idDoctor: param.id,
      // bookingId: idBooking,
      price: 20000,
      paymentMethod: radioVal,
    });
    navigate("/bookingpage");
  };

  useEffect(() => {}, [payment]);

  return (
    <>
      {/* <h1>Payment Page</h1> */}
      <Container className="mt-5">
        <Row>
          <Col>
            {/* <h1 className="text-carevul mb-4">Calendar</h1> */}
            <Calendar />
          </Col>

          <Col>
            <Container>
              <Row>
                <Col>
                  {/* Card Doctor's Info */}
                  <Container fluid className="shadow py-3 px-5 rounded">
                    <Row>
                      <Col
                        sm={5}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src={doctor.image}
                          alt="doctor"
                          className="rounded-circle"
                          width={100}
                        />
                      </Col>
                      <Col className="text-start mb-3" sm={7}>
                        <h4 className="text-carevul fw-bold ms-0 mt-2 doctor-name mt-n1">
                          {doctor.name}
                        </h4>
                        <p className=" doctor-name">
                          Dokter {doctor.kategori} <br />
                          <br /> {doctor.instansi}
                        </p>
                      </Col>
                      <Col className="d-flex justify-content-center align-items-center">
                        {/* <Link to={"/list-doctor/id"} className="btn text-white fw-bold color-carevul-gradient px-5 py-2 shadow-sm">Pilih Dokter</Link> */}
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col className="mt-5">
                  <h4 className="text-carevul fw-bold">Validasi Pembayaran</h4>
                  <form onSubmit={handleSubmit}>
                    <p>Masukan Token Anda..</p>
                    <input
                      type="text"
                      placeholder="Masukan Token"
                      className="mb-3 border-carevul rounded-3 px-3 py-2 w-100"
                    ></input>
                    <div className="col-md-12 d-flex">
                      <button
                        type="submit"
                        className="btn color-carevul-gradient text-white mt-1 px-5 py-2 flex-fill"
                        id="book-btn"
                      >
                        Buat Janji
                      </button>
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default PaymentPage;
