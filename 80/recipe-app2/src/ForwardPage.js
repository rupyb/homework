import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ForwardPage extends Component {


    setUpSelect = () => {
        const Select = withRouter(({ history }) => {
            return (
                <button type="submit" className="btn btn-primary"
                    onClick={() => {
                        
                        return history.push('/submittedRecipe')
                    }}>Submit</button>
            )
        })
        return <Select />;
    }

    render() {
        return (<>{this.setUpSelect()}</>)
    }
}

export default ForwardPage;