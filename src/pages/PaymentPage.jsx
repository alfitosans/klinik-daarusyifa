import { Col, Container, Row, Button, Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import "./../styles/Calendar.css";

import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { Input } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const PaymentPage = () => {
  const [valueCalender, onChangeCalender] = useState("");

  //=================================================
  const navigate = useNavigate();
  const param = useParams();
  const [uuid, setUuid] = useState("");
  const [selectedTime, setSelectedTime] = useState("Waktu");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedTime(eventKey);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userDataString = localStorage.getItem("idUser");
      const userData = JSON.parse(userDataString);

      const userName = userData.name;
      const userId = userData.id;
      const Category = localStorage.getItem("selectedCategory");
      const selectedCategory = JSON.parse(Category).name;

      const myuuid = uuidv4();
      console.log(`uuid anda adalah : ${myuuid}`);
      setUuid(myuuid);

      // Send data to mock API
      await axios.post(
        "https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien",
        {
          uuid: myuuid,
          selectedTime,
          valueCalender,
          user_name: userName,
          kategori_poli: selectedCategory,
          user_id: userId,
        }
      );

      navigate("/paymentdoctor/bookingstatus");
      Swal.fire("Berhasil Buat Antrean", "", "success");
    } catch (error) {
      console.error("Error sending data to API", error);
      Swal.fire({
        title: "Anda Belum Login",
        text: "Silahkan Log In terlebih dahulu 👏",
        icon: "info",
        footer: '<a href="/login">Login disini</a>',
      });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="gap-5">
          <Col>
            <Calendar onChange={onChangeCalender} value={valueCalender} />
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
                  <Dropdown.Item eventKey="Pagi (07.00 - 05.00 AM)">
                    Pagi (07.00 - 05.00 AM)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Malam (05.00 - 11.00 PM)">
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
