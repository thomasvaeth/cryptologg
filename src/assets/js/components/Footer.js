// ----------------------------------------------
// Imports
// ----------------------------------------------
import { h } from 'preact';
import moment from 'moment';

// ----------------------------------------------
// Footer
// ----------------------------------------------
export default () => (
  <footer className="footer">
    <span className="footer__text">Coded With Code in {moment().year()}. 👨‍💻</span>
  </footer>
);
