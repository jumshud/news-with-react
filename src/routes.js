import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import {CATEGORY, FAVORITES} from "./constants";
import CategoryNews from "./containers/news/CategoryNews";
import Home from "./containers/Home";
import Header from "./components/Header";
import FavoriteNews from "./containers/news/FavoriteNews";

class AllRoutes extends Component {

    render(){
        return (
            <Router history={this.props.history}>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path={FAVORITES} component={FavoriteNews} />
                        <Route exact path={CATEGORY} component={CategoryNews} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AllRoutes;


