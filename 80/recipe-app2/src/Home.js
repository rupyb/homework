import React, { Component } from 'react';
import './index.css';
import Header from './Header';
import NewButton from './NewButton';
import RecipeItem from './RecipeItem';
import ThankYou from './ThankYou';
import App from './App';
import { Switch, Route, Redirect } from 'react-router-dom';

class Home extends Component {
   
    render() {
        return (
            <>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/home" component={App} />
                        <Route path="/home:food" component={App} />
                        <Route path="/recipe/:id" component={RecipeItem} />
                        <Route path="/addbutton" component={NewButton} />
                        <Route path="/submittedRecipe" component={ThankYou} />
                        <Redirect exact from="/" to="/home" />
                        <Route />
                    </Switch>
                </div>
            </>);
    }
}

export default Home;
