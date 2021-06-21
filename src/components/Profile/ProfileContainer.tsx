import React from 'react';
import {Profile} from "./Profile";
import axios, {AxiosResponse} from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then((response: AxiosResponse<UserProfileType>) => {
            this.props.setUserProfileAC(response.data);
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
