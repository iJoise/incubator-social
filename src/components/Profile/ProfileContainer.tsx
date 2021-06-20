import React from 'react';
import {Profile} from "./Profile";
import axios, {AxiosResponse} from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component<TProps> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then((response: AxiosResponse<UserProfileType>) => {
            this.props.setUserProfileAC(response.data)
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

const connector = connect(mapStateToProps, {
   setUserProfileAC
})

type TProps = ConnectedProps<typeof connector>;
export default connector(ProfileContainer);

