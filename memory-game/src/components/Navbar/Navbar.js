import React from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Monument Memory Game</li>
                    <li className="itemCenter">Score: {this.props.score}</li>
                    <li className="itemRight">High Score: {this.props.highscore}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;