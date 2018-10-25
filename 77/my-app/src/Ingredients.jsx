import React, { Component } from 'react';
import Baking from './Baking';

class Ingredients extends Component {
key = 1;
    printIngredients = () => {

        if (this.props.item.ingredients) {
            return this.props.item.ingredients.map((item) => {
                return <li key={this.key++}>{item}</li>;
            });
        }
    };

    render() {
        return (
            <div className="ingredients">
                <ul>{this.printIngredients()}</ul>
                <Baking item={this.props.item}/>
            </div>
        );
    }
}

export default Ingredients;