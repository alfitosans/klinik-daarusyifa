import { Link, Outlet } from "react-router-dom";
import noConsult from "./../assets/no_booked_doctor.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar, ChatItem, Input, MessageBox, Navbar } from "react-chat-elements";
import ChatItemList from "./ChatItemList";

import "./../styles/chatroom.css";

import "react-chat-elements/dist/main.css";
import RoomChat from "./RoomChat";
import { useEffect, useState } from "react";
import axios from "axios";

import AOS from "aos";

const ConsultRoom = () => {
  const [availableChatRooms, setAvailableChatRooms] = useState([]);
  const [chatList, setChatList] = useState([]);

  // get data logged user from localstorage
  const loggedUser = JSON.parse(localStorage.getItem("idUser"));

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const getBookedDoctors = async () => {
      const userChatRooms = await axios.get(`https://sk-chat-api.vercel.app/api/room?userId=${loggedUser.id}`).then((res) => res.data);
      const doctorsData = await axios.get(`https://6487fbcf0e2469c038fcbc44.mockapi.io/doctor`).then((res) => res.data);

      const chatRooms = userChatRooms.map((room) => {
        const doctor = doctorsData.find((doctor) => doctor.id === room.doctorId);
        return { ...room, doctor, idUser: loggedUser.id, idDoctor: doctor.id };
      });

      setAvailableChatRooms(chatRooms);
    };
    getBookedDoctors();
  }, []);

  return (
    <>
      {availableChatRooms.length === 0 ? (
        <section id="doctors-list" >
          <div className="row justify-content-md-center ">
            <div className="col-md-7 text-center">
              <p className="text-light-gray fw-light">Silahkan berkonsultasi dengan dokter, ceritakan apa yang kamu rasakan kepada dokter agar dokter dapat memberi solusi buat kamu ya!</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="1000">
              <img src={noConsult} />
            </div>
          </div>
          <div className="row justify-content-md-center mt-2">
            <div className="col-md-4 d-flex">
              <Link to="/consult/category" className="btn color-carevul-gradient flex-fill text-white px-5 py-2">
                Mulai Konsultasi
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section id="chat">
          <div className="border container rounded shadow">
            <Row>
              <div className="col-4">
                <section id="chatListRoom">
                  <div className="container-fluid">
                    {availableChatRooms.map((roomData) => (
                      <Row key={roomData.id}>
                        <div className="col">
                          <ChatItemList
                            key={roomData.id}
                            avatar={roomData.doctor.image}
                            alt={roomData.doctor.email}
                            title={roomData.doctor.name}
                            subtitle={roomData.doctor.instansi}
                            date={new Date()}
                            unread={0}
                            id={roomData.id}
                            data={roomData}
                          />
                        </div>
                      </Row>
                    ))}
                  </div>
                </section>
              </div>
              <div className="col-8">
                <section id="roomchat">
                  <Outlet />
                </section>
              </div>
            </Row>
          </div>
        </section>
      )}
    </>
  );
};

export default ConsultRoom;
