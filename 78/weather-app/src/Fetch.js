import React, { Component } from 'react';
import Form from './Form';
import Google from './Google';

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.setZip = this.setZip.bind(this);
    }
    state = {
        zip: '',
        berko: 'good',
        weatherData: {
            name: '',
            description: '',
            temp: '',
        },
        coord: {
            lat: '',
            lng: ''
        }
    }
    // componentDidMount() {
    //     //console.log(this.props.getWeather);

    //     this.getData();
    // }
    getData = (input, weatherInput) => {
        let newData = {};
        let newCoord = {};
        console.log('in getdata', weatherInput);

        let weatherType = weatherInput ? weatherInput : 'imperial';
        let zip = input ? input : '08701';
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${weatherType}&APPID=b6a9e1ebdce0d01a382553d44d3d8765`
        )//586ab1b1db83dba0a022d36e15c26ff9   //cb7c71219cf09eb0bb414b932669be97
            // .then(response => {
            //     if(response.ok) return response.json();
            //     throw new Error('no good');})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                newData.name = data.name;
                newData.description = data.weather[0].description;
                newData.temp = data.main.temp;
                newCoord.lat = data.coord.lat;
                newCoord.lng = data.coord.lon;
                this.setState({ weatherData: newData, coord: newCoord })
            });
    }

    setZip(input, weatherInput) {
        console.log('weatherInput', weatherInput);
        this.setState({ zip: input });
        this.setState({ berko: 'bad' });
        this.getData(input, weatherInput);
    }

    call = (input, weatherInput) => {

    }

    render() {
        return (
            <>
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand mb-0 h1">Weather App</span>
                        <Form captureInput={this.setZip} call={this.call}></Form>
                    </nav>
                    <div className="popup">
                        <p>{this.state.weatherData.name}</p>
                        <p>{this.state.weatherData.description}</p>
                        <p>{this.state.weatherData.temp}</p>
                    </div>

                </div>
                <div className="container">
                    <Google coords={this.state.coord}></Google>
                </div>
            </>
        );
    }
}
// humidity: 78
// pressure: 1011
// temp: 291.68
// temp_max: 293.75
// temp_min: 289.25
export default Fetch;