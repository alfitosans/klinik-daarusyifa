import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import Cardticle from "../components/Cardticle";

const ArticleHome = () => {
  return (
    <div className="container">
      <div className="article-top">
        <h3 id="article-title"  >Artikel Kesehatan Terpopuler</h3>
        <p id="article-subtitle"  >Terdapat beberapa artikel terpopuler yang dapat kamu akses sesuai dengan kebutuhanmu nih Carefriends!</p>
      </div>
      <section id="card" className="article-card">
        <Container fluid>
          <Row id="card-row">
            <Cardticle />
          </Row>
        </Container>
      </section>
    </div>
  );
};



export default ArticleHome;
