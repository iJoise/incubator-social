import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";


export const App = () => {
   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <main className="app-wrapper-content">
            <Switch>
               <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
               <Route path="/dialogs" render={() => <Dialogs/>}/>
               <Route path="/profile" render={() => <Profile/>}/>
               <Route path="/users" render={() => <UsersContainer/>}/>
               <Route path="/news" render={() => <News/>}/>
               <Route path="/music" render={() => <Music/>}/>
               <Route path="/settings" render={() => <Settings/>}/>
            </Switch>
         </main>
      </div>
   );
};





