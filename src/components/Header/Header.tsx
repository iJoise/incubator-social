import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
   isAuth: boolean
   login: string | null
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
   return (
      <header className={style.header}>
         <img src={logo} alt=""/>
         <input
            type="search"
            placeholder="Enter your search pharse"
            name="form"
            className={style.input}
         />

         {
            isAuth
               ? <div className={style.login}>Hello {login}</div>
               : <div className={style.buttons}>
                  <NavLink
                     to={'/login'}
                     className={` ${style.btn} ${style.btn_log}`}>
                     <i className="fa fa-lock"/>
                     Sign In
                  </NavLink>
                  <a
                     href={'https://social-network.samuraijs.com/signUp'}
                     className={`${style.btn} ${style.btn_reg}`}>
                     <i className="fa fa-globe"/>
                     Register
                  </a>
               </div>
         }
      </header>
   )
}


export default Header;
