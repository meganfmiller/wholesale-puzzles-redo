import React, { Component } from 'react';
import './Home.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import Nav from '../../components/Nav/Nav.js';
import Footer from '../../components/Footer/Footer';
import FixedCart from '../Cart/FixedCart';
import hello from '../../images/hello-3.png';
import img1 from '../../images/summer_glow.jpg';

import { connect } from 'react-redux';
import { get3NewPuzzles, get3SalePuzzles, get1Accessory, slide } from './../../ducks/reducer';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            filterOpen: true
        }
    }

    componentDidMount() {
        this.props.get3NewPuzzles();
        this.props.get3SalePuzzles();
        this.props.get1Accessory();
        this.props.slide(!this.state.filterOpen);
    }

    componentWillUnmount() {
        this.props.slide(!this.state.filterOpen);
    }

    render() {
        return (
            <div className="Home">
                <Header tall={true} />
                <Nav flag={true}/>
                <div className='main_section'>
                    <div className='hello'><img src={hello} alt=''/></div>
                    <div className="new_puzzles">
                        <div className="title">
                            <Link to='/newresults'>NEW PUZZLES</Link>
                        </div>
                        <div className="new_content">
                            {this.props.newHomePuzzles.map((item, i) => {
                                return <div key={i} className='puzzle-container'>
                                    <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                    <div>{item.brand} - {item.pieces} PC</div>
                                    <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                    <div>${item.price}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='sale_puzzles'>
                        <div className='title'>
                            <Link to='/saleresults'>SALE PUZZLES</Link>
                        </div>
                        <div className="sale_content">
                            {this.props.saleHomePuzzles.map((item, i) => {
                                return <div key={i} className='puzzle-container'>
                                    <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                    <div>{item.brand} - {item.pieces} PC</div>
                                    <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                    <div className='price_box'><div className='op'>${item.original_price}</div>${item.price}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='accessories'>
                        <div className='acc_title'>
                            <Link to='/accessoryresults'>ACCESSORIES</Link>
                        </div>
                        <div className="accessory_content">
                            {this.props.homeAccessory.map((item, i) => {
                                return <div key={i} className='accessory-container'>
                                    <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                    <div>{item.brand}</div>
                                    <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                    <div>${item.price}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='gallery'>
                        <div className='title'>
                            GALLERY
                        </div>
                        <div className="gallery_content">
                        </div>
                    </div>
                </div>
                <Footer />
                <FixedCart/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newHomePuzzles: state.newHomePuzzles,
        saleHomePuzzles: state.saleHomePuzzles,
        homeAccessory: state.homeAccessory,
        filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, { get3NewPuzzles, get3SalePuzzles, get1Accessory, slide })(Home);

