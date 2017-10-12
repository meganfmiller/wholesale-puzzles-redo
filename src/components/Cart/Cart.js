import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Cart.css';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 10000
    }
  }

  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
      alert('we are in business')
    });
  }

  render() {
    return (
      <div className="Cart">
        <Header />
        <Nav />
        <div className='main_section'>
          <div>CART</div>
          <StripeCheckout
            token={this.onToken}
            stripeKey='pk_test_gel2AzWEIutWSftyfAb0xCa3'
            amount={this.state.total}
          />
        </div>
      </div>
    );
  }
}

export default Cart;