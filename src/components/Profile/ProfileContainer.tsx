import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
   getStatus,
   getUserProfile,
   savePhoto,
   saveProfile,
   updateStatus,
   UserProfileType
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {ProfileUpdateType} from "../../api/api";

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
   savePhoto: (photo: File) => void
   saveProfile: (data: ProfileUpdateType) => void
}

type PropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

   refreshProfile() {
      let userId = this.props.match.params.userId;
      !userId && (userId = String(this.props.authorizedUserId));
      this.props.getUserProfile(+userId);
      this.props.getStatus(+userId)
   }

   shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<{}>): boolean {
      return nextProps !== this.props || nextState !== this.state;
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile()
      }

   }

   render() {
      return (
         <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
         />
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
      savePhoto,
      saveProfile
   }),
   withRouter,
   withAuthRedirectComponent,
   React.memo,
)(ProfileContainer);
