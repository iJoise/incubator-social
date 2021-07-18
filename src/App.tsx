import React, {Component} from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


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
                  <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                  <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                  <Route path="/users" render={() => <UsersContainer/>}/>
                  <Route path="/login" render={() => <Login/>}/>
                  <Route path="/news" render={() => <News/>}/>
                  <Route path="/music" render={() => <Music/>}/>
                  <Route path="/settings" render={() => <Settings/>}/>
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
