import React from 'react';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Link,Redirect} from "react-router-dom";
import Home from './js/Home';
import ML from "./blog/ml";

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/ml' component={ML} />
                        <Redirect to='/home'/>
                    </Switch>
                </Router>
            </div>
        );

    }
}

export default App;