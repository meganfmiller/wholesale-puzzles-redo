import React, { Component } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Cart.css';
// import NewCart from './NewCart.js'
import Footer from '../Footer/Footer';
import trashcan from '../../images/delete.svg';
import logo_circle from '../../images/logo_circle.png';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { removeFromCart } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartTotal: 0,
      quantity: 1
    }

    this.updateTotal = this.updateTotal.bind(this);
    this.handleQuantityBackward = this.handleQuantityBackward.bind(this);
    this.handleQuantityForward = this.handleQuantityForward.bind(this);
  }

  componentDidMount() {
    var cartTotal = this.props.cart.reduce((total, { price }) => total + price, 0);
    this.setState({
      cartTotal: cartTotal
    })
  }

  updateTotal() {
    var cartTotal = this.props.cart.reduce((total, { price }) => total + price, 0);
    this.setState({
      cartTotal: cartTotal
    })
  }

  handleQuantityForward() {
    var newQuantity = this.state.quantity += 1;
    var newCart = newQuantity + this.state.cartTotal;
    this.setState({
        quantity: newQuantity,
        cartTotal: newCart
    })
}

handleQuantityBackward() {
    var newQuantity;
    this.state.quantity > 1 ? newQuantity = this.state.quantity -= 1 : newQuantity = 1;
    var newCart = newQuantity - this.state.cartTotal;
    this.setState({
        quantity: newQuantity,
        cartTotal: newCart
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
    console.log('cartTotal', this.state.cartTotal)
    return (
      <div className="Cart">
        <Header />
        <Nav />
        {this.props.cart.length === 0 ? <div className='empty_cart'>Your cart is empty. Go buy something!</div> : <div className='cart_main_section'>
          <div className="cart_container">
            <div className="title">
              <div>CART</div>
            </div>
            <div className="cart_content">
              <div className='category_headers'>
                <div className='image_pos'>IMAGE</div>
                <div className='name_pos'>NAME</div>
                <div className='pieces_pos'>PIECES</div>
                <div className='brand_pos'>BRAND</div>
                {/* <div className='quantity_pos'>QUANTITY</div> */}
                <div className='price_pos'>PRICE</div>
                <div className='remove_pos'>REMOVE</div>
              </div>
              <div className='cart_line'></div>
              {this.props.cart.map((item, i) => {
                return <div key={i} className='c_puzzle-container'>
                  <div className='image_pos'><img src={item.img} alt='' /></div>
                  <div className='name_pos'>{item.name}</div>
                  {item.accessory === true ? <div className='pieces_pos'>N/A</div> : <div className='pieces_pos'>{item.pieces} PC</div>}
                  <div className='brand_pos'>{item.brand}</div>
                  {/* <div className='quantity quantity_pos'>
                    <button onClick={() => this.handleQuantityBackward()}>▼</button>
                    <div>{this.state.quantity}</div>
                    <button onClick={() => this.handleQuantityForward()}>▲</button>
                  </div> */}
                  <div className='price_pos'>${item.price * this.state.quantity}</div>
                  <div className='remove_pos'><img className='trashcan' alt='' src={trashcan} onClick={() => {
                    this.props.removeFromCart(i);
                    setTimeout(() => {
                      this.updateTotal()
                    }, 0)
                  }} /></div>
                </div>
              })}
            </div>
          </div>
          <div className='checkout_container'>
            <div className='checkout'>
              <div className='total'>» Total: ${this.state.cartTotal.toFixed(2)}</div>
              <StripeCheckout
                token={this.onToken}
                stripeKey='pk_test_gel2AzWEIutWSftyfAb0xCa3'
                amount={this.state.cartTotal.toFixed(2) * 100}
                image={logo_circle}
                name='Checkout'
              />
            </div>
          </div>
        </div>}

        <Footer />
      </div >
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    cart: state.cart,
    product: state.product
  }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);



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