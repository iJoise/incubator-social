import React from 'react';
import style from './Dialogs.module.scss';
import {DialogList} from "./DialogList/DialogList";
import {DialogsType} from "../../redux/dialog-reducer";
import {Chat} from "./Chat/Chat";

type DialogsPropsType = {
   dialogs: DialogsType[]
   sendMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo((props) => {
   const {dialogs, sendMessage} = props;

   return (
      <div className={style.dialogs}>
         <DialogList dialogs={dialogs}/>
         <Chat sendMessage={sendMessage} />
      </div>
   );
});


