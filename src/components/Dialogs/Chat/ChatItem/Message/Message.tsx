import style from "./Message.module.scss";
import React from "react";
import user from '../../../../../assets/images/user.png'
import {ChatMessageType} from "../../../../../redux/chat-reducer";

type MessagePropsType = {
   chatItem: ChatMessageType
}


export const Message: React.FC<MessagePropsType> = React.memo(({chatItem}) => {

   const {message, photo, userName} = chatItem;

   return <div className={style.chat}>
      <div className={style.chat__userAvatar}>
         <img src={photo ? photo : user} alt="avatar"/>
      </div>
      <div>
         <div style={{color: '#304159', paddingLeft: '10px'}}>{userName}</div>
         <div className={style.message}>{message}</div>
      </div>
   </div>
});