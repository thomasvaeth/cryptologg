// ----------------------------------------------
// Imports
// ----------------------------------------------
import { h, Component } from 'preact';
import axios from 'axios';

// ----------------------------------------------
// Crypto
// ----------------------------------------------
export default class Crypto extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      crypto: {},
      currency: true
    };

    this.toggleCurrency = this.toggleCurrency.bind(this);

    this.crypto = [
      {
        name: 'Bitcoin',
        symbol: 'BTC'
      },
      {
        name: 'Ethereum',
        symbol: 'ETH'
      },
      {
        name: 'Ripple',
        symbol: 'XRP'
      },
      {
        name: 'Bitcoin Cash',
        symbol: 'BCH'
      },
      {
        name: 'EOS',
        symbol: 'EOS'
      },
      {
        name: 'Litecoin',
        symbol: 'LTC'
      },
      {
        name: 'Cardano',
        symbol: 'ADA'
      },
      {
        name: 'Stellar',
        symbol: 'XLM'
      },
      {
        name: 'IOTA',
        symbol: 'IOT'
      },
      {
        name: 'TRON',
        symbol: 'TRX'
      },
      {
        name: 'NEO',
        symbol: 'NEO'
      },
      {
        name: 'Dash',
        symbol: 'DASH'
      }
    ];
  }

  componentDidMount() {
    const currency = localStorage.getItem('currency');

    if (currency !== null) {
      this.setState({ currency: JSON.parse(currency) });
    }

    const cryptoArr = this.crypto.map(currency => currency.symbol);
    const crypto = cryptoArr.join(',');

    this.spotPrice(crypto);
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.spotPrice(crypto);
      }
    });
  }

  componentDidUpdate() {
    localStorage.setItem('currency', this.state.currency);
  }

  spotPrice(currency) {
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currency}&tsyms=USD`)
      .then(response => {
        const data = response.data;
        const obj = {};

        Object.keys(data).map((value, idx) => {
          const currencyFormat = value.toLowerCase();
          const currentValue = data[value].USD;

          obj[value] = {
            lastValue: localStorage.getItem(`${currencyFormat}LastValue`),
            currentValue: currentValue,
            title: this.crypto[idx].name
          };

          localStorage.setItem(`${currencyFormat}LastValue`, currentValue);
        });

        this.setState({ crypto: obj });
      })
      .catch(error => {
        console.log(error);
      });
  }

  marketChange() {
    const getEmoji = emojiArr => emojiArr[Math.floor(Math.random() * emojiArr.length)];
    const toCurrency = num => `$${Number(Math.abs(num)).toFixed(2)}`;
    const toPercentage = num => `${Number(Math.abs(num)).toFixed(4)}%`;

    const positiveEmoji = ['🤑', '😎', '😋', '😍'];
    const neutralEmoji =  ['🤔', '😶', '🙃'];
    const negativeEmoji = ['😵', '😥', '🤢', '🙄', '😤'];

    return Object.keys(this.state.crypto).map(value => {
      const crypto = this.state.crypto[value];
      const lastValue = crypto.lastValue;
      const currentValue = crypto.currentValue;
      const title = crypto.title;
      let emoji = '';
      let text = '';

      if (!crypto.lastValue) {
        const firstVisitEmoji = getEmoji(positiveEmoji);
        const firstVisitText = this.state.currency ? toCurrency(crypto.currentValue) : 'Infinity%';

        return this.cards(value, firstVisitEmoji, title, firstVisitText);
      }

      const changeValue = this.state.currency ? (currentValue - lastValue) : ((currentValue - lastValue) / lastValue) * 100;

      if (changeValue > 0) {
        emoji = getEmoji(positiveEmoji);
        text = this.state.currency ? toCurrency(changeValue) : toPercentage(changeValue);
      } else if (changeValue < 0) {
        emoji = getEmoji(negativeEmoji);
        text = this.state.currency ? `–${toCurrency(changeValue)}` : `–${toPercentage(changeValue)}`;
      } else {
        emoji = getEmoji(neutralEmoji);
        text = this.state.currency ? '$0.00' : '0%';
      }

      return this.cards(value, emoji, title, text);
    });
  }

  cards(value, emoji, title, text) {
    return (
      <div className="crypto__subcontainer" key={value}>
        <div className="crypto__content">
          <span className="crypto__emoji">{emoji}</span>
          <h2 className="crypto__title">{title}</h2>
          <span className="crypto__value" onClick={this.toggleCurrency}>{text}</span>
        </div>
      </div>
    );
  }

  toggleCurrency() {
    this.setState(prevState => ({
      currency: !prevState.currency
    }));
  }

  render(props, state) {
    return (
      <section className="crypto section-padding">
        <div className="grid-xlarge">
          <div className="crypto__container">
            {this.marketChange()}
          </div>
        </div>
        <div className="crypto__format">
          <span className={`crypto__button ${state.currency ? 'active' : ''}`} onClick={this.toggleCurrency}>
            <span>$</span>
          </span>
          <span className={`crypto__button ${!state.currency ? 'active' : ''}`} onClick={this.toggleCurrency}>
            <span>%</span>
          </span>
        </div>
      </section>
    );
  }
}
