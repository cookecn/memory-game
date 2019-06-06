import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
                <div className="navbar-nav">
                    <a className="nav-item nav-link disabled" id="bigTitle">Memory Game</a>
                    <a className="nav-item nav-link disabled">Score: {this.props.score}</a>
                    <a className="nav-item nav-link disabled">High Score: {this.props.highScore}</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;