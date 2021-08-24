import React, {useEffect} from "react";
import s from "./Users.module.scss";
import {FilterType, requestUsers, UsersPageType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader/Preloader";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

type ParsedUrlType = {
   term: string
   page: string
   friend: string
}

const Users: React.FC = React.memo(() => {

   const {
      currentPage,
      pageSize,
      followingInProgress,
      totalCount,
      items: users,
      filter,
      isFetching
   } = useSelector<AppStateType, UsersPageType>(state => state.usersPage);

   const dispatch = useDispatch();
   const history = useHistory()

   const onPageChanged = (pageNumber: number) => {
      dispatch(requestUsers(pageNumber, pageSize, filter));
   }

   const onFilterChanged = (filter: FilterType) => {
      dispatch(requestUsers(1, pageSize, filter));
   }

   useEffect(() => {
      const parsed = queryString.parse(history.location.search.slice(1)) as ParsedUrlType;

      let actualPage = currentPage;
      let actualFilter = filter

      if (!!parsed.page) actualPage = +parsed.page;
      if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
      switch (parsed.friend) {
         case 'null':
            actualFilter = {...actualFilter, friend: null};
            break;
         case 'true':
            actualFilter = {...actualFilter, friend: true};
            break;
         case 'false':
            actualFilter = {...actualFilter, friend: false};
            break;
      }
      dispatch(requestUsers(actualPage, pageSize, actualFilter));
   }, [])

   useEffect(() => {
      const query = {} as ParsedUrlType
      if (!!filter.term) query.term = filter.term
      if (!!filter.friend) query.friend = String(filter.friend)
      if (currentPage !== 1) query.page = String(currentPage)
      history.push({
         pathname: '/users',
         search: queryString.stringify(query)
      })
   }, [filter, currentPage, history]);

   const usersList = users.map(u =>
      <User user={u} followingInProgress={followingInProgress} key={u.id}/>
   )

   return (
      <>
         {isFetching && <Preloader/>}
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