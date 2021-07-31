import React from "react";
import s from "./User.module.scss";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../redux/users-reducer";

type UserPropsType = {
   user: UsersType
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   followingInProgress: number[]
}


export const User: React.FC<UserPropsType> = React.memo((props) => {

   const {
      unfollow,
      follow,
      followingInProgress,
      user
   } = props;

   return (
      <div className={s.user}>
         <div key={user.id} className={s.user__body}>
            <div className={s.user__img}>
               <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small || userPhoto} alt={'avatar'}/>
               </NavLink>
            </div>
            <div className={s.user__item}>
               <div>
                  <div className={s.user__name}>{user.name}</div>
                  <div className={s.user__status}>{user.status}</div>
               </div>
               <div>
                  {user.followed
                     ? <button className={s.btn}
                               disabled={followingInProgress.some(id => id === user.id)}
                               onClick={() => {
                                  unfollow(user.id)
                               }
                               }>Unfollow</button>
                     : <button className={`${s.btn} ${s.btn__bl}`}
                               disabled={followingInProgress.some(id => id === user.id)}
                               onClick={() => {
                                  follow(user.id)
                               }
                               }>Follow</button>
                  }
               </div>
            </div>
         </div>
      </div>
   )
})
