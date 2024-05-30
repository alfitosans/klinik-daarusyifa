import { Col, Container, Row, Button } from "react-bootstrap";
import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";
import "./../styles/category-doctor.css";

const CategoryDoctor = () => {
  return (
    <>
      <section id="card" className="category-card">
        <div className="container">
          <div id="card-row" className="row justify-content-center">
            <CardCategory />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDoctor;
