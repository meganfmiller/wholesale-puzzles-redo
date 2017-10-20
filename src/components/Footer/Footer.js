import React, { Component } from 'react';
import './Footer.css';
import black_logo from './../../images/logo_white.png';
import facebook from './../../images/facebook.png';
import twitter from './../../images/twitter.png';
import instagram from './../../images/instagram.png';

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='line'></div>
                <div className='footer_content'>
                    <div className='logo_box'>
                        <img src={black_logo} />
                    </div>
                    <div>
                        <div className='copyright'>TERMS OF USE | PRIVACY POLICY</div>
                        <div className='copyright'>© 2017 WHOLESALE PUZZLES | ALL RIGHTS RESERVED</div>
                    </div>
                    <div className='icons'>
                        <img src={facebook} />
                        <img src={twitter} />
                        <img src={instagram} />
                    </div>
                </div>
                <div className='bottom_line'></div>
            </div>
        )
    }
}

export default Footer