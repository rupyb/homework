import React, { Component } from 'react';

class Baking extends Component {
    key = 1;
    printDirections = () => {
        console.log('this.props.item', this.props.item);
        console.log('this.props.item.directions', this.props.item.directions);
        
        if (this.props.item.directions) {
           // console.log('this.props.item.directions', this.props.item.directions);
            
            return this.props.item.directions.map((item) => {
                return <li key={this.key++}>{item}</li>;
            });
        }
    };

    render() {
        return (
            <div className="directions">
                <ul>{this.printDirections()}</ul>
            </div>
        );
    }
}
  
  export default Baking;