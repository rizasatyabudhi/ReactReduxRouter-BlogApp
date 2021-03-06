import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  // The data will be fetched after the component is rendered
  componentDidMount() {
    this.props.fetchPosts();
  }

  // function to render lists of props
  // we use lodash because es6 array helper map cannot map an object
  // this.props.posts is an object
  renderPosts() {
    return _.map(this.props.posts, post => (
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
      ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
           Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
