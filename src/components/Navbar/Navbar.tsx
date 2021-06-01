import React from 'react';
import style from './Navbar.module.scss';
import Navigation from "./Navigation/Navigation";
import MyFriends from "./MyFriends/MyFriends";
import {SidebarType} from "../../redux/sidebar-reducer";


const Navbar: React.FC<SidebarType> = ({friends}) => {
   return (
      <aside className={style.aside}>
         <Navigation/>
         <MyFriends friends={friends}/>
      </aside>
   );
};



export default Navbar;
