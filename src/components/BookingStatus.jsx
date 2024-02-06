import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookingStatus() {
  return (
    <>
      <Container>
        <Card className="p-5">
          <h2>Booking Status</h2>
          <p className="mb-4">
            Silahkan tunggu, anda akan dipanggil oleh admin kami.
          </p>
          <h4 className="mb-3">Nama anda :</h4>
          <h4 className="mb-3">Nama Dokter :</h4>
          <h4 className="mb-3">No Antrian :</h4>
          <h4 className="mb-3">Waktu :</h4>
          <Link to="/consult/category">
            <Button variant="primary" className="mt-3">
              Kembali ke Kategori Dokter
            </Button>
          </Link>
        </Card>
      </Container>
    </>
  );
}
export default BookingStatus;
