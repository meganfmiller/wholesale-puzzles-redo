import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { getNewPuzzles } from './../../ducks/reducer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './FilteredResults.css';

class NewResults extends Component {


    componentDidMount() {
        console.log('cdm')
        this.props.getNewPuzzles();
    }

    render() {
        console.log(this.props.allNewPuzzles)
        return (
            <div className="NewResults">
                <Header />
                <Nav />
                <div className='main_section'>
                    <div className="content">
                        {this.props.allNewPuzzles.map((item, i) => {
                            return <div key={i} className='puzzle-container'>
                                <div><img src={item.img} alt='' /></div>
                                <div>{item.brand} - {item.pieces} PC</div>
                                <div className='name_style'>{item.name}</div>
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
    console.log(state)
    return {
        
        allNewPuzzles: state.allNewPuzzles
    }
}

export default connect(mapStateToProps, { getNewPuzzles })(NewResults);