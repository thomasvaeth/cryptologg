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

  quote() {
    const quotes = [
      {
        author: 'Warren Buffet',
        quote: 'Buy, hold, and don\'t watch the market closely'
      },
      {
        author: 'Nicholas Taleb',
        quote: 'Over a short time increment, one observes the variability of the portfolio, not the returns'
      },
      {
        author: 'Allan Mecham',
        quote: 'Continual performance monitoring is not good for your mental health or for your portfolio’s well-being'
      },
      {
        author: 'Nicholas Taleb',
        quote: 'Daily exposure to such high degrees of randomness without much control will have physiological effects on humans'
      },
      {
        author: 'Daniel Kahneman',
        quote: 'Losses look larger than gains'
      },
      {
        author: 'Allan Mecham',
        quote: 'Almost all investors experience more pain and anguish from losses than they do pleasure from gains'
      }
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const quote = this.quote();

    return (
      <section className="time section-padding">
        <div className="grid">
          <p className="time__text">
            {quote.author} said, “{quote.quote},” but the last time you checked your portfolio was {this.state.time} ago. ⏳
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
