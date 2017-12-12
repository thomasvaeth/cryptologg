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
    this.spotPrice(this.crypto);
  }

  componentDidMount() {
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
    const cards = Object.keys(this.state.cryptoValue).map(value => {
      const currencyFormat = value.toLowerCase();
      const lastValue = localStorage.getItem(`${currencyFormat}LastValue`);
      const currentValue = this.state.cryptoValue[value].USD;
      let title = 'Bitcoin';
      let image = 'assets/images/neutral.png';
      let text = '$0.00';

      if (value === 'BTC') {
        title = 'Bitcoin';
      } else if (value === 'ETH') {
        title = 'Ethereum';
      } else if (value === 'LTC') {
        title = 'Litecoin';
      }

      if (lastValue) {
        const changeValue = Number(lastValue - currentValue).toFixed(2);

        if (changeValue > 0) {
          image = 'assets/images/positive.png';
        } else if (changeValue < 0) {
          image = 'assets/images/negative.png';
        }

        text = changeValue < 0 ? `–$${Number(Math.abs(changeValue)).toFixed(2)}` : `$${changeValue}`;
      }

      localStorage.setItem(`${currencyFormat}LastValue`, currentValue);

      return (
        <div className="crypto__btc section-padding" key={value}>
          <figure className="crypto__img">
            <img src={image} alt="Emoji Face"/>
          </figure>
          <h2>{title}</h2>
          <span className="crypto__value">{text}</span>
        </div>
      );
    });

    return cards;
  }

  render() {
    return (
      <section className="crypto section-padding--no-top">
        <div className="grid-large">
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
