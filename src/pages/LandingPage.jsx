import { Col, Container, Row } from "react-bootstrap";
import { Nav } from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <h1>Landing Page</h1>
      <Container>
        <Row>
          <Col>
            <h1>Testttt</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
