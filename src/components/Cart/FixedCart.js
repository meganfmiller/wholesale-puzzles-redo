import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FixedCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartOpen: false
        }

        this.slide = this.slide.bind(this);
    }

    slide() {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    componentWillReceiveProps(newProps) {
        newProps.switch === this.props.switch ? null : this.slide();
    }

    render() {
        return (

            <div className='FixedCart'>
                <div className={this.state.cartOpen ? 'fixed_cart' : 'hide'} onClick={this.slide}>
                    <div className='fixed_container'>
                        <div className={this.state.cartOpen ? 'fixed_title' : 'title_hide'}>CART</div>
                        <div className={this.state.cartOpen ? 'right_half' : 'half_hide'}>
                            {this.props.cart.map((item, i) => {
                                return <div key={i} className='fixed-puzzle-container'>
                                    <div>
                                        <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                    </div>
                                    <div className='fixed_info'>
                                        {item.accessory === true ? <div>{item.brand}</div> : <div>{item.brand} - {item.pieces} PC</div>}
                                        <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                        {item.sale === true ? <div className='price_box'><div className='op'>${item.original_price}</div>${item.price}</div> : <div>${item.price}</div>}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className={this.state.cartOpen ? 'viewcart_btn' : 'half_hide'}><Link to='/cart'><div>VIEW CART</div></Link></div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log(state.cart)
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(FixedCart);