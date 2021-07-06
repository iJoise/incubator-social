import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPageAC, unfollow, UsersType} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
   getUsers: (currentPage: number, pageSize: number) => void
}

type UserContainerType = MapDispatchToPropsType & MapStateToPropsType

export class UsersContainer extends React.Component<UserContainerType> {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}


export default compose<React.ComponentType>(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPageAC,
      getUsers,
   }),
   withAuthRedirectComponent
)(UsersContainer);

