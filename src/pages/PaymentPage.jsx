import { Col, Container, Row, Button, Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import "./../styles/Calendar.css";

import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { Input } from "@mui/material";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const [radioVal, setRadioVal] = useState(false);
  const [Token, setToken] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  // ======================================================
  const [selectedTime, setSelectedTime] = useState("Waktu"); // Inisialisasi state untuk melacak waktu yang dipilih
  const handleDropdownSelect = (eventKey, event) => {
    // Mengupdate state dengan waktu yang dipilih
    setSelectedTime(eventKey);
  };

  // =========================================================

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/paymentdoctor/bookingstatus");
    new Swal({
      icon: "success",
      title: "Berhasil!",
      text: "Token berhasil di validasi!, pembayaran berhasil dilakukan!",
    });
  };

  return (
    <>
      {/* <h1>Payment Page</h1> */}
      <Container className="mt-5">
        <Row className="gap-5">
          <Col>
            {/* <h1 className="text-carevul mb-4">Calendar</h1> */}
            <Calendar />
          </Col>

          <Col className="">
            <Row>
              <h4 className="text-carevul fw-bold mt-5 ml-5">
                Waktu Datang Konsultasi
              </h4>
              <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle id="dropdown-basic">
                  {" "}
                  {selectedTime}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Pagi">
                    Pagi (07.00 - 05.00 AM)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Malam">
                    Malam (05.00 - 11.00 PM)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Col className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-12 d-flex">
                    <button
                      type="submit"
                      className="btn color-carevul-gradient text-white mt-1 px-5 py-2 flex-fill"
                      id="book-btn"
                    >
                      Daftar Antrean
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default PaymentPage;
