import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "../Dialogs.module.scss";
import {DialogsType} from "../../../redux/dialog-reducer";

type DialogListPropsType = {
   dialogs: DialogsType[]
}
export const DialogList: React.FC<DialogListPropsType> = React.memo(({dialogs}) => {

   const dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

   return (
      <div className={style.dialogItem}>
         <div className={style.dialogHeader}>Dialogs:</div>
         <div className={style.dialogBody}>
            {dialogsElements}
         </div>
      </div>
   )
})