// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import Popup from './Popup';

// ----------------------------------------------
// Header
// ----------------------------------------------
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout() {
    this.popup.togglePopup();
  }

  render() {
    const logo = ['📉', '📈'][Math.floor(Math.random() * 2)];
    const popupLeft = (
      <span className="popup__emoji">🙋‍♂️</span>
    );
    const popupRight = (
      <p className="popup__text">
        CryptoLogg was built by <a className="popup__link" href="http://thomasvaeth.com" target="_blank" rel="noopener noreferrer">Thomas Vaeth</a> in Seattle, Washington. 
        Thomas was feeling losses significantly more than gains and CryptoLogg is his way of coming to grip with his emotional liability.
      </p>
    );

    return (
      <div>
        <header className="header">
          <span className="header__img">{logo}</span>
          <span className="header__popup" onClick={this.toggleAbout}>About</span>
        </header>
        <Popup ref={popup => this.popup = popup} leftContent={popupLeft} rightContent={popupRight} />
      </div>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Header;
