import { useContext, useEffect, useRef, useState } from "react";
import "./conversations.css";
import axios from "axios";

import Profile from "../../public/Profile.png"
const Conversations = ({conversation,currentUser}) => {

    const [user,setUser]= useState(null)
    useEffect(()=>{
        const friendId = conversation.membars.find((m) => m !== currentUser._id);
        const getUser = async () => {
            try {
            const  res = await axios("/users/one/"+friendId,{
              
            });
              console.log(res.data);
              setUser(res.data);
            } catch (err) {
              console.log(err);
            }
          };
          getUser();
    },[currentUser, conversation]);

    return (
        <div className="conversation d-flex flex-row align-items-center mb-5 ms-3">
        <img src={Profile} alt="" className="conversationImg img-fluid"/>
        <span className="conversationName fs-5 ms-3"><b>{user?.userName}</b></span>
        </div>
    )
}

export default Conversations
