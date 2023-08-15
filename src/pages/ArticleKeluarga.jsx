import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-read.css";
import ReadMore1 from "../components/Read-More/readmore1";

function ArticleKeluarga() {
  const [datas, setData] = useState([])

   useEffect(() => {
    axios(
      "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home?page=8&limit=1"
      ).then(result => setData(result.data))
      }, [])
  
  return (
    <>
        <div>
          <Container className="article-read">
            <Row>
              {datas.map(item => (
                <Col lg={{ span: 7, offset: 0 }} key={item.id}>
                  <div>
                    <p id="breadcrumbs">Artikel : Kedekatan dengan Keluarga Tingkatkan Kualitas Kesehatan</p>
                    <h3 id="main-title">{item.title}</h3>
                    <p id="date">{item.date}</p>
                    <img src={item.img} id="img-thumbnail"></img><br></br>
                    <p id="fulltext">{item.fulltext}</p>
                  </div>
                </Col>
                ))}
                {/* Another Article Card */}
                <Col lg={{ span: 4, offset: 1 }} className="article-more">
                  <h5 id="read-more-title">Baca Artikel Lainnya</h5>
                  <ReadMore1 />
                </Col>
              </Row>
            </Container>
        </div>
    </>
  )
}

export default ArticleKeluarga;
