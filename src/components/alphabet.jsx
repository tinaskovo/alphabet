import React, { Component } from 'react';

class Alphabet extends Component {
  render () {
    return (
      <h1>{this.props.value}</h1>
    );
  }
}

export default Alphabet;
