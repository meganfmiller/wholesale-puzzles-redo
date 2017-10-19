import React, { Component } from 'react';

import './Cart.css';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


export default class NewCart extends Component {
  


    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
          alert('we are in business')
        });
      }
  render(){
      return(
        <div className='main_section'>          
          <div className='white_container'>
          <div>CART</div>
            <div className="product_content">
              <div className='puzzle-container'>
                <div><img src={this.props.cartData.img} alt='' /></div>
                <div>{this.props.cartData.brand} - {this.props.cartData.pieces} PC</div>
                <div className='name_style'>{this.props.cartData.name}</div>
                <div>${this.props.cartData.price}</div>
              </div>
            </div>
            </div>
            <StripeCheckout
              token={this.onToken}
              stripeKey='pk_test_gel2AzWEIutWSftyfAb0xCa3'
              amount={2000}
            />
          
         </div>
      )
  }
}