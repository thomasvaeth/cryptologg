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

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (this.state.popup && e.which === 27) {
        this.setState(prevState => ({
          popup: !prevState.popup
        }));
      }
    });
  }

  togglePopup() {
    this.setState(prevState => ({
      popup: !prevState.popup
    }));
  }

  render() {
    return (
      <div className={this.state.popup ? 'popup-open' : ''}>
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
            <div className="popup__subcontainer section-padding">
              <span className="popup__emoji">🙋‍♂️</span>
            </div>
            <div className="popup__content">
              <p className="popup__text">
                CryptoLogg was built by <a className="popup__link" href="http://thomasvaeth" target="_blank">Thomas Vaeth</a> in Seattle, Washington. 
                Thomas built it because he was feeling losses significantly more than gains. 
                CryptoLogg is his way of coming to grip with his emotional liability.
              </p>
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
