import style from "./Message.module.scss";
import React from "react";
import {MessageType} from "../../../../redux/dialog-reducer";


const Message: React.FC<MessageType> = React.memo(({message}) => {
   return <div className={style.message}>{message}</div>;
});

export default Message;