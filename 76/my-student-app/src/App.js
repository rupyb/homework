import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Student firstName="John" address="123 Main street"/>
       <Student firstName="Jane" address="456 North street"/>
      </div>
    );
  }
}

export default App;
