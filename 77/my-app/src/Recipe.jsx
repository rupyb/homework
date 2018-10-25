import React, { Component } from 'react';
import Images from './Images';

class Recipe extends Component {

    render() {
      return (
        <div className="details">
        <p>{this.props.item.text}</p>
        <Images item={this.props.item}></Images>
        </div>
      );
    }
  }
  
  export default Recipe;