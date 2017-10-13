import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { getProduct, addtoCart } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Product.css';

class Product extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         cart: []
    //     }

    //     this.addtoCart = this.addtoCart.bind(this);
    // }


    componentDidMount() {
        // console.log(this.props.match.params.item)
        this.props.getProduct(this.props.match.params.item);
    }

    // addtoCart() {
    //     var addedItem = this.state.cart.push(this.props.product)
    //     this.setState({
    //         cart: addedItem
    //     })
    // }

    render() {
        // console.log(this.state.cart)
        // console.log(this.props.product)
        const { img, brand, pieces, name, price } = this.props.product
        return (
            <div className="Product">
                <Header />
                <Nav />
                <div className='main_section'>
                    <div className='white_container'>
                        <div className="product_content">
                            <div className='puzzle-container'>
                                <div><img src={img} alt='' /></div>
                                <div>{brand} - {pieces} PC</div>
                                <div className='name_style'>{name}</div>
                                <div>${price}</div>
                            </div>
                        </div>
                        <button className='addtocart_btn' onClick={() => this.props.addtoCart(this.props.product)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getProduct, addtoCart })(Product);