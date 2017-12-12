// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import Header from './Header';
import Mast from './Mast';
import Crypto from './Crypto';

// ----------------------------------------------
// App
// ----------------------------------------------
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mast />
        <Crypto />
      </div>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default App;
