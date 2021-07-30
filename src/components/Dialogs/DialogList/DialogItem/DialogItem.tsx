import style from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../../redux/dialog-reducer";



const DialogItem:React.FC<DialogsType> = React.memo(({id,avatar,name}) => {
   let path = `/dialogs/${id}`;
   return (
      <div className={style.dialog}>
         <NavLink to={path} activeClassName={style.activeDialog}>
            <img
               src={avatar}
               alt="avatar"
            />
            {name}
         </NavLink>
      </div>
   );
});

export default DialogItem;