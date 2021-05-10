import style from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/state";


const DialogItem:React.FC<DialogsType> = ({id,avatar,name}) => {
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
};

export default DialogItem;