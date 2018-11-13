import React, { Component } from 'react';
import Data from './Data';
import ForwardPage from './ForwardPage';

class NewButton extends Component {
    state = {
        ingredientAmount: 0,
        directionsAmount: 0,
        id: '',
        name: '',
        text: '',
        directions: [],
        ingredients: [],
        image: ''
    }

    setUpIngredientForm = () => {
        const theSelect = document.querySelector('#theSelectedIngredient');

        const selected = theSelect.options[theSelect.selectedIndex].value;
        this.setState({
            ingredientAmount: selected
        })
    }

    makeIngredientList() {
        return <div style={{ margin: "5px auto" }}><input className="form-control ingredients" placeholder="Add Ingredient" /></div>
    }

    renderIngredientList() {
        let List = [];
        for (let i = 0; i < this.state.ingredientAmount; i++) {
            List.push(this.makeIngredientList());
        }
        return List;
    }

    setUpDirectionsForm = () => {
        const theSelect = document.querySelector('#theSelectedDirections');

        const selected = theSelect.options[theSelect.selectedIndex].value;
        this.setState({
            directionsAmount: selected
        })

    }

    makeDirectionsList() {
        return <div style={{ marginBottom: "5px" }}><input className="form-control directions"
            placeholder="Add Directions" /></div>
    }

    renderDirectionsList() {
        let List = [];
        for (let i = 0; i < this.state.directionsAmount; i++) {
            List.push(this.makeDirectionsList());
        }
        return List;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            
                [name]: value
            
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const ingredients = Array.from(document.querySelectorAll('.ingredients')).map((element) => {
            return element.value;
        });
        const directions = Array.from(document.querySelectorAll('.directions')).map((element) => {
            return element.value;
        });
        this.setState({
                ingredients: ingredients,
                directions: directions,
                id: Data[Data.length - 1].id + 1
            
        }, this.pushData);


    }

    pushData() {
        const obj = {
             name:  this.state.name,
             id: this.state.id,
             text:  this.state.text,
             ingredients: this.state.ingredients,
             directions:  this.state.directions,
             image: this.state.image,
            };
        Data.push(obj);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeName">Recipe Name</label>
                        <input className="form-control" id="recipeName" name="name"
                            placeholder="Recipe Name" value={this.state.name}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="text">Brief Description</label>
                        <input className="form-control" id="text" name="text"
                            placeholder="Brief Description" value={this.state.text}
                            onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <select id="theSelectedIngredient" className="custom-select " onClick={this.setUpIngredientForm}>
                            <option>Select Number of Ingredients</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                            <option value="9">Nine</option>
                        </select>
                        {this.renderIngredientList()}
                    </div>

                    <div className="form-group col-md-6 ">
                        <select id="theSelectedDirections" className="custom-select " onClick={this.setUpDirectionsForm}>
                            <option>Select Number of Directions</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                            <option value="9">Nine</option>
                        </select>
                        {this.renderDirectionsList()}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeName">Enter Image Url</label>
                        <input className="form-control" id="image" name="image"
                            placeholder="Image Url" value={this.state.image}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group col-md-6 ">

                    </div>
                </div>
                <ForwardPage></ForwardPage>
            </form>
        );
    }
}

export default NewButton;