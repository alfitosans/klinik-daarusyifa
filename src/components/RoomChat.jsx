import { useContext, useEffect, useState } from "react";
import { Avatar, Input, MessageBox, Navbar } from "react-chat-elements";
import { RoomChatContext } from "../context/roomChatContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineCloudSync } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { Button, Container } from "react-bootstrap";

const RoomChat = () => {
  const { roomChat } = useContext(RoomChatContext);

  const [chatData, setChatData] = useState([]);
  const [inputChat, setInputChat] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getChatData = async () => {
      if (roomChat) {
        const roomWithChats = await axios
          .get(`https://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`)
          .then((res) => res.data);
        setChatData(roomWithChats?.chats);
      }
    };

    getChatData();
  }, [roomChat]);

  // get data login from localstorage
  const loggedUser = JSON.parse(localStorage.getItem("idUser"));


  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await fetch(`https://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`,
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
        body: JSON.stringify({
          userId: loggedUser.id,
          message: inputChat,
        }),
      }
    );


    setInputChat("");

    const roomWithChats = await axios
      .get(`https://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`)
      .then((res) => res.data);
    setChatData(roomWithChats?.chats);
  };

  const handleRefreshChat = async () => {
    const roomWithChats = await axios
      .get(`https://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`)
      .then((res) => res.data);
    setChatData(roomWithChats?.chats);
  };

  return (
    <>
      <Navbar
        left={
          <Avatar
            src={roomChat?.doctor?.image}
            alt="avatar"
            size="xlarge"
            type="rounded"
          />
        }
        center={<div>{roomChat?.doctor?.name}</div>}
        right={<div>Dokter {roomChat?.doctor?.kategori}</div>}
        type="light"
      />
      <div className="col ">
        <div id="chatroom-box">
          {chatData.map((item, index) => (
            <MessageBox
              key={index}
              position={item.userId === loggedUser.id ? "right" : "left"}
              // title={item.message}
              type="text"
              text={item.message}
              date={new Date()}
              replyButton={true}
            />
          ))}
        </div>
      </div>
      <div className="col ">
        <div className="container-fluid">
          <div className="row">
            <form
              // className="col d-flex justify-content-between align-items-center"
              className="col-12 d-flex justify-content-between gap-0"
              onSubmit={(e) => handleSubmitForm(e)}
            >
              <div className="container-fluid">
                <div className="row d-flex justify-content-between ">
                  <div className="col-lg-9">
                    <input
                      className="border-carevul gap-2 "
                      placeholder="Type here..."
                      type="text"
                      style={{ width: "100%" }}
                      value={inputChat}
                      onChange={(e) => setInputChat(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 col-lg-2 d-flex justify-content-end ">
                    <button
                      className="btn color-carevul-gradient text-white mx-1"
                      size="sm"
                      // style={{ width: "70%" }}
                    >
                      <RiSendPlaneLine className="fs-2" />
                    </button>
                    <span
                      className="logindong btn text-carevul border-carevul"
                      onClick={handleRefreshChat}
                    >
                      <FiRefreshCcw className="fs-2" />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomChat;
