import React, { Component } from 'react';
//Import all components here:
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Cards';
import Footer from './components/Footer';
import monument from './monuments.json'
import './App.css';

class App extends Component {
  state = {
    monument,
    clickedMonument = [],
    score: 0
  };

  //on monumentImage click, remove that game from the array
  
  //on click that has already been clicked before

  //on monumentImages that are still available, increase score by 1, and re-order the cards randomly

  //once all monumentImage's are selected, game will end and alert player that they won, and game will restart at 0.

  //render the page
  render() {
    return (
      <div>
        `navbar`
        `Jumbotron`
          `wrapper`
        `footer`
      </div>
      
    )
  }
}

export default App;
