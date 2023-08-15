import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../../styles/readmore.css";

function ReadMore1() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios(
      "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home?"
    ).then((result) => setData(result.data));
  }, []);

  return (
    <>
      {datas.map((item) => (
        <Card className="card-more">
          <Card.Body className="body-more">
            <Row>
              <Col md={5} key={item.id}>
                <Card.Img src={item.img} id="card-more-img" fluid />
              </Col>
              <Col md={7} key={item.id} id="col-card">
                <Card.Title className="card-title">{item.title}</Card.Title>
                <a href={item.link} id="card-goto-read">
                  Baca Selengkapnya
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ReadMore1;
