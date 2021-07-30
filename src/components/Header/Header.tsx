import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {PhotosType} from "../../redux/users-reducer";

type HeaderPropsType = {
   isAuth: boolean
   login: string | null
   logout: () => void
   photoUser: PhotosType
}

const Header: React.FC<HeaderPropsType> = React.memo(({isAuth, login, photoUser, logout}) => {
   return (
      <header className={style.header}>
         <img className={style.header__logo} src={logo} alt=""/>
         <input
            type="search"
            placeholder="Enter your search"
            name="form"
            className={style.input}
         />

         {
            isAuth
               ? <div className={style.auth}>
                  <div className={style.login}>
                     <div className={style.login__name}>Hello {login}</div>
                     <button
                        className={`${style.btn} ${style.btn_log}`}
                        onClick={logout}
                     >Logout</button>
                  </div>
                  <img className={style.photo} src={photoUser.small || photoUser.large || user} alt="user"/>
               </div>
               : <div className={style.buttons}>
                  <NavLink
                     to={'/login'}
                     className={`${style.btn} ${style.btn_log}`}>
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
})


export default Header;
