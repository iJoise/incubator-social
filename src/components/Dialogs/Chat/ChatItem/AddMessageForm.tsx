import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "../../Dialogs.module.scss";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../../redux/chat-reducer";

type ChatListPropsType = {
}

export const AddMessageForm: React.FC<ChatListPropsType> = () => {

   const [message, setMessage] = useState('');
   const dispatch = useDispatch();



   const addNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.currentTarget.value);
   }

   const onEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
         e.preventDefault()
         onSubmitHandler();
      }
   }

   const onSubmitHandler = () => {
      if (message.trim() === '') {
         return;
      }
      dispatch(sendMessage(message))
      setMessage('');
   }
   const sendButton = `fa fa-paper-plane ${style.btnSend}`;

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