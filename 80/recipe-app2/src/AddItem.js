import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class AddItem extends Component {
    state = {  }
    addButton = () => {
        const Button = () => (
            <Route render={({ history}) => (
              <button className="btn btn-primary"
                type='button'
                onClick={() => { history.push('/addbutton') }}
              >
                Add Recipe
              </button>
            )} />
          )
          return <Button />
    }

    render() { 
        return (
            <> 
                {this.addButton()} 
            </>
            );
    }
}
 
export default AddItem;