// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

// ----------------------------------------------
// Header
// ----------------------------------------------
const Header = () => {
  const logo = ['chart-down', 'chart-up'][Math.floor(Math.random() * 2)];

  return (
    <div>
      <header className="header">
        <figure className="header__img">
          <img src={`assets/images/${logo}.png`} alt="CryptoLogg"/>
        </figure>
      </header>
    </div>
  );
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Header;
