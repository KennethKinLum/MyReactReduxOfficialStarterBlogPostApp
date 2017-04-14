import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router-dom";

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

        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>
            <span>{post.title}</span>
            <span className="text-sm-right">
              {post.categories}
            </span>
          </Link>
        </li>

      );
    })
  }


  render() {
    if (!this.props.posts || this.props.posts.length === 0) {
      return <div></div>;
    }

    return (
      <div>
        <div className="text-sm-right">
          <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
        </div>
        <h3>List of blog posts</h3>
        <ul className="list-group">
          {this.allPosts()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
