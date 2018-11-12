import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Data from './Data';


class App extends Component {
  state = {
    recipeItem: Data,
    selected: {}
  };
  listRecipes = function (list) {
    return list.map(item => <div className="col-md-3"><Link to={{pathname:`/recipe/${item.id}`, 
    state: item
  }} key={item.id}><figure style={{ display: 'inlineBlock'}}><img src={item.image} height="150px" alt={item.name}></img><figcaption>{item.name}</figcaption></figure></Link></div>);
   
  }

 
  render() {
    return (
      <>
      <div className="container">
      <div className="App">
        <header >
          <h1>Recipes</h1>

       
        </header>
        <div className="row">
        
        {this.listRecipes(this.state.recipeItem)}</div>
      </div>
      </div>
      </>
    );
  }
}

export default App;
