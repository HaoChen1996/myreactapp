import React from 'react';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Link,Redirect} from "react-router-dom";
import Home from './js/Home';
import MobileProject from "./blog/mobileProject";
import MachineLearning from "./blog/MachineLearning";
import Gcp from './blog/GCP';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/moblie' component={MobileProject} />
                        <Route path='/ml' component={MachineLearning}  />
                        <Route path='/gcp' component={Gcp}/>
                        <Redirect to='/home'/>
                    </Switch>
                </Router>
            </div>
        );

    }
}

export default App;