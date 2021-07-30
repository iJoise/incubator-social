import React from 'react';
import style from './Dialogs.module.scss';
import {MessagesList} from "./MessagesList/MessagesList";
import {DialogList} from "./DialogList/DialogList";
import {DialogsType, MessageType} from "../../redux/dialog-reducer";

type DialogsPropsType = {
   messages: MessageType[]
   dialogs: DialogsType[]
   sendMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo((props) => {
   const {dialogs, messages, sendMessage} = props;

   return (
      <div className={style.dialogs}>
         <DialogList dialogs={dialogs}/>
         <MessagesList
            messages={messages}
            sendMessage={sendMessage}
         />
      </div>
   );
});


