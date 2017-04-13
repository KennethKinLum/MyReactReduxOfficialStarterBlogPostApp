import React from "react";
import { Route, IndexRoute } from "react-router-dom";

import App from "./App";
import PostsIndex from "./containers/posts-index";
// import PostsNew from "./components/posts-new";
// import PostsShow from "./components/posts-show"

// const Greeting = () => {
//   return (
//     <div>Hello!</div>
//   );
// };

export default (
  <Route exact path="/" component={App} />
);
