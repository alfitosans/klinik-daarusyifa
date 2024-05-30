import CardCategory from "./CardCategory";
import { Button } from "react-bootstrap";

function KategoriDokterAdmin() {
  return (
    <>
      <Button>NonActive</Button>
      <section id="card" className="category-card">
        <div className="container">
          <div id="card-row" className="row justify-content-center">
            <CardCategory />
          </div>
        </div>
      </section>
    </>
  );
}

export default KategoriDokterAdmin;
