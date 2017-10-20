import React, { Component } from 'react';
import './Home.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import Nav from '../../components/Nav/Nav.js';
import Footer from '../../components/Footer/Footer';

import { connect } from 'react-redux';
import { get3NewPuzzles, get3SalePuzzles, get1Accessory } from './../../ducks/reducer';

class Home extends Component {

    componentDidMount() {
        this.props.get3NewPuzzles();
        this.props.get3SalePuzzles();
        this.props.get1Accessory();
    }

    render() {
        return (
            <div className="Home">
                <Header tall={true} />
                <Nav />
                <div className='main_section'>
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
                                    <div>${item.price}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='accessories'>
                        <div className='acc_title'>
                            ACCESSORIES
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
                            {/* {this.props.homeAccessory.map((item, i) => {
                                return <div key={i} className='accessory-container'>
                                    <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                    <div>{item.brand}</div>
                                    <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                    <div>${item.price}</div>
                                </div>
                            })} */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newHomePuzzles: state.newHomePuzzles,
        saleHomePuzzles: state.saleHomePuzzles,
        homeAccessory: state.homeAccessory
    }
}

export default connect(mapStateToProps, { get3NewPuzzles, get3SalePuzzles, get1Accessory })(Home);

