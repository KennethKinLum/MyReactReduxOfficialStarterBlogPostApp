import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  allPosts() {
    // return (
    //   <li>hm</li>
    // )
    console.log("this.props.posts", this.props.posts)
    return this.props.posts.map((post) => {
      return (
        <li key={post.id}>{post.title}</li>
      );
    })
  }


  render() {
    if (!this.props.posts || this.props.posts.length === 0) {
      return <div></div>;
    }

    return (
      <ul>
        {this.allPosts()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
