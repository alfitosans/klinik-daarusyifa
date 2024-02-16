import { Button, Card, Container } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { useEffect, useState } from "react";
import axios from "axios";

function adminPage() {
  const [dataBooking, setDataBooking] = useState([]);

  useEffect(() => {
    axios("https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien").then(
      (result) => setDataBooking(result.data)
    );
  }, []);

  return (
    <>
      <Container>
        <div>
          <h2>Admin Page</h2>
          <p>
            Halaman ini adalah halaman admin. Disini admin bisa melakukan
            penambahan, penghapusan, dan perubahan data.
          </p>

          <Button className="">Data Booking</Button>

          <Button>Data Pasien</Button>

          {dataBooking.map((item) => (
            <Card className="p-5" key={item.id}>
              <h6 className="mb-3">Id Booking : </h6>
              <h4>{item.uuid}</h4>
              <h6 className="mb-3">Nama Pasien : </h6>
              <h4>{item.user_name}</h4>
              <h6 className="mb-3">Kategori Poli : </h6>
              <h4>{item.kategori_poli}</h4>
              <h6 className="mb-3">No Antrian :</h6>
              <h4>{item.nomer_antrian}</h4>
              <h6 className="mb-3">Waktu :</h6>
              <h4>{`${item.selectedTime}`}</h4>
              <h4>{` ${new Date(item.valueCalender).toLocaleDateString(
                "id-ID",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}`}</h4>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
export default adminPage;
