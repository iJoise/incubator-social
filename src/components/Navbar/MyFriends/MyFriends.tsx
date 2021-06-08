import React from 'react';
import style from "./MyFriends.module.scss";
import Friend from "./Firend/Friend";
import {SidebarType} from "../../../redux/sidebar-reducer";


export const MyFriends: React.FC<SidebarType> = ({friends}) => {

   const myFriendList = friends.map(f => <Friend key={f.id} name={f.name} id={f.id} avatar={f.avatar}/>);

   return (
      <div className={style.friends}>
         <h3><i className="fa fa-users"/>Friends:</h3>
         <div className={style.friends__column}>
            <div className={style.friends__row}>
               {myFriendList}
            </div>
         </div>
      </div>
   );
};

