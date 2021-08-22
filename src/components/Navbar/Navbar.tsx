import React from 'react';
import style from './Navbar.module.scss';
import {Navigation} from "./Navigation/Navigation";


export const Navbar = React.memo(() => {
   return (
      <aside className={style.aside}>
         <Navigation/>
      </aside>
   );
});


