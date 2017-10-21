import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Cart.css';
// import NewCart from './NewCart.js'
import Footer from '../Footer/Footer';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartTotal: 0
    }    
  }

  componentDidMount(){
    var cartTotal = this.props.cart.reduce((total, {price}) => total + price, 0);
    console.log(cartTotal)
    this.setState({
      cartTotal: cartTotal
    })
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
        {/* <NewCart cartData={this.props.cart}/> */}
        <div className='cart_main_section'>
          <div className="cart_container">
            <div className="title">
              <div>CART</div>
            </div>
            <div className="cart_content">
              {this.props.cart.map((item, i) => {
                return <div key={i} className='puzzle-container'>
                  <div><img src={item.img} alt='' /></div>
                  <div>{item.brand} - {item.pieces} PC</div>
                  <div className='name_style'>{item.name}</div>
                  <div>${item.price}</div>
                </div>
              })}
            </div>
          </div>
          <div className='checkout_container'>
            <div className='checkout'>
              <div className='total'>Total: ${this.state.cartTotal}</div>
              <StripeCheckout
                token={this.onToken}
                stripeKey='pk_test_gel2AzWEIutWSftyfAb0xCa3'
                amount={this.state.cartTotal * 100}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div >
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

// this.getCartTotal = this.getCartTotal.bind(this);

// getCartTotal() {
  //   var cartTotal = this.props.cart.reduce((total, {price}) => total + price, 0);
  //   console.log(cartTotal)
  //   this.setState({
  //     cartTotal: cartTotal
  //   })
  // }