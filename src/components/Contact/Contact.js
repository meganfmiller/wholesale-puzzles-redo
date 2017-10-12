import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Header />
                <Nav />
                <div className='main_section'>
                    Contact
                </div>
            </div>
        );
    }
}

export default Contact;