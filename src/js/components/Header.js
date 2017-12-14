// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

// ----------------------------------------------
// Header
// ----------------------------------------------
const Header = () => {
  const logoArr = ['chart-down', 'chart-up'];
  const logo = logoArr[Math.floor(Math.random() * logoArr.length)];

  return (
    <header className="header">
      <figure className="header__img">
        <img src={`assets/images/${logo}.png`} alt="CryptoLogg"/>
      </figure>
    </header>
  );
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Header;
