import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatItem } from "react-chat-elements";
import { useNavigate } from "react-router-dom";
import { RoomChatContext } from "../context/roomChatContext";

const ChatItemList = ({ alt, title, subtitle, unread, id, avatar, data }) => {
  const navigate = useNavigate();

  const { setRoomChat } = useContext(RoomChatContext);

  // navigate to chatroom
  const handleClickChatItem = () => {
    // e.preventDefault()
    setRoomChat(data);
    navigate(`/consult/chatroom/${id}`);
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

export default ChatItemList;
