import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPuzzles } from './../../ducks/reducer';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn">BY PIECES ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '300')}>300</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '500')}>500</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '750')}>750</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '1000')}>1000</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '1500')}>1500</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', '2000')}>2000</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('pieces', 'large')}>LARGE</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY THEME ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results' onClick={() => this.props.getPuzzles('theme', 'Animal')}>ANIMAL</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('theme', 'Disney')}>DISNEY</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('theme', 'Scenery')}>SCENERY</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('theme', 'Seasonal')}>SEASONAL</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('theme', 'Other')}>OTHER</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY BRAND ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'BUFFALO GAMES')}>BUFFALO GAMES</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'CEACO')}>CEACO</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'CHANNEL CRAFT')}>CHANNEL CRAFT</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'COBBLE HILL')}>COBBLE HILL</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'DOWDLE FOLK ART')}>DOWDLE FOLK ART</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'EUROGRAPHICS')}>EUROGRAPHICS</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'JET')}>JET</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'LAFAYETTE')}>LAFAYETTE</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'LANG')}>LANG</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'LUV-IT')}>LUV-IT</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'MASTERPIECES')}>MASTERPIECES</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'NEW YORK PUZZLE CO.')}>NEW YORK PUZZLE CO.</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'POMEGRANATE')}>POMEGRANATE</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'RAVENSBURGER')}>RAVENSBURGER</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'RE-MARKS')}>RE-MARKS</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'SPRINGBOK')}>SPRINGBOK</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'SUNSOUT')}>SUNSOUT</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'VERMONT CHRISTMAS CO.')}>VERMONT CHRISTMAS CO.</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'WHITE MOUNTAIN')}>WHITE MOUNTAIN</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('brand', 'WILLOW CREEK PRESS')}>WILLOW CREEK PRESS</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY ARTIST ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Art Poulin')}>ART POULIN</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Bob Pettes')}>BOB PETTES</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Charles Wysocki')}>CHARLES WYSOCKI</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Eric Dowdle')}>ERIC DOWDLE</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Nicky Boehme')}>NICKY BOEHME</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Fine-Art Puzzles')}>FINE-ART PUZZLES</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Hometown')}>HOMETOWN</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Jane Wooster Scott')}>JANE WOOSTER SCOTT</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Norman Rockwell')}>NORMAN ROCKWELL</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Thomas Kinkade')}>THOMAS KINKADE</Link>
                            <Link to='/results' onClick={() => this.props.getPuzzles('artist', 'Other Artists')}>OTHER ARTISTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { getPuzzles })(Nav);