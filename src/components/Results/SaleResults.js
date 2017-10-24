import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSalePuzzles } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './FilteredResults.css';

class SaleResults extends Component {


    componentDidMount() {
        // console.log('cdm')
        this.props.getSalePuzzles();
    }

    render() {
        // console.log(this.props.allNewPuzzles)
        return (
            <div className="SaleResults">
                <Header />
                <Nav />
                <div className='r_main_section'>
                    <div className="results_content">
                    <div className='new_title'>SALE PUZZLES</div>
                        {this.props.allSalePuzzles.map((item, i) => {
                            return <div key={i} className='puzzle-container'>
                                <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                <div>{item.brand} - {item.pieces} PC</div>
                                <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                <div className='price_box'><div className='op'>${item.original_price}</div>${item.price}</div>
                            </div>
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {

        allSalePuzzles: state.allSalePuzzles
    }
}

export default connect(mapStateToProps, {getSalePuzzles})(SaleResults);