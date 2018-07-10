import React, { Component } from 'react';
import './App.css';
import Alphabet from './components/alphabet';
import Button from './components/button';

class App extends Component {
  state = {
    letter: "Z"
  }

  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  incrementLetter = () => {
      for (let i=0; i<=this.alphabet.length; i++) {
        if (this.state.letter === this.alphabet[this.alphabet.length-1]) {

          this.setState({
          letter: this.alphabet[0]
        });t
        }
        if (this.alphabet[i] === this.state.letter ) {
        this.setState({
          letter: this.alphabet[i+1]
        });
        }
      }
  }

  decreaseLetter = () => {
    for (let i=0; i<=this.alphabet.length; i++) {
        if (this.state.letter === this.alphabet[0]) {

          this.setState({
          letter: this.alphabet[this.alphabet.length-1]
        });
        }
        if (this.alphabet[i] === this.state.letter ) {
        this.setState({
          letter: this.alphabet[i-1]
        });
        }
      }
  }

  render() {
    return (
      <div className="App">
        <Alphabet value={this.state.letter} />
        <Button onPress={this.decreaseLetter} label="Previous letter" />
        <Button onPress={this.incrementLetter} label="Next letter" />
      </div>
    );
  }
}

export default App;
