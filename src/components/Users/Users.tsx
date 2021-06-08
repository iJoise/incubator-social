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
         return <div key={u.id}>
      <span>
         <div>
            <img src={u.avatarURL} alt={'avatar'}/>
         </div>
      </span>
            <span>
         {u.followed
            ? <button onClick={() => unFollow(u.id)}>Unfollow</button>
            : <button onClick={() => follow(u.id)}>Folow</button>}

      </span>
            <span>
         <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
         </span>
      </span>
            <span>
         <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
         </span>
      </span>
         </div>
      }
   )


   return (
      <div>
         {usersList}
      </div>
   )
}
