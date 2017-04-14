import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsIndex from "./components/posts-index";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Blog Post App, built with React / Redux</h1>
          {this.props.children}
      </div>
    );
  }
}

// export default App;
