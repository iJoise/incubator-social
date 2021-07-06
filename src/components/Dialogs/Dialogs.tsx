import React from 'react';
import style from './Dialogs.module.scss';
import {MessagesList} from "./MessagesList/MessagesList";
import {DialogList} from "./DialogList/DialogList";
import {DialogsType, MessageType} from "../../redux/dialog-reducer";
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
   messages: MessageType[]
   newMessage: string
   dialogs: DialogsType[]
   sendMessage: () => void
   onChangeMessage: (message: string) => void
   isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
   const {dialogs, messages, newMessage, onChangeMessage, sendMessage, isAuth} = props;

   if (!isAuth) return <Redirect to={'/login'} />


   return (
      <div className={style.dialogs}>
         <DialogList dialogs={dialogs}/>
         <MessagesList
            messages={messages}
            newMessage={newMessage}
            sendMessage={sendMessage}
            onChangeMessage={onChangeMessage}
         />
      </div>
   );
};


