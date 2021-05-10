import React from 'react';
import style from './Header.module.scss';
import logo from './images/logo.png';

const Header = () => {
   return (
      <header className={style.header}>
         <img src={logo} alt="" />
         <input
            type="search"
            placeholder="Enter your search pharse"
            name="form"
            className={style.input}
         />
         <div className={style.buttons}>
            <button className={`${style.btn_log} ${style.btn}`}>
               <i className="fa fa-lock" />
               Sign In
            </button>
            <button className={`${style.btn_reg} ${style.btn}`}>
               <i className="fa fa-globe" />
               Register
            </button>
         </div>
      </header>
   );
};

export default Header;
