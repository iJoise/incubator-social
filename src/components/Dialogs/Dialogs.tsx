import React from 'react';
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


export const Dialogs: React.FC<DialogsPageType> = ({dialogs, messages}) => {
   const dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);
   const messagesElement = messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

   return (
      <div className={style.dialogs}>
         <div className={style.dialogItem}>
            <div className={style.dialogHeader}>Dialogs:</div>
            <div className={style.dialogBody}>
               {dialogsElements}
            </div>
         </div>
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
               <textarea className={style.messageText} placeholder={'Введите сообщение...'}/>
               <i className="fa fa-microphone"/>
            </div>
         </div>
      </div>
   );
};

