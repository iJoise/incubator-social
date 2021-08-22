import React from "react";
import s from "./Users.module.scss";
import {FilterType, UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";
import {UsersSearchForm} from "./UsersSearchForm";

type UsersPropsType = {
   users: UsersType[]
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   totalUsersCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   followingInProgress: number[]
   onFilterChanged: (filter: FilterType) => void
}


export const Users: React.FC<UsersPropsType> = React.memo((props) => {

   const {
      users,
      unfollow,
      follow,
      totalUsersCount,
      pageSize,
      currentPage,
      onPageChanged,
      followingInProgress,
      onFilterChanged
   } = props;


   const usersList = users.map(u =>
      <User user={u} follow={follow} followingInProgress={followingInProgress} unfollow={unfollow} key={u.id}/>
   )

   return (
      <div className={s.user_container}>
         <UsersSearchForm onFilterChanged={onFilterChanged}/>
         <Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
         />

         {usersList}

      </div>
   )
})

