import React, { useEffect, useState } from "react";
import ChatBar from "../../Components/Chat/ChatBar";
import ChatBody from "../../Components/Chat/ChatBody";
import ChatFooter from "../../Components/Chat/ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
