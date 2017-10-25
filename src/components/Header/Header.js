import React, { Component } from 'react';
// import missing_piece from '../../images/missing_piece2.jpg';
import './Header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import {getUserInfo} from '../../ducks/reducer';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            userId: null
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    handleLogin() {
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
        return this.props.user.id ?
            <div className="header" style={style}>
                <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
                <div className='user'>Welcome, {this.props.user.user_name}!</div>
                <Link to='/cart'><img className="cart" src={cart} alt='cart' /></Link>
                <div className='cart_counter'>( {this.props.cart.length} )</div>
                <div className="logout">
                    {<a href='http://localhost:3001/auth/logout'><div>LOGOUT</div></a>}
                    <Link to='/about'><div>ABOUT</div></Link>
                    <Link to='/contact'><div>CONTACT</div></Link>
                </div>
                {/* <img className='hero' src={missing_piece} alt='missing piece' /> */}
            </div> :
            <div className="header" style={style}>
                <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
                <Link to='/cart'><img className="cart" src={cart} alt='cart' /></Link>
                <div className='cart_counter'>( {this.props.cart.length} )</div>
                <div className="utilities">
                    {<a href={process.env.REACT_APP_LOGIN}><div>LOG IN / SIGN UP</div></a>}
                    <Link to='/about'><div>ABOUT</div></Link>
                    <Link to='/contact'><div>CONTACT</div></Link>
                </div>
                {/* <img className='hero' src={missing_piece} alt='missing piece' /> */}
            </div>
    }

    render(props) {

        // console.log(this.props.user)
        return (

            <div>
                {this.handleLogin()}
            </div>

        );
    }
}

function mapStateToProps(state) {
    // console.log(state.cart)
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(Header);





// <div className="header" style={style}>
            //     <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
            //     <Link to='/cart'><img className="cart" src={cart} alt='cart' /></Link>
            //     <div className='cart_counter'>( {this.props.cart.length} )</div>
            //     <div className="utilities">
            //         {<a href={process.env.REACT_APP_LOGIN}><div>LOG IN / SIGN UP</div></a>}
            //         <Link to='/about'><div>ABOUT</div></Link>
            //         <Link to='/contact'><div>CONTACT</div></Link>
            //     </div>
            //     {/* <img className='hero' src={missing_piece} alt='missing piece' /> */}
            // </div>