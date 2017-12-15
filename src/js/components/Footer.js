// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import moment from 'moment';

// ----------------------------------------------
// Footer
// ----------------------------------------------
const Footer = () => {
  const year = moment().year();

  return (
    <footer className="footer">
      <span className="footer__text">Coded With Code in {year} 👨‍💻</span>
    </footer>
  );
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Footer;
