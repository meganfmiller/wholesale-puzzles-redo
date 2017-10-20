import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Cart.css';
import NewCart from './NewCart.js'
import Footer from '../Footer/Footer';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartTotal: 10000
    }

    // this.getCartTotal = this.getCartTotal.bind(this);
  }

  // getCartTotal() {
  //   var cartTotal = this.props.cart.reduce((total, {price}) => total + price, 0);
  //   console.log(cartTotal)
  //   this.setState({
  //     cartTotal: cartTotal
  //   })
  // }

  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
      alert('we are in business')
    });
  }

  render() {
    const { img, brand, pieces, name, price } = this.props.cart
    return (
      <div className="Cart">
        <Header />
        <Nav />
        <NewCart cartData={this.props.cart}/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);



// render() {
//   const { img, brand, pieces, name, price } = this.props.cart
//   return (
//     <div className="Cart">
//       <Header />
//       <Nav />
//       <div className='main_section'>          
//         <div className='white_container'>
//         <div>CART</div>
//           <div className="product_content">
//             <div className='puzzle-container'>
//               <div><img src={img} alt='' /></div>
//               <div>{brand} - {pieces} PC</div>
//               <div className='name_style'>{name}</div>
//               <div>${price}</div>
//             </div>
//           </div>