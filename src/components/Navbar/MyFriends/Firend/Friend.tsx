import React from 'react';
import style from "./Friend.module.scss";

type FriendPropsType = {
   id: number,
   name: string,
   avatar: string
}

const Friend = (props: FriendPropsType) => {
   return (
      <div className={style.friend}>
         <img src={props.avatar} alt="avatar"/>
         <p>{props.name}</p>
      </div>
   );
};

export default Friend;
