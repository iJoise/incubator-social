import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   setUsersAC,
   toggleIsFetchingAC,
   unFollowAC,
   UsersPageType,
   UsersType
} from "../../redux/users-reducer";
import React from "react";
import axios, {AxiosResponse} from 'axios';
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

type UsersMapStateToPropsType = {
   users: UsersType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
}



export class UsersContainer extends React.Component<TProps> {

   componentDidMount() {
      this.props.toggleIsFetchingAC(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response: AxiosResponse<UsersPageType>) => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUsersCountAC(response.data.totalCount)
         });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPageAC(pageNumber);
      this.props.toggleIsFetchingAC(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response: AxiosResponse<UsersPageType>) => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsersAC(response.data.items);
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
   }
}

const connector = connect(mapStateToProps, {
   followAC,
   unFollowAC,
   setUsersAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   toggleIsFetchingAC,
})

type TProps = ConnectedProps<typeof connector>;
export default connector(UsersContainer);

