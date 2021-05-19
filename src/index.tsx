import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import {state, changeNewPostInState, pushNewPostInState, subscriber} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} pushNewPostInState={pushNewPostInState} changeNewPostInState={changeNewPostInState}/>
      </BrowserRouter>,
      document.getElementById('root')
   );
}

renderEntireTree();
subscriber(renderEntireTree);