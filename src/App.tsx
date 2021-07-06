import React from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export const App = () => {
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
};





