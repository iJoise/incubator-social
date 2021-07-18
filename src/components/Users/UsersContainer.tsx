import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {follow, requestUsers, setCurrentPageAC, unfollow, UsersType} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getTotalUsersCount,
   getUsers
} from "../../redux/users-selectors";


type MapStateToPropsType = {
   users: UsersType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: number[]
}

type MapDispatchToPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   setCurrentPageAC: (pageNumber: number) => void
   requestUsers: (currentPage: number, pageSize: number) => void
}

type UserContainerType = MapDispatchToPropsType & MapStateToPropsType

export class UsersContainer extends React.Component<UserContainerType> {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber: number) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return (
         <>
            {this.props.isFetching
               ? <Preloader/>
               : null}
            <Users
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               followingInProgress={this.props.followingInProgress}
            />
         </>
      )
   }
}

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//    return {
//       users: state.usersPage.items,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress
//    }
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default compose<React.ComponentType>(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPageAC,
      requestUsers,
   }),
   React.memo,
)(UsersContainer);

