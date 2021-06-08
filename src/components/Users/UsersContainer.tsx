import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";



type UsersMapStateToPropsType = {
   users: UsersType[]
}

type UserMapDispatchToPropsType = {
   follow: (userId: string) => void
   unFollow: (userId: string) => void
   setUsers: (users: UsersType[]) => void
}



const mapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch: Dispatch): UserMapDispatchToPropsType => {
   return {
      follow: userId => dispatch(followAC(userId)),
      unFollow: userId => dispatch(unFollowAC(userId)),
      setUsers: users => dispatch(setUsersAC(users))
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

