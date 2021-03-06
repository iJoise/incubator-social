import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMyPhoto} from "../../redux/profile-reducer";


class HeaderContainer extends React.Component<TProps> {

   shouldComponentUpdate(nextProps: Readonly<TProps>, nextState: Readonly<{}>): boolean {
      return nextProps !== this.props || nextState !== this.state;
   }

   componentDidMount() {
      const userId = '17599';
      this.props.getMyPhoto(+userId);
   }


   render() {
      return (
         <Header
            {...this.props}
            login={this.props.login}
            isAuth={this.props.isAuth}
            photoUser={this.props.photoUser}
         />
      )
   }
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   photoUser: state.profilePage.photos
})

const connector = connect(mapStateToProps, {
   getMyPhoto,
   logout,
});

type TProps = ConnectedProps<typeof connector>;
export default connector(HeaderContainer);


