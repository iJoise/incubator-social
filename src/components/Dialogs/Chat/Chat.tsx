import React, {useEffect} from "react";
import {ChatItem} from "./ChatItem/ChatItem";
import {AddMessageForm} from "./ChatItem/AddMessageForm";
import {useDispatch} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chat-reducer";

type ChatPropsType = {
   sendMessage: (value: string) => void
}


export const Chat: React.FC<ChatPropsType> = ({sendMessage}) => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(startMessagesListening());
      return () => {
         dispatch(stopMessagesListening());
      }
   }, [])


   return (
      <div>
         <ChatItem sendMessage={sendMessage}/>
         <AddMessageForm />
      </div>
   )
}
