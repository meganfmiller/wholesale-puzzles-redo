import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getPuzzles } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './FilteredResults.css';

class FilteredResults extends Component {


    render() {
        return (
            <div className="FilteredResults">
                <Header />
                <Nav />
                <div className='main_section'>
                    <div className="results_content">
                        {this.props.filteredPuzzles.map((item, i) => {
                            return <div key={i} className='puzzle-container'>
                                <Link to={'/resultz/' + item.id}><div><img src={item.img} alt='' /></div></Link>
                                <div>{item.brand} - {item.pieces} PC</div>
                                <Link to={'/resultz/' + item.id}><div className='name_style'>{item.name}</div></Link>
                                <div>${item.price}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filteredPuzzles: state.filteredPuzzles
    }
}

export default connect(mapStateToProps, { getPuzzles })(FilteredResults);