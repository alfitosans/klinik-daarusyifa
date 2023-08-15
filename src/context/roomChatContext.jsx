import { createContext, useState } from "react";

export const RoomChatContext = createContext();

const RoomChatProvider = ({ children }) => {
  const [roomChat, setRoomChat] = useState();

  return <RoomChatContext.Provider value={{ roomChat, setRoomChat }}>{children}</RoomChatContext.Provider>;
};

export default RoomChatProvider;
