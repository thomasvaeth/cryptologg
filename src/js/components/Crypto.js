// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';

// ----------------------------------------------
// Crypto
// ----------------------------------------------
class Crypto extends Component {
  constructor(props) {
    super(props);

    this.state = { cryptoValue: {} };

    this.crypto = 'BTC,ETH,LTC,XRP,BCH,DASH';
  }

  componentDidMount() {
    this.spotPrice(this.crypto);
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.spotPrice(this.crypto);
      }
    });
  }

  spotPrice(currency) {
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currency}&tsyms=USD`)
      .then(response => {
        this.setState({ cryptoValue: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  cards() {
    return Object.keys(this.state.cryptoValue).map(value => {
      const currencyFormat = value.toLowerCase();
      const lastValue = localStorage.getItem(`${currencyFormat}LastValue`);
      const currentValue = this.state.cryptoValue[value].USD;
      const positiveEmoji = ['🤑', '😎', '😋', '😍'];
      const neutralEmoji =  ['🤔', '😶', '🙃'];
      const negativeEmoji = ['😵', '😥', '🤢', '🙄', '😤'];
      let title = '';
      let emoji = neutralEmoji[Math.floor(Math.random() * neutralEmoji.length)];

      localStorage.setItem(`${currencyFormat}LastValue`, currentValue);

      if (value === 'BTC') {
        title = 'Bitcoin';
      } else if (value === 'ETH') {
        title = 'Ethereum';
      } else if (value === 'LTC') {
        title = 'Litecoin';
      } else if (value === 'XRP') {
        title = 'Ripple';
      } else if (value === 'BCH') {
        title = 'Bitcoin Cash';
      } else if (value === 'DASH') {
        title = 'Dash';
      }

      if (!lastValue) {
        return (
          <div className="crypto__subcontainer" key={value}>
            <div className="crypto__content">
              <span className="crypto__emoji">{positiveEmoji[Math.floor(Math.random() * positiveEmoji.length)]}</span>
              <h2 className="crypto__title">{title}</h2>
              <span className="crypto__value">{`$${Number(currentValue).toFixed(2)}`}</span>
            </div>
          </div>
        );
      }

      const changeValue = Number(currentValue - lastValue).toFixed(2);

      if (changeValue > 0) {
        emoji = positiveEmoji[Math.floor(Math.random() * positiveEmoji.length)];
      } else if (changeValue < 0) {
        emoji = negativeEmoji[Math.floor(Math.random() * negativeEmoji.length)];
      }

      const text = changeValue < 0 ? `–$${Number(Math.abs(changeValue)).toFixed(2)}` : `$${Number(Math.abs(changeValue)).toFixed(2)}`;

      return (
        <div className="crypto__subcontainer" key={value}>
          <div className="crypto__content">
            <span className="crypto__emoji">{emoji}</span>
            <h2 className="crypto__title">{title}</h2>
            <span className="crypto__value">{text}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="crypto section-padding">
        <div className="grid-xlarge">
          <div className="crypto__container">
            {this.cards()}
          </div>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Crypto;
