import React, { Component } from 'react';
import Data from './Data'

class RecipeItem extends Component {
    render() {
        const { name, id, text, ingredients, directions, image } = Data[this.props.match.params.id - 1];
        return (<>
            <div className="row">
                <div className="col-md-4">
                    <h1>{name}</h1>
                    
                    <img style={{ height: "200px" }} src={image} alt={name}></img>
                    <h2>{text}</h2>
                </div>
                <div className="col-md-8">
                    <p>{ingredients}</p>
                    <p>{directions}</p>
                </div>
            </div>
        </>);
    }
}

export default RecipeItem;