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

    this.logo = ['chart-down', 'chart-up'][Math.floor(Math.random() * 2)];
  }

  toggleAbout() {
    this.refs.popup.togglePopup();
  }

  render() {
    const popupLeft = (
      <span className="popup__emoji">🙋‍♂️</span>
    );
    const popupRight = (
      <p className="popup__text">
        CryptoLogg was built by <a className="popup__link" href="http://thomasvaeth.com" target="_blank">Thomas Vaeth</a> in Seattle, Washington. 
        Thomas was feeling losses significantly more than gains and CryptoLogg is his way of coming to grip with his emotional liability.
      </p>
    );

    return (
      <div>
        <header className="header">
          <figure className="header__img">
            <img src={`assets/images/${this.logo}.png`} alt="CryptoLogg"/>
          </figure>
          <span className="header__popup" onClick={this.toggleAbout}>About</span>
        </header>
        <Popup ref="popup" leftContent={popupLeft} rightContent={popupRight} />
      </div>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Header;
