// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

// ----------------------------------------------
// Popup
// ----------------------------------------------
class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = { popup: false };

    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (this.state.popup && e.which === 27) {
        this.togglePopup();
      }
    });

    this.popup.addEventListener('click', e => {
      if (!this.popupContainer.contains(e.target)) {
        this.togglePopup();
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
      <div>
        <div className="popup__open">
          <span onClick={this.togglePopup}>About</span>
        </div>
        <section className={`popup ${this.state.popup ? 'popup-open' : ''}`} ref={popup => this.popup = popup}>
          <div className="popup__close">
            <div></div>
          </div>
          <div className="popup__container" ref={popupContainer => this.popupContainer = popupContainer}>
            <div className="popup__subcontainer section-padding">
              <span className="popup__emoji">🙋‍♂️</span>
            </div>
            <div className="popup__content">
              <p className="popup__text">
                CryptoLogg was built by <a className="popup__link" href="http://thomasvaeth.com" target="_blank">Thomas Vaeth</a> in Seattle, Washington. 
                Thomas was feeling losses significantly more than gains and CryptoLogg is his way of coming to grip with his emotional liability.
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
export default Popup;
