import React, { Component } from 'react';
import './Home.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import Nav from '../../components/Nav/Nav.js';

import { connect } from 'react-redux';
import { get3NewPuzzles, getNewPuzzles } from './../../ducks/reducer';

class Home extends Component {

    componentDidMount() {
        this.props.get3NewPuzzles();
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
                        <div className="content">
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
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newHomePuzzles: state.newHomePuzzles
    }
}

export default connect(mapStateToProps, { get3NewPuzzles, getNewPuzzles })(Home);

