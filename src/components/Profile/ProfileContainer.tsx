import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type PathParamType = {
   userId: string
}

type MapStateToPropsType = {
   profile: UserProfileType | null
}

type MapDispatchToPropsType = {
   setUserProfileAC: (profile: UserProfileType) => void
}

type PropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      !userId && (userId = '17599');
      usersAPI.userProfile(userId)
         .then((data: UserProfileType) => {
            this.props.setUserProfileAC(data);
         });
   }

   render() {
      return (
         <>
            <Profile {...this.props} profile={this.props.profile}/>
         </>
      );
   }
}


const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile
})


export default withRouter(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfileAC})(ProfileContainer));
