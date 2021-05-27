import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Redirect, Route, Switch} from "react-router-dom";
import {ActionType, StoreType} from "./redux/state";

type AppPropsType = {
   store: StoreType
   dispatch: (action: ActionType) => void
}


export const App: React.FC<AppPropsType> = ({store, dispatch}) => {
   const state = store.getState();
   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar friends={state.sidebar.friends}/>
         <main className="app-wrapper-content">
            <Switch>
               <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
               <Route path="/dialogs" render={() => <Dialogs dialogsPage={state.dialogsPage}
                                                             dispatch={dispatch}
               />}/>
               <Route path="/profile" render={() => <Profile posts={state.profilePage.posts}
                                                             newPostsText={state.profilePage.newPostsText}
                                                             dispatch={dispatch}
               />}/>
               <Route path="/news" render={() => <News/>}/>
               <Route path="/music" render={() => <Music/>}/>
               <Route path="/settings" render={() => <Settings/>}/>
            </Switch>
         </main>
      </div>
   );
};





