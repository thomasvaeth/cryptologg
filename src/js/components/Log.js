// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment';

// ----------------------------------------------
// Log
// ----------------------------------------------
class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      time: 'a few seconds'
    };

    this.count = this.count.bind(this);
    this.time = this.time.bind(this);
  }

  componentDidMount() {
    this.count();
    this.time();
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.count();
        this.time();
      }
    });
  }

  count() {
    let count = localStorage.getItem('count');

    if (count) {
      count = parseInt(count, 10) + 1;
      localStorage.setItem('count', count);
    } else {
      count = 1;
      localStorage.setItem('count', count);
    }

    this.setState({ count });
  }

  time() {
    const checked = moment().toISOString();
    const lastChecked = localStorage.getItem('lastChecked');
    const timeDifference = moment.duration(moment(checked).diff(moment(lastChecked))).humanize();

    localStorage.setItem('lastChecked', checked);

    this.setState({ time: timeDifference });
  }

  render() {
    return (
      <section className="mast section-padding">
        <div className="grid-large">
          <div className="mast__container">
            <h1>You have checked {this.state.count} times.</h1>
            <h1>The last time was {this.state.time} ago.</h1>
          </div>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Log;
