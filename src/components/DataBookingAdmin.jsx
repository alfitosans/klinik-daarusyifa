import { Card, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function DataBookingAdmin() {
  const [dataBooking, setDataBooking] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien")
      .then((response) => {
        setDataBooking(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDeleteAll = async () => {
    try {
      for (const item of dataBooking) {
        await axios
          .delete(
            `https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien/${item.nomer_antrian}`
          )
          .then((response) => {
            console.log(`Deleted item with id ${item.nomer_antrian}`);
          });
      }
      // Optionally, you can perform additional actions after all items are deleted
      console.log("All items deleted successfully");
      setDataBooking([]); // Optional: Clear the state after deleting all items
      Swal.fire("Berhasil Menghapus Semua Data", "", "success");
    } catch (error) {
      console.error("Error deleting all data:", error);
      Swal.fire("Gagal Menghapus Data", "", "error");
    }
  };

  const handleDeleteByKey = async (key, userName) => {
    try {
      await axios.delete(
        `https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien/${key}`
      );
      Swal.fire(
        `Pasien ke ${key} yang bernama ${userName} sudah selesai konsultasi`,
        "",
        "success"
      );
      fetchData();
    } catch (error) {
      console.error(`Error deleting data with key ${key}:`, error);
    }
  };

  return (
    <>
      <div>
        <Button onClick={handleDeleteAll}>Delete All Data</Button>
        {dataBooking.map((item) => (
          <Card className="p-5" key={item.nomer_antrian}>
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
            <h4>{` ${new Date(item.valueCalender).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</h4>
            <Button
              onClick={() =>
                handleDeleteByKey(item.nomer_antrian, item.user_name)
              }
            >
              Delete Data
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default DataBookingAdmin;
