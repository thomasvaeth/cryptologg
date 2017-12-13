// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment';

// ----------------------------------------------
// Mast
// ----------------------------------------------
class Mast extends Component {
  constructor(props) {
    super(props);

    this.state = { time: 'a few seconds' };

    this.time = this.time.bind(this);
  }

  componentDidMount() {
    this.time();
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.time();
      }
    });
  }

  time() {
    const checked = moment().toISOString();
    const lastChecked = localStorage.getItem('lastChecked');
    const timeDifference = moment.duration(moment(checked).diff(moment(lastChecked))).humanize();

    localStorage.setItem('lastChecked', checked);

    this.setState({ time: lastChecked ? timeDifference : this.state.time });
  }

  render() {
    return (
      <section className="mast section-padding">
        <div className="grid-large">
          <p className="mast__text">
            CryptoLogg discourages you from checking the values of your cryptocurrency investments. Each price only shows the movement since the last time you checked, which was {this.state.time} ago.
          </p>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Mast;
