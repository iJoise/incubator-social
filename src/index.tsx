import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {AppStateType, store} from './redux/redux-store';

console.log(store.getState())
const renderEntireTree = (state: AppStateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={state}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

renderEntireTree(store.getState());

store.subscribe(() => {
   const state = store.getState();
   renderEntireTree(state);
});