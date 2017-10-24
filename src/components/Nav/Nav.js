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
                            <Link to='/results/300 PIECES' onClick={() => this.props.getPuzzles('pieces', '300')}>300</Link>
                            <Link to='/results/500 PIECES' onClick={() => this.props.getPuzzles('pieces', '500')}>500</Link>
                            <Link to='/results/750 PIECES' onClick={() => this.props.getPuzzles('pieces', '750')}>750</Link>
                            <Link to='/results/1000 PIECES' onClick={() => this.props.getPuzzles('pieces', '1000')}>1000</Link>
                            <Link to='/results/1500 PIECES' onClick={() => this.props.getPuzzles('pieces', '1500')}>1500</Link>
                            <Link to='/results/2000 PIECES' onClick={() => this.props.getPuzzles('pieces', '2000')}>2000</Link>
                            <Link to='/results/LARGE PIECES' onClick={() => this.props.getPuzzles('pieces', 'large')}>LARGE</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY THEME ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results/ANIMAL PUZZLES' onClick={() => this.props.getPuzzles('theme', 'Animal')}>ANIMAL</Link>
                            <Link to='/results/DISNEY PUZZLES' onClick={() => this.props.getPuzzles('theme', 'Disney')}>DISNEY</Link>
                            <Link to='/results/SCENERY PUZZLES' onClick={() => this.props.getPuzzles('theme', 'Scenery')}>SCENERY</Link>
                            <Link to='/results/SEASONAL PUZZLES' onClick={() => this.props.getPuzzles('theme', 'Seasonal')}>SEASONAL</Link>
                            <Link to='/results/OTHER PUZZLES' onClick={() => this.props.getPuzzles('theme', 'Other')}>OTHER</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY BRAND ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results/BUFFALO GAMES' onClick={() => this.props.getPuzzles('brand', 'BUFFALO GAMES')}>BUFFALO GAMES</Link>
                            <Link to='/results/CEACO' onClick={() => this.props.getPuzzles('brand', 'CEACO')}>CEACO</Link>
                            <Link to='/results/COBBLE HILL' onClick={() => this.props.getPuzzles('brand', 'COBBLE HILL')}>COBBLE HILL</Link>
                            <Link to='/results/DOWDLE FOLK ART' onClick={() => this.props.getPuzzles('brand', 'DOWDLE FOLK ART')}>DOWDLE FOLK ART</Link>
                            <Link to='/results/LAFAYETTE' onClick={() => this.props.getPuzzles('brand', 'LAFAYETTE')}>LAFAYETTE</Link>
                            <Link to='/results/MASTERPIECES' onClick={() => this.props.getPuzzles('brand', 'MASTERPIECES')}>MASTERPIECES</Link>
                            <Link to='/results/NEW YORK PUZZLE CO.' onClick={() => this.props.getPuzzles('brand', 'NEW YORK PUZZLE CO.')}>NEW YORK PUZZLE CO.</Link>
                            <Link to='/results/POMEGRANATE' onClick={() => this.props.getPuzzles('brand', 'POMEGRANATE')}>POMEGRANATE</Link>
                            <Link to='/results/RAVENSBURGER' onClick={() => this.props.getPuzzles('brand', 'RAVENSBURGER')}>RAVENSBURGER</Link>
                            <Link to='/results/SUNSOUT' onClick={() => this.props.getPuzzles('brand', 'SUNSOUT')}>SUNSOUT</Link>
                            <Link to='/results/WHITE MOUNTAIN' onClick={() => this.props.getPuzzles('brand', 'WHITE MOUNTAIN')}>WHITE MOUNTAIN</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">BY ARTIST ▾</button>
                        <div className='dropdown-content'>
                            <Link to='/results/ART POULIN' onClick={() => this.props.getPuzzles('artist', 'Art Poulin')}>ART POULIN</Link>
                            <Link to='/results/BOB PETTES' onClick={() => this.props.getPuzzles('artist', 'Bob Pettes')}>BOB PETTES</Link>
                            <Link to='/results/CHARLES WYSOCKI' onClick={() => this.props.getPuzzles('artist', 'Charles Wysocki')}>CHARLES WYSOCKI</Link>
                            <Link to='/results/ERIC DOWDLE' onClick={() => this.props.getPuzzles('artist', 'Eric Dowdle')}>ERIC DOWDLE</Link>
                            <Link to='/results/NICKY BOEHME' onClick={() => this.props.getPuzzles('artist', 'Nicky Boehme')}>NICKY BOEHME</Link>
                            <Link to='/results/HOMETOWN' onClick={() => this.props.getPuzzles('artist', 'Hometown')}>HOMETOWN</Link>
                            <Link to='/results/JANE WOOSTER SCOTT' onClick={() => this.props.getPuzzles('artist', 'Jane Wooster Scott')}>JANE WOOSTER SCOTT</Link>
                            <Link to='/results/NORMAN ROCKWELL' onClick={() => this.props.getPuzzles('artist', 'Norman Rockwell')}>NORMAN ROCKWELL</Link>
                            <Link to='/results/THOMAS KINKADE' onClick={() => this.props.getPuzzles('artist', 'Thomas Kinkade')}>THOMAS KINKADE</Link>
                            <Link to='/results/OTHER ARTISTS' onClick={() => this.props.getPuzzles('artist', 'Other Artists')}>OTHER ARTISTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { getPuzzles })(Nav);