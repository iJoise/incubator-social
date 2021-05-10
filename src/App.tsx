import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
   state: RootStateType
}


const App:React.FC<AppPropsType> = ({state}) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <main className="app-wrapper-content">
               <Route path="/dialogs" render={() => <Dialogs dialogs={state.dailogsPage.dialogs}
                                                             messages={state.dailogsPage.messages}/>}/>
               <Route path="/profile" render={() => <Profile posts={state.profilePage.posts}/>}/>
               <Route path="/news" render={() => <News/>}/>
               <Route path="/music" render={() => <Music/>}/>
               <Route path="/settings" render={() => <Settings/>}/>
            </main>
         </div>
      </BrowserRouter>
   );
};


export default App;


