import React, { useEffect, useRef, useState } from "react";
import ChatBar from "../../Components/Chat/ChatBar";
import ChatBody from "../../Components/Chat/ChatBody";
import ChatFooter from "../../Components/Chat/ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    function fetchMessages() {
      fetch("http://localhost:4000/api")
        .then((response) => response.json())
        .then((data) => setMessages(data.messages));
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    // 👇️ scroll cada vez que se manda un mensaje
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
