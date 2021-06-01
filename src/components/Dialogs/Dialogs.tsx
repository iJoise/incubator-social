import React from 'react';
import style from './Dialogs.module.scss';
import {ActionType} from "../../redux/state";
import {DialogList} from "./DialogList/DialogList";
import {MessagesList} from "./MessagesList/MessagesList";
import {DialogsPageType} from "../../redux/dialog-reducer";

type DialogsPropsType = {
   dispatch: (action: ActionType) => void
   dialogsPage: DialogsPageType
}


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {

   return (
      <div className={style.dialogs}>
         <DialogList dialogs={dialogsPage.dialogs}/>
         <MessagesList
            messages={dialogsPage.messages}
            newMessage={dialogsPage.newMessage}
            dispatch={dispatch}
         />
      </div>
   );
};


