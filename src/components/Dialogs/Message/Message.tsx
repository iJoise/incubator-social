import style from "./Message.module.scss";
import React from "react";
import {MessagesType} from "../../../redux/state";


const Message:React.FC<MessagesType> = ({message}) => {
   return <div className={style.message}>{message}</div>;
};

export default Message;