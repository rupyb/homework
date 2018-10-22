import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.name = 'Pcs Clock';
        this.state = {
            counter: new Date().toLocaleTimeString()
        };

        setInterval(() => this.setState({
            counter: new Date().toLocaleTimeString()
        }), 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.name}</h1>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}

export default Clock;