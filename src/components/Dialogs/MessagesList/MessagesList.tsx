import React, {ChangeEvent, KeyboardEvent} from "react";
import Message from "./Message/Message";
import style from "../Dialogs.module.scss";
import {MessageType} from "../../../redux/dialog-reducer";


type MessagesListPropsType = {
   messages: MessageType[]
   newMessage: string
   onChangeMessage: (message: string) => void
   sendMessage: () => void
}


export const MessagesList: React.FC<MessagesListPropsType> = (
   {messages,
      newMessage,
      onChangeMessage,
      sendMessage
   }) => {

   const messagesElement = messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

   const sendButton = `fa fa-paper-plane ${style.btnSend}`;

   const onChangeMessagesHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const message = e.currentTarget.value
      onChangeMessage(message)
   }

   const sendMessageHandler = () => {
      sendMessage();
   }

   const onPressEnterToSend = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
         sendMessageHandler();
      }
   }

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
         {messagesElement}
         <div className={style.messageBottom}>
            <i className="fa fa-paperclip"/>
            <textarea
               value={newMessage}
               onChange={onChangeMessagesHandler}
               className={style.messageText}
               placeholder={'Введите сообщение...'}
               onKeyPress={onPressEnterToSend}
            />
            <button onClick={sendMessageHandler}><i className={sendButton}/></button>
            <i className="fa fa-microphone"/>
         </div>
      </div>
   )
}