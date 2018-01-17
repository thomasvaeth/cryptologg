// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import Header from './Header';
import Mast from './Mast';
import Crypto from './Crypto';
import Time from './Time';
import Footer from './Footer';

// ----------------------------------------------
// App
// ----------------------------------------------
const App = () => {
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
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default App;
