import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";

type PathParamType = {
   userId: string
}

type MapStateToPropsType = {
   profile: UserProfileType | null
   status: string | null
   authorizedUserId: number | null
}

type MapDispatchToPropsType = {
   getUserProfile: (userId: number) => void
   getStatus: (userId: number) => void
   updateStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      !userId && (userId = String(this.props.authorizedUserId));
      this.props.getUserProfile(+userId);
      this.props.getStatus(+userId)
   }

   render() {
      return (
         <>
            <Profile
               {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
            />
         </>
      );
   }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id
})


export default compose<React.ComponentType>(
   connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
   (mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
   }),
   withRouter,
   withAuthRedirectComponent,
)(ProfileContainer);
