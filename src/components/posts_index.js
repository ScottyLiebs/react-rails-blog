import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

import { Header, Icon } from 'semantic-ui-react';
import '../styles/post_index.css';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div key={post.id}>
          <div className="header">
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </div>
          <div className="description">{post.content}</div>
          <br />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui center aligned container">
          <div className="ui huge header"><em>React & Rails</em> Blog</div>
          <Link className="ui button primary" to="/posts/new">
            New Post
          </Link>
          <Header as='h2' icon textAlign='center'>
            <Icon name='laptop' circular />
          </Header>
          <br />
          <div className="ui horizontal divider">
            All Posts
          </div>
          <div>
            <div role="list" className="ui list">
              {this.renderPosts().reverse()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
