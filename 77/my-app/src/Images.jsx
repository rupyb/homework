import React, { Component } from 'react';

class Images extends Component {

    render() {
      if(this.props.item) {
        return (
            <div className="images">
           <img src={this.props.item.image} alt={this.props.item.name}></img>
            </div>
          );
      }  
      
    }
  }
  
  export default Images;