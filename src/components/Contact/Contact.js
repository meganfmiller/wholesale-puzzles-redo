import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Header />
                <Nav />
                <div className='c_main_section'>
                    <div className='white_container'>
                        <div>Contact</div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;