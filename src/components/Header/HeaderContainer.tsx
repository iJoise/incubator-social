import React from "react";
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<TProps> {

   componentDidMount() {
      this.props.getAuthUserData();
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

const connector = connect(mapStateToProps, {getAuthUserData});

type TProps = ConnectedProps<typeof connector>;
export default connector(HeaderContainer);


