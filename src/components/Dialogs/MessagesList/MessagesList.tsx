import React, {ChangeEvent, KeyboardEvent} from "react";
import Message from "./Message/Message";
import style from "../Dialogs.module.scss";
import {addMessageCreator, changeNewMessageCreator, MessagesType} from "../../../redux/dialog-reducer";
import {ActionType} from "../../../redux/state";


type MessagesListPropsType = {
   messages: MessagesType[]
   newMessage: string
   dispatch: (action: ActionType) => void
}


export const MessagesList: React.FC<MessagesListPropsType> = ({messages, newMessage, dispatch}) => {

   const messagesElement = messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

   const sendButton = `fa fa-paper-plane ${style.btnSend}`;

   const onChangeMessagesHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const message = e.currentTarget.value
      dispatch(changeNewMessageCreator(message));
   }

   const sendMessageHandler = () => {
      if (newMessage.trim() === '') {
         return;
      }
      dispatch(addMessageCreator());
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