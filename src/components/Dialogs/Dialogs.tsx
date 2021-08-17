import React from 'react';
import style from './Dialogs.module.scss';
import {ChatList} from "./MessagesList/ChatList";
import {DialogList} from "./DialogList/DialogList";
import {DialogsType} from "../../redux/dialog-reducer";

type DialogsPropsType = {
   dialogs: DialogsType[]
   sendMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo((props) => {
   const {dialogs, sendMessage} = props;

   return (
      <div className={style.dialogs}>
         <DialogList dialogs={dialogs}/>
         <ChatList
            sendMessage={sendMessage}
         />
      </div>
   );
});


