//Import all components here:
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Cards';
import Footer from './components/Footer';
import monument from './monument.json'
import './App.css';

class App extends Component {
  state = {
    monument,
    clickedMonument: [],
    score: 0,
    highScore: 0
  };

  //on monumentImage click, remove that game from the array
  imageClick = event => {
    const currentMonumentPhoto = event.target.alt;
    const MonumentClicked = this.state.clickedMonument.indexOf(currentMonumentPhoto) > -1;

    //on click that has already been clicked before
    if (MonumentClicked) {
      this.setState({
        monument: this.state.monument.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedMonument: [],
        score: 0,
        //need to fix highScore code
        highScore: this.state.highScore
      });
      alert("You lose! Please try again");

      //on monumentImages that are still available, increase score by 1, and re-order the cards randomly

    } else {
      this.setState({
        monument: this.state.monument.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedMonument: this.state.clickedMonument.concat(
          currentMonumentPhoto
        ),
        score: this.state.score + 1
      },
        //once all monumentImage's are selected, game will end and alert player that they won, and game will restart at 0.
        () => {
          if (this.state.score === 18) {
            alert("You won!");
            this.setState({
              monument: this.state.monument.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedMonument: [],
              score: 0,
              //figure out the highScore code
              highScore: this.state.highScore
            });
          }
        })
    }

  }
  //render the page
  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.monument.map(monument => (
            <Card imageClick={this.imageClick} id={monument.id} key={monument.id} image={monument.image} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
