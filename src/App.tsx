import React, {Component} from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {WithSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import( './components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component<PropsType> {

   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <main className="app-wrapper-content">
               <Switch>
                  <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                  <Route path="/profile/:userId?" exact render={WithSuspense(ProfileContainer)}/>
                  <Route path="/users" render={WithSuspense(UsersContainer)}/>
                  <Route path="/login" render={() => <Login/>}/>
                  <Route path="/news" render={() => <News/>}/>
                  <Route path="/music" render={() => <Music/>}/>
                  <Route path="/settings" render={() => <Settings/>}/>
                  <Redirect to='/profile'/>
               </Switch>
            </main>
         </div>
      );
   }
}

const mapStateToProps = (state: AppStateType) => {
   return {
      initialized: state.app.initialized
   }
}

export default compose<React.ComponentType>(
   withRouter,
   connect(mapStateToProps, {initializeApp})
)(App);


type MapDispatchToPropsType = {
   initializeApp: () => void
}
type MapStateToPropsType = {
   initialized: boolean
}

type PropsType = & MapStateToPropsType & MapDispatchToPropsType
