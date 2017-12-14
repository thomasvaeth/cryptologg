// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment';

// ----------------------------------------------
// Crypto
// ----------------------------------------------
class Time extends Component {
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
      <section className="time section-padding">
        <div className="grid">
          <p className="time__text">
            Warren Buffet said, “Buy, hold, and don't watch the market closely,” but the last time you checked was {this.state.time} ago.
          </p>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Time;
