import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAccessories } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './FilteredResults.css';

class Accessories extends Component {


    componentDidMount() {
        this.props.getAccessories();
    }

    render() {
        return (
            <div className="Accessories">
                <Header />
                <Nav />
                <div className='r_main_section'>
                    <div className="results_content">
                    <div className='new_title'>ACCESSORIES</div>
                        {this.props.allAccessories.map((item, i) => {
                            return <div key={i} className='puzzle-container'>
                                <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                <div>{item.brand}</div>
                                <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                <div>${item.price}</div>
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

        allAccessories: state.allAccessories
    }
}

export default connect(mapStateToProps, {getAccessories})(Accessories);