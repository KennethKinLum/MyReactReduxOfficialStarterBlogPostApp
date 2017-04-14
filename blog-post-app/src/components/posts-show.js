import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost, clearPost } from "../actions/index";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentWillMount() {
    console.log("PostsShow mounting", this.props.match.params.id);
    this.props.fetchPost(this.props.match.params.id);
  }

  componentWillUnmount() {
    console.log("PostsShow unmounting");
    this.props.clearPost();
  }

  // static contextTypes = {
  //   router: PropTypes.object
  // }

  handleUserDelete() {
    this.props.deletePost(this.props.match.params.id)
      .then(() => {
        // the post has been deleted successfully
        // now route back to index
        this.props.history.push("/");
      });
  }

  render() {
    const { post } = this.props;

    console.log("POST IS", post)
    if (!post) {
      return (
        <div>
          <Link to="/">
            Back to Index
          </Link>
          <p>Loading...</p>
        </div>
      );
    } else return (
      <div>
        <Link to="/">
          Back to Index
        </Link>
        <button className="btn btn-danger float-sm-right" onClick={this.handleUserDelete.bind(this)}>
          Delete Post
        </button>
        <article>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        </article>

      </div>
    );
  }

}



function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    post: state.post
  }
}


export default connect(mapStateToProps, { fetchPost, deletePost, clearPost })(PostsShow);
