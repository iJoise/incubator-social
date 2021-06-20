import React from "react";
import s from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
   users: UsersType[]
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   totalUsersCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

   const {
      users,
      unFollow,
      follow,
      totalUsersCount,
      pageSize,
      currentPage,
      onPageChanged
   } = props;

   const pageCount = Math.ceil(totalUsersCount / pageSize);
   const pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }

   const usersList = users.map(u => {
         return (
            <div key={u.id} className={s.user__body}>
               <div className={s.user__img}>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small ? u.photos.small : userPhoto} alt={'avatar'}/>
                  </NavLink>
               </div>
               <div className={s.user__item}>
                  <div className={s.user__info}>
                     <div className={s.user__name}>{u.name}</div>
                     <div className={s.user__status}>{u.status}</div>
                  </div>
                  <div className={s.user__button}>
                     {u.followed
                        ? <button className={s.btn} onClick={() => unFollow(u.id)}>Unfollow</button>
                        : <button className={`${s.btn} ${s.btn__bl}`}
                                  onClick={() => follow(u.id)}>Follow</button>}

                  </div>
               </div>
            </div>
         )
      }
   )

   return (
      <div className={s.user}>
         {usersList}
         <div className={s.paginationContainer}>
            {
               pages.map(p => {
                  return <div key={p}
                              className={currentPage === p ? `${s.pagination} ${s.selected}` : s.pagination}
                              onClick={() => {
                                 onPageChanged(p)
                              }}
                  >{p}</div>
               })
            }
         </div>
      </div>
   )
}
