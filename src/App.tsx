import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
   state: RootStateType
   pushNewPostInState: (newPost: string) => void
}


const App: React.FC<AppPropsType> = ({state, pushNewPostInState}) => {
   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar friends={state.sidebar.friends}/>
         <main className="app-wrapper-content">
            <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                          messages={state.dialogsPage.messages}/>}/>
            <Route path="/profile" render={() => <Profile posts={state.profilePage.posts}
                                                          pushNewPostInState={pushNewPostInState}/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
         </main>
      </div>
   );
};


export default App;


