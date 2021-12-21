import { useContext, useEffect, useRef, useState } from "react";
import Conversations from "../../Components/conversations/Conversations";
import Header from "../../Components/Header";
import Message from "../../Components/message/Message";
import "./messenger.css";
import { Context } from "../../context/Context";
import axios from "axios";
import livechat from "../../public/livechat.svg";
import { io } from "socket.io-client";

const Massenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useContext(Context);
  const scrollRef = useRef();
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        Sender: data.senderId,
        Text: data.Text,
        createdAt: Date.now(),
      });
      console.log(data)
    });
    
  }, []);
  

  useEffect(() => {
    arrivalMessage &&
      currentChat?.membars.includes(arrivalMessage.Sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {});
  }, [user]);

  // -------------------------------------------------------start get getConversations------------------------------------------------//
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversion/" + user._id);
        console.log(res.data);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);
  // -------------------------------------------------------End get getConversations------------------------------------------------//

  // -------------------------------------------------------startget Messages ------------------------------------------------//
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currentChat?._id);
        console.log(res.data);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(currentChat)
  // -------------------------------------------------------End get Messages ------------------------------------------------//

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      Sender: user._id,
      Text: newMessage,
      conversion_id: currentChat._id,
    };

    const receiverId = currentChat.membars.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      Text: newMessage,
    });

    try {
      const res = await axios.post("/message/", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* --------------------------------------------------------------------------------------------------------------------- */}
      <div className="messenger container-fluid">
        <div className="row">
          <div className="massgNav col-md-12">
            <Header />
          </div>
          {/* ---------------------------------------------------start-chatMenu------------------------------------------------------ */}
          <div className="chatMenu col-md-3 d-flex flex-column mt-3">
            <input
              placeholder="Search for friends"
              className="chatMenuInput w-100 mb-5 form-control"
            />

            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversations conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
          {/* ----------------------------------------------------start-chatBox----------------------------------------------------- */}
          <div className="chatBox col-md-9 mt-3">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message message={m} own={m.Sender === user._id} />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom ">
                    <input
                      type="text"
                      className="chatMessageInput form-control"
                      placeholder="write something..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    />

                    <button className="chatSubmitButton" onClick={handleSubmit}>
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <div className="chatWelMassage d-flex flex-column text-center">
                  <img className="img-fluid m-auto" src={livechat} alt="" />
                  <p className="fs-1 text-primary">
                    <b>Welcome to your messages</b>
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default Massenger;
