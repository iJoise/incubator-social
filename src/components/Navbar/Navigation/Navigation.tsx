import React from 'react';
import style from "./Navigation.module.scss";
import {NavLink} from "react-router-dom";


const Navigation = () => {
   return (
      <>
         <nav className={style.nav}>
            <ul>
               <li>
                  <NavLink to="/profile" activeClassName={style.activeLink}>
                     <i className="fa fa-address-card"/>
                     Profile
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/dialogs" activeClassName={style.activeLink}>
                     <i className="fa fa-envelope"/>
                     Message
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/news" activeClassName={style.activeLink}>
                     <i className="fa fa-rss-square"/>
                     News
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/music" activeClassName={style.activeLink}>
                     <i className="fa fa-music"/>
                     Music
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/settings" activeClassName={style.activeLink}>
                     <i className="fa fa-cog"/>
                     Settings
                  </NavLink>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navigation;
