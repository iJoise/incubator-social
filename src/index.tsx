import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            store={store}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
}

renderEntireTree();
store.subscriber(renderEntireTree);