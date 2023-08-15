import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import ArticleLanding from "../pages/ArticleLanding";

function ArticleCardLanding() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    axios(
      "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home?page=1&limit=3"
    ).then((result) => setCard(result.data));
  }, []);

  return (
    <>
      {cards.map((item) => (
        <Col lg={{ span: 4, offset: 0 }} key={item.id} id="col-card">
          {/* </Col><Col md={4} key={item.id} id="col-card"> */}
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Card className="card" id="card">
              <Card.Img variant="top" src={item.img} id="card-img" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{item.title}</Card.Title>
                <Card.Text className="card-text">{item.desc}</Card.Text>
                <div>
                  <a href={item.link} id="card-goto-read">
                    Baca Selengkapnya
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
}

export default ArticleCardLanding;
