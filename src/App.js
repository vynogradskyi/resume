import React, {Component} from 'react';
import style from 'assets/styles/style.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import banner from 'views/banner';
import test from 'views/test';
import hr from 'views/hr-view';
import presentational from 'views/presentation-view';


class App extends Component {
    render() {
        return (
            <div className={style.container}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={banner}/>
                        <Route path="/hr-view" component={hr}/>
                        <Route path="/presentational-view" component={presentational}/>
                        <Route path="/test" component={test}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
