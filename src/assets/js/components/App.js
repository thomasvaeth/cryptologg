// ----------------------------------------------
// Imports
// ----------------------------------------------
import { h } from 'preact';
import Header from './Header';
import Mast from './Mast';
import Crypto from './Crypto';
import Time from './Time';
import Footer from './Footer';

// ----------------------------------------------
// App
// ----------------------------------------------
export default () => (
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
