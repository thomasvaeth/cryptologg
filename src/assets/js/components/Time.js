// ----------------------------------------------
// Imports
// ----------------------------------------------
import { h, Component } from 'preact';

// ----------------------------------------------
// Time
// ----------------------------------------------
export default class Time extends Component {
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
    const checked = new Date().toISOString();
    const lastChecked = localStorage.getItem('lastChecked');
    const timeDifference = new Date(checked) - new Date(lastChecked);
    let humanize = this.state.time;
    let timeFormat = 0;

    if (timeDifference < 44000) {
      humanize = 'a few seconds';
    } else if (timeDifference === 44000) {
      humanize = '44 seconds';
    } else if (timeDifference <= 89000) {
      humanize = 'a minute';
    } else if (timeDifference <= 150000) {
      humanize = '2 minutes';
    } else if (timeDifference <= 2640000) {
      timeFormat = Math.round(timeDifference / 1000 / 60);
      humanize = `${timeFormat} minutes`;
    } else if (timeDifference <= 5340000) {
      humanize = 'an hour';
    } else if (timeDifference <= 75600000) {
      timeFormat = Math.round(timeDifference / 1000 / 60 / 60);
      humanize = `${timeFormat} hours`;
    } else if (timeDifference <= 126000000) {
      humanize = 'a day';
    } else if (timeDifference <= 2160000000) {
      timeFormat = Math.round(timeDifference / 1000 / 60 / 60 / 24);
      humanize = `${timeFormat} days`;
    } else if (timeDifference <= 3888000000) {
      humanize = 'a month';
    } else if (timeDifference <= 27561600000) {
      timeFormat = Math.round(timeDifference / 1000 / 60 / 60 / 24 / 30);
      humanize = `${timeFormat} months`;
    } else if (timeDifference <= 47260800000) {
      humanize = 'a year';
    } else {
      timeFormat = Math.round(timeDifference / 1000 / 60 / 60 / 24 / 30 / 12);
      humanize = `${timeFormat} years`;
    }

    localStorage.setItem('lastChecked', checked);

    this.setState({ time: lastChecked ? humanize : this.state.time });
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

  render(props, state) {
    const quote = this.quote();

    return (
      <section className="time section-padding">
        <div className="grid">
          <p className="time__text">
            {quote.author} said, “{quote.quote},” but the last time you checked your portfolio was {state.time} ago. ⏳
          </p>
        </div>
      </section>
    );
  }
}
