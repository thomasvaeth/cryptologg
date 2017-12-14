// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

// ----------------------------------------------
// Header
// ----------------------------------------------
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { popup: false };

    this.logo = ['chart-down', 'chart-up'][Math.floor(Math.random() * 2)];
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState(prevState => ({
      popup: !prevState.popup
    }));
  }

  render() {
    console.log(this.state);

    return (
      <div className={this.state.popup ? 'popup-open' : 'popup-closed'}>
        <header className="header">
          <figure className="header__img">
            <img src={`assets/images/${this.logo}.png`} alt="CryptoLogg"/>
          </figure>
          <span className="header__popup" onClick={this.togglePopup}>About</span>
        </header>
        <section className="popup">
          <div className="popup__close" onClick={this.togglePopup}>
            <div className="popup__exit"></div>
          </div>
          <div className="popup__container">
            <div className="popup__img">
              
            </div>
            <div className="popup__content">

            </div>
          </div>
        </section>
      </div>
    );
  }
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Header;
