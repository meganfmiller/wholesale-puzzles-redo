import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProduct, addToCart } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import FixedCart from '../Cart/FixedCart';
import './Product.css';
import axios from 'axios';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            switch: false,
            quantity: 1
        }

        this.handleQuantityBackward = this.handleQuantityBackward.bind(this);
        this.handleQuantityForward = this.handleQuantityForward.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.item);
    }

    handleQuantityForward() {
        var newQuantity = this.state.quantity += 1;
        this.setState({
            quantity: newQuantity
        })
    }

    handleQuantityBackward() {
        var newQuantity;
        this.state.quantity > 1 ? newQuantity = this.state.quantity -= 1 : newQuantity = 1;
        this.setState({
            quantity: newQuantity
        })

    }

    addItemToDB(userId, puzzleId) {
        var item;
        item = axios.post('/api/cart', {userId, puzzleId})
            .then(response => {
                return response.data
            })
    }

    render() {
        // console.log(this.props.user)
        const { img, brand, pieces, name, price, size, description, original_price } = this.props.product
        return (
            <div className="Product">
                <Header />
                <Nav />
                <div className='p_main_section'>
                    <div className='white_container'>
                        <div className="product_content">
                            <div className='product_puzzle-container'>
                                <div><img src={img} alt='' /></div>
                                <div className='product_info'>
                                    <div className='product_info_top'>

                                        <div className='product_name_style'>{name}</div>

                                        <div className='product_brand_style'>{brand}</div>

                                        {this.props.product.sale === true ? <div className='price_box product_price_style'><div className='op'>${original_price}</div>${price}</div> : <div className='product_price_style'>${price}</div>}

                                        <div>
                                            <div className='bold'>NO. PIECES:</div>
                                            {this.props.product.accessory === true ? <div>N/A</div> : <div>{pieces}</div>}
                                        </div>

                                        <div>
                                            <div className='bold'>PIECE SIZE:</div>
                                            {this.props.product.large === true ? <div>LARGE</div> : this.props.product.accessory === true ? <div>N/A</div> : <div>NORMAL</div>}
                                        </div>

                                        <div>
                                            <div className='bold'>FINISHED SIZE:</div>
                                            <div>{size}</div>
                                        </div>

                                        <div>
                                            <div className='bold'>GIFT WRAPPING:</div>
                                            <div>OPTIONS AVAILABLE</div>
                                        </div>
                                    </div>
                                    <div className='product_info_bottom'>
                                        <div className='description'>
                                            <div className='bold'>DESCRIPTION:</div>
                                            <div>{description}</div>
                                        </div>

                                        <div className='quantity_container'>
                                            <div className='bold'>QUANTITY:</div>
                                            <div className='quantity'>
                                                <button onClick={() => this.handleQuantityBackward()}>▼</button>
                                                <div>{this.state.quantity}</div>
                                                <button onClick={() => this.handleQuantityForward()}>▲</button>
                                            </div>
                                        </div>

                                        <button className='addtocart_btn' onClick={() => {
                                            this.props.addToCart(this.props.user.id, this.props.product.id);
                                            {/* this.addItemToDB(this.props.user.id, this.props.product.id); */}
                                            this.setState({
                                                switch: !this.state.switch
                                            })
                                        }}>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
                <FixedCart switch={this.state.switch} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        product: state.product,
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, { getProduct, addToCart })(Product);






// addtoCart() {
    //     var addedItem = this.state.cart.push(this.props.product)
    //     this.setState({
    //         cart: addedItem
    //     })
    // }