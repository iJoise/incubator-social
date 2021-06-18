import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   setUsersAC,
   unFollowAC,
   UsersType
} from "../../redux/users-reducer";


type UsersMapStateToPropsType = {
   users: UsersType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

type UserMapDispatchToPropsType = {
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: UsersType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalUsersCount: number) => void
}

const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
   }
}

const mapDispatchToProps = (dispatch: Dispatch): UserMapDispatchToPropsType => {
   return {
      follow: userId => dispatch(followAC(userId)),
      unFollow: userId => dispatch(unFollowAC(userId)),
      setUsers: users => dispatch(setUsersAC(users)),
      setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
      setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

