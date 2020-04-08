import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ResumeHeader from './js/ResumeHeader';
import About from './js/About'
import Profile from './js/Profile'
import ResumeFooter from './js/ResumeFooter'

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <ResumeHeader />
                <About />
                <Profile />
                <ResumeFooter/>
            </div>
        );

    }
}

export default App;