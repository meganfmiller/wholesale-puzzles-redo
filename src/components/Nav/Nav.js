import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPuzzles, slide } from './../../ducks/reducer';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag: false
        }

        this.localSlide = this.localSlide.bind(this);
    }

    localSlide(flag) {
        this.setState({
            flag: flag,
        })
    }

    render() {
        console.log(this.state.flag)
        return (
            <div className="Nav">
                <div className="navbar">
                { 
                    this.props.flag ?

                    <div className='pf_container'>
                            <div>
                                <div className='pf_title'>PUZZLE FINDER</div>
                                <div className='pf_select'>
                                    <select>
                                        <option className='default' value='' selected>SELECT PIECES</option>
                                        <option value='300'>300</option>
                                        <option value='500'>500</option>
                                        <option value='750'>750</option>
                                        <option value='1000'>1000</option>
                                        <option value='large'>LARGE</option>
                                    </select>
                                    <select>
                                        <option className='default' value='' selected>SELECT THEME</option>
                                        <option value='animal'>ANIMAL</option>
                                        <option value='disney'>DISNEY</option>
                                        <option value='scenery'>SCENERY</option>
                                        <option value='seasonal'>SEASONAL</option>
                                        <option value='other'>OTHER</option>
                                    </select>
                                    <select>
                                        <option className='default' value='' selected>SELECT BRAND</option>
                                        <option value='buffalo_games'>BUFFALO GAMES</option>
                                        <option value='ceaco'>CEACO</option>
                                        <option value='cobble_hill'>COBBLE HILL</option>
                                        <option value='dowdle_folk_art'>DOWDLE FOLK ART</option>
                                        <option value='lafayette'>LAFAYETTE</option>
                                        <option value='masterpieces'>MASTERPIECES</option>
                                        <option value='new_york_puzzle_co'>NEW YORK PUZZLE CO.</option>
                                        <option value='pomegranate'>POMEGRANATE</option>
                                        <option value='ravensburger'>RAVENSBURGER</option>
                                        <option value='sunsout'>SUNSOUT</option>
                                        <option value='white_mountain'>WHITE MOUNTAIN</option>
                                    </select>
                                    <select>
                                        <option className='default' value='' selected>SELECT ARTIST</option>
                                        <option value='art_poulin'>ART POULIN</option>
                                        <option value='bob_pettes'>BOB PETTES</option>
                                        <option value='charles_wysocki'>CHARLES WYSOCKI</option>
                                        <option value='eric_dowdle'>ERIC DOWDLE</option>
                                        <option value='nicky_boehme'>NICKY BOEHME</option>
                                        <option value='hometown'>HOMETOWN</option>
                                        <option value='jane_wooster_scott'>JANE WOOSTER SCOTT</option>
                                        <option value='norman_rockwell'>NORMAN ROCKWELL</option>
                                        <option value='thomas_kinkade'>THOMAS KINKADE</option>
                                        <option value='other_artists'>OTHER ARTISTS</option>
                                    </select>
                                </div>
                                <div className='pf_btns'>
                                    <button className='submit_btn'>SEARCH</button>
                                    <button className='reset_btn'>RESET</button>
                                </div>
                            </div>
                        </div>
                   

                    :

                    this.state.flag ?
                       
                            <div className={this.state.flag ? 'pf_container' : 'pf_hide'}>
                                <div>
                                    <div className='pf_title' onClick={() => this.localSlide(!this.state.flag)}>PUZZLE FINDER</div>
                                    <div className='pf_select'>
                                        <select>
                                            <option className='default' value='' selected>SELECT PIECES</option>
                                            <option value='300'>300</option>
                                            <option value='500'>500</option>
                                            <option value='750'>750</option>
                                            <option value='1000'>1000</option>
                                            <option value='large'>LARGE</option>
                                        </select>
                                        <select>
                                            <option className='default' value='' selected>SELECT THEME</option>
                                            <option value='animal'>ANIMAL</option>
                                            <option value='disney'>DISNEY</option>
                                            <option value='scenery'>SCENERY</option>
                                            <option value='seasonal'>SEASONAL</option>
                                            <option value='other'>OTHER</option>
                                        </select>
                                        <select>
                                            <option className='default' value='' selected>SELECT BRAND</option>
                                            <option value='buffalo_games'>BUFFALO GAMES</option>
                                            <option value='ceaco'>CEACO</option>
                                            <option value='cobble_hill'>COBBLE HILL</option>
                                            <option value='dowdle_folk_art'>DOWDLE FOLK ART</option>
                                            <option value='lafayette'>LAFAYETTE</option>
                                            <option value='masterpieces'>MASTERPIECES</option>
                                            <option value='new_york_puzzle_co'>NEW YORK PUZZLE CO.</option>
                                            <option value='pomegranate'>POMEGRANATE</option>
                                            <option value='ravensburger'>RAVENSBURGER</option>
                                            <option value='sunsout'>SUNSOUT</option>
                                            <option value='white_mountain'>WHITE MOUNTAIN</option>
                                        </select>
                                        <select>
                                            <option className='default' value='' selected>SELECT ARTIST</option>
                                            <option value='art_poulin'>ART POULIN</option>
                                            <option value='bob_pettes'>BOB PETTES</option>
                                            <option value='charles_wysocki'>CHARLES WYSOCKI</option>
                                            <option value='eric_dowdle'>ERIC DOWDLE</option>
                                            <option value='nicky_boehme'>NICKY BOEHME</option>
                                            <option value='hometown'>HOMETOWN</option>
                                            <option value='jane_wooster_scott'>JANE WOOSTER SCOTT</option>
                                            <option value='norman_rockwell'>NORMAN ROCKWELL</option>
                                            <option value='thomas_kinkade'>THOMAS KINKADE</option>
                                            <option value='other_artists'>OTHER ARTISTS</option>
                                        </select>
                                    </div>
                                    <div className='pf_btns'>
                                        <button className='submit_btn'>SEARCH</button>
                                        <button className='reset_btn'>RESET</button>
                                    </div>
                                </div>
                                </div>
                                :
                                <div className='pf_title pf_hide' onClick={() => this.localSlide(!this.state.flag)}>PUZZLE FINDER ▾</div>
                            
                            }




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

function mapStateToProps(state) {
    return {
                    filterOpen: state.filterOpen
    }
}

export default connect(mapStateToProps, {getPuzzles, slide })(Nav);