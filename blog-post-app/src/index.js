import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from "./routes";
import ReduxPromise from "redux-promise";
import reducers from "./reducers/index";
// import reducers from './reducers';

import App from './App';
import PostsIndex from "./components/posts-index";
import PostsNew from "./components/posts-new.js";
import PostsShow from "./components/posts-show";
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// <Match exactly pattern="/" component={PostsIndex} />
// <Match pattern="/posts/new" component={PostsNew} />
// <Match pattern="/posts/:id" component={PostsIndex} />
ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <App>
          <Switch>
          <Route exact={true} path="/" component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          </Switch>
        </App>
      </Router>
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
