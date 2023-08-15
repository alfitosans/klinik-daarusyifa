import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function CardCategory() {
  const [cards, setCard] = useState([])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios(
      "https://648927875fa58521caaf3d93.mockapi.io/category-doctor"
    ).then(result => setCard(result.data))
  }, [])

  return (
    <>
            {cards.map(item => (
              <Col md={3} key={item.id} id="col-card" data-aos="zoom-in" data-aos-duration="1000">
                  <Link to={`/consult/category/${item.link}`} key={item.id} fluid>
                  <div>
                    <Card className="card" id="card">
                      <div id="gradient-bg"></div>
                      <Card.Img src={item.image} id="card-category-image"/>
                      <Card.Title className="card-category-title">{item.category}</Card.Title>
                    </Card>
                  </div>
              </Link>
                </Col>
            ))}

    </>
  )
}

export default CardCategory;