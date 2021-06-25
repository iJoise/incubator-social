import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   setUsersAC, toggleFollowingProgressAC,
   toggleIsFetchingAC,
   unFollowAC,
   UsersPageType,
   UsersType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


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
      this.props.toggleIsFetchingAC(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then((data: UsersPageType) => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(data.items)
            this.props.setTotalUsersCountAC(data.totalCount)
         });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPageAC(pageNumber);
      this.props.toggleIsFetchingAC(true);

      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then((data: UsersPageType) => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsersAC(data.items);
         });
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
               unFollow={this.props.unFollowAC}
               follow={this.props.followAC}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               followingProgress={this.props.toggleFollowingProgressAC}
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
   followAC,
   unFollowAC,
   setUsersAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   toggleIsFetchingAC,
   toggleFollowingProgressAC,
})

type TProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer);

