import React from "react";
import { Route, IndexRoute } from "react-router-dom";

import App from "./App";
import PostsIndex from "./components/posts-index";
// import PostsNew from "./components/posts-new";
// import PostsShow from "./components/posts-show"

// const Greeting = () => {
//   return (
//     <div>Hello!</div>
//   );
// };

const Greeting = () => {
  return <div>Greeting</div>;
}
const Greeting2 = () => {
  return <div>Greeting2</div>;
}

export default (

  <App>
      <Route exact={true} path="/" component={PostsIndex} />
      <Route path="/greet" component={Greeting} />
      <Route path="/greet2" component={Greeting2} />
  </App>

);
