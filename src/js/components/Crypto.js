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

    this.crypto = 'BTC,ETH,LTC';
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
      let title = 'Bitcoin';
      let emoji = ['🤔', '😶'][Math.floor(Math.random() * 2)];
      let text = '$0.00';

      if (value === 'BTC') {
        title = 'Bitcoin';
      } else if (value === 'ETH') {
        title = 'Ethereum';
      } else if (value === 'LTC') {
        title = 'Litecoin';
      }

      if (lastValue) {
        const changeValue = Number(currentValue - lastValue).toFixed(2);

        if (changeValue > 0) {
          emoji = ['🤑', '😎'][Math.floor(Math.random() * 2)];
        } else if (changeValue < 0) {
          emoji = ['😵', '😥', '🤢'][Math.floor(Math.random() * 3)];
        }

        text = changeValue < 0 ? `–$${Number(Math.abs(changeValue)).toFixed(2)}` : `$${changeValue}`;
      }

      localStorage.setItem(`${currencyFormat}LastValue`, currentValue);

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
      <section className="crypto section-padding--no-bottom">
        <div className="crypto__container">
          {this.cards()}
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Crypto;
