import React, { Component } from 'react';
import Data from './Data';
import AddItem from './AddItem';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    getOptions = ()=> {
        return (Data.map((item, index) => (
            <option key={item.id} value={item.id}>{item.name}</option>
        )))
    }

    setUpSelect = () => {
        const Select = withRouter(({ history }) => {
            
            return (
                <select className="btn btn-primary" id="theSelect"
                  onClick={() => { 
                    const theSelect = document.querySelector('#theSelect');
                    const selected = theSelect.options[theSelect.selectedIndex].value;
                    if(selected > 0 )  return selected && history.push(`/recipe/${selected}`) }}>
                   
                     
                  <option value="0">Select a Recipe</option>
                  {this.getOptions()}
                  </select>
              )
        })
        return <Select/>;
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1"><Link to={'/home'}>Recipe App</Link></span>
                    <AddItem />
                    {this.setUpSelect()}
                </nav>
            </div>
        )

    }
}


export default Header;    