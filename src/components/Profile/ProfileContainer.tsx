import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamType = {
   userId: string
}

type MapStateToPropsType = {
   profile: UserProfileType | null
   isAuth: boolean
}

type MapDispatchToPropsType = {
   getUserProfile: (userId: number) => void
}

type PropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId  = this.props.match.params.userId;
      !userId && (userId = '17599');
      this.props.getUserProfile(+userId);
   }

   render() {

      if (!this.props.isAuth) return <Redirect to={'/login'}/>


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
   isAuth: state.auth.isAuth,
})


export default withRouter(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,{getUserProfile})(ProfileContainer));
