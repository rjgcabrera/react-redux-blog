import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

// shortcut to wiring up action creator (rather than defining mapDispatchToProps()). one example to use separate fns: if you want to do some computation on how you want to call the action reactor
export default connect(null, { fetchPosts })(PostsIndex);
