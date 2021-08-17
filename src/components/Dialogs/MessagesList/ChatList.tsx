import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from "react";
import {Chat} from "./Message/Chat";
import style from "../Dialogs.module.scss";


type MessagesListPropsType = {
   sendMessage: (newMessage: string) => void
}

const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
   message: string
   photo: string
   userId: number
   userName: string
}


export const ChatList: React.FC<MessagesListPropsType> = React.memo(() => {

   const [messages, setMessages] = useState([] as ChatMessageType[]);


   const messagesElement = messages.map((m,i) => <Chat key={new Date().getTime() + i} chatItem={m}/>);
   const messagesRef = React.createRef<HTMLDivElement>();


   useEffect(() => {
      const div = messagesRef.current;
      if (div) {
         div.scrollTo(0, div.scrollHeight)
      }
   })

   useEffect(() => {
      socket.addEventListener('message', e => {
         const newMessages = JSON.parse(e.data);
         setMessages((prevMessages) => [...prevMessages, ...newMessages])
      })
   }, []);


   return (
      <div className={style.messages}>
         <div className={style.messageHeader}>
            <i className="fa fa-search"/>
            <input
               type="search"
               placeholder="Search message..."
               name="form"
            />
            <i className="fa fa-sliders"/>
         </div>

         <div className={style.messagesBody} ref={messagesRef}>
            {messagesElement}
         </div>
         <AddMessageForm/>
      </div>
   )
})

type ChatListPropsType = {}


export const AddMessageForm: React.FC<ChatListPropsType> = () => {

   const [message, setMessage] = useState('');

   const sendButton = `fa fa-paper-plane ${style.btnSend}`;

   const addNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.currentTarget.value);
   }

   const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
         onSubmitHandler();
      }
   }

   const onSubmitHandler = () => {
      if (message.trim() === '') {
         return;
      }
      socket.send(message.trim());
      setMessage('');
   }

   return (
      <div className={style.messageBottom}>
            <textarea
               onChange={addNewMessage}
               className={style.messageText}
               placeholder={'Введите сообщение...'}
               value={message}
               onKeyPress={onEnterHandler}
            />
         <div className={style.btn}>
            <button
               onClick={onSubmitHandler}
            ><i className={sendButton}/></button>
            <i className="fa fa-microphone"/>
         </div>
      </div>
   )
}
