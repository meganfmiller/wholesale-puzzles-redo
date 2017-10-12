import React, { Component } from 'react';
import missing_piece from '../../images/missing_piece2.jpg';
import './Header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        var style;

        if (this.props.tall) {
            style = {
                'height': '83.5vh'
            }
        } else {
            style = {
                'height': '58.5vh'
            }
        }

        

        return (

            <div className="header" style={style}>
                <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
                <Link to='/cart'><img className="cart" src={cart} alt='cart' /></Link>
                <div className="utilities">
                    {<a href={process.env.REACT_APP_LOGIN}><div>LOG IN / SIGN UP</div></a>}
                    <Link to='/about'><div>ABOUT</div></Link>
                    <Link to='/contact'><div>CONTACT</div></Link>
                </div>
                {/* <div className="dark_box"></div> */}
                <img className='hero' src={missing_piece} alt='missing piece' />
            </div>

        );
    }
}

export default Header;

