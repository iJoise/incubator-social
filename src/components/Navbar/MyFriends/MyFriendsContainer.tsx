import {MyFriends} from "./MyFriends";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {FriendsType} from "../../../redux/sidebar-reducer";

export type FriendsMapStateToPropsType = {
   friends: FriendsType[]
}

const mapStateToProps = (state: AppStateType): FriendsMapStateToPropsType => {
   return {
      friends: state.sidebar.friends,
   }
}


export const MyFriendsContainer = connect(mapStateToProps, {})(MyFriends)


