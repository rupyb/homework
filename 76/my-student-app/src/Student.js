import React, { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.name = 'Registrar';
        this.state = {
            firstName: props.firstName,
            address: props.address
        };

    }

    render() {
        return (
            <div>
                <h1>{this.name}</h1>
                <h2>{this.state.firstName}</h2>
                <h3>{this.state.address}</h3>
            </div>
        );
    }
}

export default Student;