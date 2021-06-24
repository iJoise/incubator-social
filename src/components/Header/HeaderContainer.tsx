import React from "react";
import Header from "./Header";
import axios, {AxiosResponse} from "axios";
import {AuthAPIType, setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<TProps> {

   componentDidMount() {

      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then((response: AxiosResponse<AuthAPIType>) => {
            console.log(response.data);
            if (response.data.resultCode === 0) {
               const {email, id, login} = response.data.data
               this.props.setAuthUserDataAC(id, email, login);
            }
         });
   }
   render() {
      return (
         <Header
            {...this.props}
            login={this.props.login}
            isAuth={this.props.isAuth}
         />
      )
   }
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

const connector = connect(mapStateToProps, {setAuthUserDataAC});

type TProps = ConnectedProps<typeof connector>;
export default connector(HeaderContainer);


