import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
componentDidMount() {
  if (!this.props.post) {
    const { id } = this.props.match.params; // from react-router. params property contains all wildcard values in url
    this.props.fetchPost(id);
  }
}

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  // ownProps are the props that are going to be accepted by this component (this.props === ownProps). Our component will only receive one post and not the whole list of posts
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
