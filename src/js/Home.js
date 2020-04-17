import React from 'react';
import ResumeHeader from './ResumeHeader';
import About from './About'
import Profile from './Profile'
import ResumeFooter from './ResumeFooter'
import Contact from './Contact'

export default class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <ResumeHeader />
                <About />
                <Profile />
                <Contact/>
            </div>
        );
    }

}