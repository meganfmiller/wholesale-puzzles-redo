import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Header />
                <Nav />
                <div className='main_section'>
                    About
                </div>
            </div>
        );
    }
}

export default About;