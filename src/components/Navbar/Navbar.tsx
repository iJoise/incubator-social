import React from 'react';
import style from './Navbar.module.scss';
import {Navigation} from "./Navigation/Navigation";
import {MyFriendsContainer} from "./MyFriends/MyFriendsContainer";


export const Navbar = React.memo(() => {
   return (
      <aside className={style.aside}>
         <Navigation/>
         <MyFriendsContainer />
      </aside>
   );
});


