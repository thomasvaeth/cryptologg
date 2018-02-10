// ----------------------------------------------
// Imports
// ----------------------------------------------
import { h, Component } from 'preact';
import PropTypes from 'prop-types';

// ----------------------------------------------
// Popup
// ----------------------------------------------
export default class Popup extends Component {
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

  render(props, state) {
    return (
      <div>
        <section className={`popup ${state.popup ? 'popup-open' : ''}`} ref={popup => this.popup = popup}>
          <div className="popup__close">
            <div></div>
          </div>
          <div className="popup__container" ref={popupContainer => this.popupContainer = popupContainer}>
            <div className="popup__subcontainer section-padding">
              {props.leftContent}
            </div>
            <div className="popup__content">
              {props.rightContent}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Popup.propTypes = {
  leftContent: PropTypes.object,
  rightContent: PropTypes.object
};
