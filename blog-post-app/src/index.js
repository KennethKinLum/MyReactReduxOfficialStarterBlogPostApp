import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import ReduxPromise from "redux-promise";
import reducers from "./reducers/index";
// import reducers from './reducers';

import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  ),
  document.querySelector('#root')
);

// const createStoreWithMiddleware = applyMiddleware(
//   promise
// )(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.getElementById('root'));
