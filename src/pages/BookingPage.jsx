import { useContext, useEffect, useState } from 'react'
import './../styles/bookingpage.css'
import { PaymentContext } from '../context/paymentContext'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BookingContext } from '../context/bookingContext'

const BookingPage = () => {
    // const [fullName, setFullName] = useState('')
    // const [complaint, setComplaint] = useState('')

    const {fullName, setFullName, complaint, setComplaint} = useContext(BookingContext)

    const {payment, setPayment} = useContext(PaymentContext)

    const navigate = useNavigate()

    // For get data login from localstorage
    const loginData = JSON.parse(localStorage.getItem("idUser"))

    const handleChangeFullName = (e) => {
        setFullName(e.target.value)
        setPayment({
            ...payment,
            userName: e.target.value,
            idUser: loginData.id,
            complaint: complaint
        })

    }

    const handleChangeComplaint = (e) => {
        setComplaint(e.target.value)
        setPayment({
            ...payment,
            idUser: loginData.id,
            userName: fullName,
            complaint: e.target.value
        })

    }

    const handleSubmitFormBooking = (e) => {
        e.preventDefault()
        setPayment({
            ...payment,
            idUser: loginData.id,
            userName: fullName,
            complaint: complaint
        })

        // post data to mockapi
        fetch('https://64506b72a3221969114a2d25.mockapi.io/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
        .catch(err => console.log(err))

        // create chat room
        fetch(`https://sk-chat-api.vercel.app/api/room`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            },
            body: JSON.stringify({
                "userId": payment.idUser,
                "doctorId": payment.idDoctor
                }
            )
        })
        .then(res => res.json())
        // .then(alert('Booking berhasil dilakukan'))
        .then(res => {
            new Swal(
                "Success!",
                "Booking berhasil dilakukan",
                "success",
                {
                    timer: 3000,
                },
                navigate('/consult/chatroom')
            );
        })
        .catch(err => console.log(err))
        // .then(navigate('/consult/chatroom'))


        // clear payment
        setPayment(false)

        // validate if payment context have a data
        if (!payment) {
        navigate("/listdoctor")
    }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* For Modals if not logged in */}
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Silahkan Login Terlebih Dahulu</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kamu belum melakukan Login, silahkan login terlebih dahulu untuk melakukan booking dokter !</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Tutup
                </Button>
                <Button variant="primary" onClick={() => navigate('/login')}>
                    Ke Login Page
                </Button>
                </Modal.Footer>
            </Modal>
            {/* End of Modals */}

            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-7 text-center">
                        <h4 className="text-carevul">Mau Konsul Apanih ?</h4>
                        <p className="text-light-gray text-center mb-4">Yuk, lengkapi nama  lengkap serta keluhan pada kolom di bawah</p>
                    </div>
                </div>
            <div className="row justify-content-md-center">
                <div className="col-md-7">
                    <div className="container background-form-check p-4 shadow rounded">
                        <div className="row">
                            <div className="col-md">
                                <form id="form-book" onSubmit={handleSubmitFormBooking}>
                                    <h5 className='text-carevul'>Isi form di bawah ini yuk !</h5>
                                    <h6>Nama Lengkap :  </h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Masukkan Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" name="client_name" id="input-name" value={fullName} onChange={e => handleChangeFullName(e)} />
                                    </div>
                                    <h6>Keluhan : </h6>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="input-keluhan" value={complaint} onChange={(e) => handleChangeComplaint(e)} ></textarea>
                                        <label htmlFor="input-keluhan">Silahkan tuliskan keluhan anda : </label>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="fw-light text-carevul"> Harap memasuki roomchat konsultasi pada jadwal yang di tentukan</p>

                                        {
                                            (loginData) ?
                                                <button id="btn-confirm" className="btn color-carevul-gradient text-white" type="submit" name="confirm">Konfirmasi</button>
                                            :
                                            <div className='btn color-carevul-gradient text-white' onClick={handleShow}>
                                                Konfirmasi
                                            </div>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default BookingPage