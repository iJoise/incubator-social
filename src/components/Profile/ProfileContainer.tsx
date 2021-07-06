import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";

type PathParamType = {
   userId: string
}

type MapStateToPropsType = {
   profile: UserProfileType | null
}

type MapDispatchToPropsType = {
   getUserProfile: (userId: number) => void
}

type PropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      !userId && (userId = '17599');
      this.props.getUserProfile(+userId);
   }

   render() {
      return (
         <>
            <Profile
               {...this.props}
               profile={this.props.profile}
            />
         </>
      );
   }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
   profile: state.profilePage.profile,
})


export default withRouter(
   withAuthRedirectComponent(
      connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
         mapStateToProps, {getUserProfile}
      )
      (ProfileContainer)
   ));
