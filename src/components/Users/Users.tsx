import React from "react";
import s from "./Users.module.scss";
import {UsersType} from "../../redux/users-reducer";
import {v1} from "uuid";

type UsersPropsType = {
   users: UsersType[]
   follow: (userId: string) => void
   unFollow: (userId: string) => void
   setUsers: (users: UsersType[]) => void
}


export const Users: React.FC<UsersPropsType> = ({users, setUsers, unFollow, follow}) => {

   if (users.length === 0) {
      setUsers([
         {
            id: v1(),
            followed: true,
            avatarURL: 'https://source.unsplash.com/random/150x150/',
            fullName: 'Kirill',
            status: 'I am a boss',
            location: {city: 'Prokopievsk', country: 'Russia'}
         },
         {
            id: v1(),
            followed: true,
            avatarURL: 'https://source.unsplash.com/random/150x150/',
            fullName: 'Polina',
            status: 'I\'m the boss\'s wife',
            location: {city: 'Prokopievsk', country: 'Russia'}
         },
         {
            id: v1(),
            followed: false,
            avatarURL: 'https://source.unsplash.com/random/150x150/',
            fullName: 'Iliya',
            status: 'I\'m the boss\'s friend',
            location: {city: 'Prokopievsk', country: 'Russia'}
         },
         {
            id: v1(),
            followed: false,
            avatarURL: 'https://source.unsplash.com/random/150x150/',
            fullName: 'Nastya',
            status: 'I\'m the boss\'s friend\'s wife',
            location: {city: 'Prokopievsk', country: 'Russia'}
         },
      ])
   }

   const usersList = users.map(u => {
         return (
            <div key={u.id} className={s.user__body}>
               <div className={s.user__img}>
                  <img src={u.avatarURL} alt={'avatar'}/>
               </div>
               <div className={s.user__item}>
                  <div className={s.user__info}>
                     <div className={s.user__name}>{u.fullName}</div>
                     <div className={s.user__status}>{u.status}</div>
                  </div>
                  <div className={s.user__button}>
                     {u.followed
                        ? <button className={s.btn} onClick={() => unFollow(u.id)}>Unfollow</button>
                        : <button className={`${s.btn} ${s.btn__bl}`} onClick={() => follow(u.id)}>Folow</button>}

                  </div>
               </div>
               <div className={s.user__location}>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
               </div>
            </div>
         )
      }
   )


   return (
      <div className={s.user}>
         {usersList}
      </div>
   )
}
