// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import Header from './Header';
import Mast from './Mast';
import Crypto from './Crypto';
import Time from './Time';
import Footer from './Footer';

// ----------------------------------------------
// App
// ----------------------------------------------
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Mast />
          <Crypto />
          <Time />
        </main>
        <Footer />
      </div>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default App;
