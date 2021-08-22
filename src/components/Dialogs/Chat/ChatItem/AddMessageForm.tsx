import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "../../Dialogs.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../../redux/chat-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {STATUS_CHAT} from "../../../../api/chat-api";

type ChatListPropsType = {
}

export const AddMessageForm: React.FC<ChatListPropsType> = () => {

   const status = useSelector<AppStateType, STATUS_CHAT>(state => state.chat.status)

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
      console.log('click')
      if (message.trim() === '') {
         return;
      }
      dispatch(sendMessage(message))
      setMessage('');
   }
   const sendButton = `fa fa-paper-plane ${status === STATUS_CHAT.Ready ? style.btnSend : style.btnDisabled}`;

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
               disabled={status !== STATUS_CHAT.Ready}
               onClick={onSubmitHandler}
            ><i className={sendButton}/></button>
            <i className="fa fa-microphone"/>
         </div>
      </div>
   )
}