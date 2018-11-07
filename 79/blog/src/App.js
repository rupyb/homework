import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import Posts from './Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.getUsers('users','users');
    this.state = {
      users: [],
      posts: [],
      bloggerId: ''
    };
  }
  
  getUsers = async (element, address) => {
    let data;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${address}`)
      if (!response.ok) {
        const error = new Error('OOPS');
        error.response = response;
        throw error;
      }
      data = await response.json();
      this.setState({
        [`${element}`]: data
      });
    } catch (error) {
      this.setState({
        error: error.response ? 'Unknown'
          : 'Unable to comply'
      })
    }
  }

  handleUserClick = (e, key) => {
    e.preventDefault();
    console.log(key);
    //const posts = this.getPosts(`posts?userId=${key}`);
    this.getUsers('posts',`posts?userId=${key}`);
    //console.log(posts);
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Blog App</span>
        </nav>
        <div className="row">
          <div className="col-md-4">
            <div className="list-group">
              <Users getUsers={this.state.users} handleUserClick={this.handleUserClick}></Users>
            </div>
          </div>
          <div className="col-md-8">
            <div className="list-group">
              <Posts getPosts={this.state.posts} handlePostClick={this.handleUserClick}></Posts>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
