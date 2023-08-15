import { useContext, useEffect, useState } from "react";
import { RoomChatForDoctorContext } from "../context/roomChatForDoctor";
import { useNavigate } from "react-router-dom";
import { Avatar, Input, MessageBox, Navbar } from "react-chat-elements";
import axios from "axios";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineCloudSync } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

const RoomChatDoctor = () => {
  const { roomChatDoctor } = useContext(RoomChatForDoctorContext);

  const [chatData, setChatData] = useState([]);
  const [inputChat, setInputChat] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getChatData = async () => {
      if (roomChatDoctor) {
        const roomWithChats = await axios
          .get(
            `https://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`
          )
          .then((res) => res.data);
        setChatData(roomWithChats?.chats);
      }
    };

    getChatData();
  }, [roomChatDoctor]);

  // get data login from localstorage
  const loggedDoctor = JSON.parse(localStorage.getItem("idDoctor"));


  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await fetch(
      `https://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`,
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
        body: JSON.stringify({
          userId: loggedDoctor.id,
          message: inputChat,
        }),
      }
    );

    setInputChat("");

    const roomWithChats = await axios
      .get(
        `https://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`
      )
      .then((res) => res.data);
    setChatData(roomWithChats?.chats);
  };

  const handleRefreshChat = async () => {
    const roomWithChats = await axios
      .get(
        `https://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`
      )
      .then((res) => res.data);
    setChatData(roomWithChats?.chats);
  };

  return (
    <>
      <Navbar
        left={
          <Avatar
            src={roomChatDoctor?.user?.image}
            alt="avatar"
            size="xlarge"
            type="rounded"
          />
        }
        center={<div>{roomChatDoctor?.user?.name}</div>}
        right={<div>Pasien</div>}
        type="light"
      />
      <div className="col">
        <div id="chatroom-box">
          {chatData.map((item, index) => (
            <MessageBox
              position={item.userId === loggedDoctor.id ? "right" : "left"}
              // title={item.message}
              type="text"
              text={item.message}
              date={new Date()}
            />
          ))}
        </div>
      </div>
      <div className="col">
        <div className="container-fluid">
          <div className="row">
            <form
              className="col-12 d-flex justify-content-between gap-0"
              onSubmit={(e) => handleSubmitForm(e)}
            >
              <div className="col-9 ">
                <input
                  className="border-carevul gap-2 "
                  placeholder="Type here..."
                  type="text"
                  style={{ width: "100%" }}
                  value={inputChat}
                  onChange={(e) => setInputChat(e.target.value)}
                />
              </div>
              <div className="col-md-2 col-lg-2 d-flex justify-content-end mx-5">
                <button className="btn color-carevul-gradient text-white mx-1">
                  <RiSendPlaneLine className="fs-2" />
                </button>
                <span
                  className="logindong btn text-carevul border-carevul"
                  onClick={handleRefreshChat}
                >
                  <FiRefreshCcw className=" fs-2" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomChatDoctor;
