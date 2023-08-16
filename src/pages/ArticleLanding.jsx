import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import ArticleCardLanding from "../components/ArticleCardLanding";
import { Link } from "react-router-dom";

const ArticleLanding = () => {
  return (
    <>
      <div className="article-top">
        <h3 id="article-title">Artikel Kesehatan Terpopuler</h3>
        <p id="article-subtitle">
          Terdapat beberapa artikel terpopuler yang dapat kamu akses sesuai
          dengan kebutuhanmu nih Carefriends!
        </p>
      </div>
      <section id="card" className="article-card">
        <Container fluid>
          <Row id="card-row">
            <ArticleCardLanding />
          </Row>
        </Container>
      </section>
      <div className="text-center">
        <Link to={"/articlehome"} className="logindong main-button">
          Artikel Lainnya
        </Link>
      </div>
    </>
  );
};

export default ArticleLanding;
