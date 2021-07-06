import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPageAC, unfollow, UsersType} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


type UsersMapStateToPropsType = {
   users: UsersType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: number[]
}


export class UsersContainer extends React.Component<TProps> {

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

const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}

const connector = connect(mapStateToProps, {
   follow,
   unfollow,
   setCurrentPageAC,
   getUsers,
})

type TProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer);

