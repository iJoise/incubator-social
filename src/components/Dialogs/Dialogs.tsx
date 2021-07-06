import React from 'react';
import style from './Dialogs.module.scss';
import {MessagesList} from "./MessagesList/MessagesList";
import {DialogList} from "./DialogList/DialogList";
import {DialogsType, MessageType} from "../../redux/dialog-reducer";

type DialogsPropsType = {
   messages: MessageType[]
   newMessage: string
   dialogs: DialogsType[]
   sendMessage: () => void
   onChangeMessage: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
   const {dialogs, messages, newMessage, onChangeMessage, sendMessage} = props;

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


