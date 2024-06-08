import { Button, Container } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { useState } from "react";

import DataBookingAdmin from "../components/DataBookingAdmin";
import KategoriDokterAdmin from "../components/KategoriDokterAdmin";
import DataPasienAdmin from "../components/DataPasienAdmin";

function AdminPage() {
  const [selectedComponent, setSelectedComponent] = useState("DataBooking");

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Container>
      <div>
        <h2>Admin Page</h2>
        <p>
          Halaman ini adalah halaman admin. Disini admin bisa melakukan
          penghapusan, dan perubahan data.
        </p>
        <div className="d-flex gap-3">
          <Button onClick={() => handleButtonClick("DataBooking")}>
            Data Booking
          </Button>

          <Button onClick={() => handleButtonClick("KategoriDokter")}>
            Data Kategori
          </Button>

          <Button onClick={() => handleButtonClick("DataPasien")}>
            Data Pasien
          </Button>
        </div>
        <div>
          {selectedComponent === "DataBooking" && <DataBookingAdmin />}
          {selectedComponent === "KategoriDokter" && <KategoriDokterAdmin />}
          {selectedComponent === "DataPasien" && <DataPasienAdmin />}
        </div>
      </div>
    </Container>
  );
}

export default AdminPage;
