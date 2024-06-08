import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function CardCategory() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios("https://64de412c825d19d9bfb25d14.mockapi.io/category_doctor").then(
      (result) => setCard(result.data)
    );
  }, []);

  const handleCategoryClick = (categoryId, category) => {
    // Store the selected category in local storage
    localStorage.setItem(
      "selectedCategory",
      JSON.stringify({ id: categoryId, name: category })
    );
  };

  return (
    <>
      {cards.map((item) => (
        <Col
          md={3}
          key={item.id}
          id="col-card"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Link
            to={`/paymentdoctor`}
            key={item.id}
            fluid="true"
            onClick={() => handleCategoryClick(item.id, item.category)}
          >
            <div>
              <Card className="card" id="card">
                <div id="gradient-bg"></div>
                <Card.Img
                  src={item.image}
                  id="card-category-image"
                  className=""
                />
              </Card>
            </div>
          </Link>
        </Col>
      ))}
      <div>
        <h4>Jadwal Dokter</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dokter Umum</Accordion.Header>
            <Accordion.Body>
              <h4>Dokter Ahwan</h4>
              <p>Senin s/d Kamis</p>
              <p>08.00 - 10.00</p>
              <p>19.00 - 21.00</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Fina Fadila M</h4>
              <p>Senin </p>
              <p>24 Jam</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Hadi Suardi</h4>
              <p>Selasa </p>
              <p>24 Jam</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Libia Sari</h4>
              <p>Rabu </p>
              <p>08.00 - 18.00 WIB</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Muhammad</h4>
              <p>Rabu </p>
              <p>08.30 - 08.00 WIB</p>
              <p>Kamis dan Sabtu</p>
              <p>24 Jam</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Sarah (Ira)</h4>
              <p>Minggu </p>
              <p>24 Jam</p>
            </Accordion.Body>

            <Accordion.Body>
              <hr />
              <h4>Dokter Ratih K.D Arfa</h4>
              <p>Jum'at </p>
              <p>24 Jam</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Dokter Gigi</Accordion.Header>
            <Accordion.Body>
              <h4>Drg. Fetty</h4>
              <p>Sabtu 10.00-13.00</p>
              <p>Minggu 10.00-13.00</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Drg. Andrid Hapsari</h4>
              <p>Selasa, Kamis dan Jum'at</p>
              <p>10.00-13.00</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Drg. Rima</h4>
              <p>Senin, Selasa dan Rabu</p>
              <p>10.00-13.00</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Dokter Kandungan</Accordion.Header>
            <Accordion.Body>
              <h4>Dr. Ilham Utama Surya SpOG</h4>
              <p>Sabtu 10.00-12.00 WIB</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Nurfatiha, Amd. Keb.</h4>
              <p>Senin s/d Jum'at 08.00-12.00 WIB</p>
            </Accordion.Body>
            <Accordion.Body>
              <hr />
              <h4>Ratna Iriyani, Amd. Keb</h4>
              <p>Senin s/d Sabtu 09.00-12.00 WIB</p>
              <p>Senin s/d Kamis 17.00-20.00 WIB</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default CardCategory;
