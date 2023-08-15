import { createContext, useState } from "react";

export const RoomChatForDoctorContext = createContext();

const RoomChatForDoctorProvider = ({ children }) => {
  const [roomChatDoctor, setRoomChatDoctor] = useState();

  return <RoomChatForDoctorContext.Provider value={{ roomChatDoctor, setRoomChatDoctor }}>{children}</RoomChatForDoctorContext.Provider>;
};

export default RoomChatForDoctorProvider;
