import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {getPuzzles} from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Results.css';

class Results extends Component {


    render() {
        return (
            <div className="Results">
                <Header />
                <Nav />
                <div className='main_section'>
                    {JSON.stringify(this.props.filteredPuzzles)}
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

export default connect(mapStateToProps, {getPuzzles})(Results);