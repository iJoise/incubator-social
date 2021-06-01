import React from 'react';
import style from "./Friend.module.scss";
import {FriendsType} from "../../../../redux/sidebar-reducer";


const Friend: React.FC<FriendsType> = ({avatar, name}) => {
   return (
      <div className={style.friend}>
         <img src={avatar} alt="avatar"/>
         <p>{name}</p>
      </div>
   );
};

export default Friend;
