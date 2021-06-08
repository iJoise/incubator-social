import React from 'react';
import style from './Dialogs.module.scss';
import {MessagesListContainer} from "./MessagesList/MessagesListContainer";
import {DialogListContainer} from "./DialogList/DialogListContainer";


export const Dialogs = () => {

   return (
      <div className={style.dialogs}>
         <DialogListContainer />
         <MessagesListContainer />
      </div>
   );
};


