import { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function BookingStatus() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user ID from local storage
        const getStorageUser = localStorage.getItem("idUser");
        const userId = JSON.parse(getStorageUser);

        // Fetch data based on the user ID
        const response = await fetch(
          `https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien?user_id=${userId.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBooking = () => {
    // Add your handling logic here
    Swal.fire("Feature not implemented");
  };

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
            <h4>{booking.selectedTime}</h4>
          </>
          <Link to="/">
            <Button variant="primary" className="mt-3">
              Kembali ke Home
            </Button>
          </Link>
        </Card>
      ))}
    </Container>
  );
}

export default BookingStatus;
