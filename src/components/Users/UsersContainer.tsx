import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   setUsersAC,
   unFollowAC, UsersPageType,
   UsersType
} from "../../redux/users-reducer";
import React from "react";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";


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

type UsersAPIPropsType = {
   users: UsersType[]
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: UsersType[]) => void
   totalUsersCount: number
   pageSize: number
   currentPage: number
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UsersAPIPropsType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response: AxiosResponse<UsersPageType>) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response: AxiosResponse<UsersPageType>) => {
            this.props.setUsers(response.data.items)
         });
   }

   render() {
      return (
         <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
         />
      )
   }
}


const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
   }
};

const mapDispatchToProps = (dispatch: Dispatch): UserMapDispatchToPropsType => {
   return {
      follow: userId => dispatch(followAC(userId)),
      unFollow: userId => dispatch(unFollowAC(userId)),
      setUsers: users => dispatch(setUsersAC(users)),
      setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
      setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

