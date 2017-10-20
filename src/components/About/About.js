import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Header />
                <Nav />
                <div className='a_main_section'>
                    <div className='white_container'>
                        <div>About</div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;