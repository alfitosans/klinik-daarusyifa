import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatItem } from "react-chat-elements";
import { useNavigate } from "react-router-dom";
import { RoomChatContext } from "../context/roomChatContext";
import { RoomChatForDoctorContext } from "../context/roomChatForDoctor";

const ChatItemListForDoctor = ({ alt, title, subtitle, unread, id, avatar, data }) => {
  const navigate = useNavigate();

  const { setRoomChatDoctor } = useContext(RoomChatForDoctorContext);

  // navigate to chatroom
  const handleClickChatItem = () => {
    setRoomChatDoctor(data);
    navigate(`/detaildoctor/${id}`);
  };

  return (
    <ChatItem
      avatar={avatar}
      alt={alt}
      title={title}
      subtitle={subtitle}
      date={new Date()}
      unread={unread}
      id={id}
      // onClick={()=> navigate(`/consult/chatroom/${id}`) }
      onClick={() => handleClickChatItem()}
    />
  );
};

export default ChatItemListForDoctor;
