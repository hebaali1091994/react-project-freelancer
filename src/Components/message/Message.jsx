import React from 'react'
import './message.css'
import Profile from "../../public/Profile.png"
import { format } from "timeago.js";
const Message = ({message, own}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="massageTop">
            <img src={Profile} alt="" className="messageImg img-fluid"/>
             <p className="messageText">{message.Text}</p>
            </div>
            <div className="massageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}

export default Message