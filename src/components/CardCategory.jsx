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
                {/* <Card.Title className="card-category-title">
                  {item.category}
                </Card.Title> */}
              </Card>
            </div>
          </Link>
        </Col>
      ))}
      <div>
        <h4>Jadwal Dokter</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Senin</Accordion.Header>
            <Accordion.Body>
              <p>Dr. A</p>
              <p>Dr. B</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Selasa</Accordion.Header>
            <Accordion.Body>
              <p>Dr. A</p>
              <p>Dr. B</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Rabu</Accordion.Header>
            <Accordion.Body>
              <p>Dr. A</p>
              <p>Dr. B</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default CardCategory;
