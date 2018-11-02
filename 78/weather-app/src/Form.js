import React, { Component } from 'react';

class Form extends Component {
    state = {
        searchInput: '',
        weatherType: 'imperial'
    }
    checkZip = () => {
        // console.log(this.state.searchInput);
        this.setState({ searchInput: this._newText.value});
        console.log(this.state.searchInput);
    }

    setType = () => {
        //console.log('this._newSelected', this._newSelected.value);
        this.setState({ weatherType: this._newSelected.value});
    }
    renderClick = (event) => {
        event.preventDefault();
        console.log('this.props.captureInput(this.state.searchInput, this.state.weatherType);',this.state.searchInput,this.state.weatherType);
        this.props.captureInput(this.state.searchInput, this.state.weatherType);
        console.log('this.props.captureInput(this.state.searchInput, this.state.weatherType);',this.state.searchInput,this.state.weatherType);
        
        //this.props.call(this.state.searchInput);
    }

    render() {
        return ( 
        <>
            <form className="form-inline">
                <input ref={ input => this._newText = input }  
                    onChange={ this.checkZip }className="form-control mr-sm-2" 
                    type="search" placeholder="Search" aria-label="Enter Zip Code"/>
                <select ref={ input => this._newSelected = input }  
                        onChange={ this.setType} className="form-control mr-sm-2">
                            <option value="imperial">Farenheit</option>
                            <option value="metric">Celsius</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                <button onClick={ this.renderClick }className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
        {/* <h1>{ this.state.searchInput}</h1> */}
      </>
      );
    }
}

export default Form;