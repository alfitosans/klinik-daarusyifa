import { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function BookingStatus() {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getStorageUser = localStorage.getItem("idUser");
        const userId = JSON.parse(getStorageUser);

        const response = await fetch(
          `https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien?user_id=${userId.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <p>Mengambil Data..</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        {" "}
        <Link to="/consult/category">
          <Button>Daftar Antrean</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      {bookingData.map((booking) => (
        <Card key={booking.nomer_antrian} className="p-5 mt-3">
          <h2>Booking Status</h2>
          <p className="mb-5">
            Silahkan tunggu, anda akan dipanggil oleh admin kami.
          </p>
          <>
            <h6 className="mb-3">Id Booking : </h6>
            <h4>{booking.uuid}</h4>
            <h6 className="mb-3">Nama Pasien : </h6>
            <h4>{booking.user_name}</h4>
            <h6 className="mb-3">Kategori Poli : </h6>
            <h4>{booking.kategori_poli}</h4>
            <h6 className="mb-3">No Antrian :</h6>
            <h4>{booking.nomer_antrian}</h4>
            <h6 className="mb-3">Waktu :</h6>
            <h4>{`${booking.selectedTime}`}</h4>
            <h4>{` ${new Date(booking.valueCalender).toLocaleDateString(
              "id-ID",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}`}</h4>
          </>
        </Card>
      ))}
      <Link to="/">
        <Button>Kembali ke Home</Button>{" "}
      </Link>
    </Container>
  );
}

export default BookingStatus;
