import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsIndex from "./components/posts-index";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Blog App</h1>
        <PostsIndex />
      </div>
    );
  }
}

export default App;
