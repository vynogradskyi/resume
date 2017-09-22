import React, {Component} from 'react';
import logo from './logo.svg';
import styles from 'assets/styles/style.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import banner from 'views/banner';
import hr from 'views/hr-view';
import presentational from 'views/presentation-view';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={banner}/>
                    <Route path="/hr-view" component={hr}/>
                    <Route path="/presentational-view" component={presentational}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
