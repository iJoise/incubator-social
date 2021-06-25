import React from "react";
import Header from "./Header";
import {AuthAPIType, setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component<TProps> {

   componentDidMount() {

      usersAPI.me()
         .then((data: AuthAPIType) => {
            if (data.resultCode === 0) {
               const {email, id, login} = data.data
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


