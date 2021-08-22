import React, {useEffect} from "react";
import s from "./Users.module.scss";
import {FilterType, requestUsers, UsersPageType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader/Preloader";

const Users: React.FC = React.memo(() => {

   const {
      currentPage,
      pageSize,
      followingInProgress,
      totalCount,
      items: users,
      filter,
      isFetching
   } = useSelector<AppStateType, UsersPageType>(state => state.usersPage)

   const dispatch = useDispatch()

   const onPageChanged = (pageNumber: number) => {
      dispatch(requestUsers(pageNumber, pageSize, filter));
   }

   const onFilterChanged = (filter: FilterType) => {
      dispatch(requestUsers(1, pageSize, filter));
   }

   useEffect(() => {
      dispatch(requestUsers(currentPage, pageSize, filter));
   }, [])

   const usersList = users.map(u =>
      <User user={u} followingInProgress={followingInProgress} key={u.id}/>
   )

   return (
      <>
         {isFetching  && <Preloader/>}
         <div className={s.user_container}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator
               totalItemsCount={totalCount}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChanged={onPageChanged}
            />

            {usersList}

         </div>
      </>
   )
})

export default Users;