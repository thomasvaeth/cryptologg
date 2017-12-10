// ----------------------------------------------
// Imports
// ----------------------------------------------
import axios from 'axios';

// ----------------------------------------------
// Spot Price
// ----------------------------------------------
const SpotPrice = (() => {
  let s;

  return {
    settings() {
      return {
        cryptocurrency: ['BTC', 'ETH', 'LTC'],
        versionDate: '2017-12-08'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.bindEvents();
        }
      });
    },

    bindEvents() {
      this.time();
      this.count();
      s.cryptocurrency.forEach(currency => {
        this.cryptocurrency(currency);
      });
    },

    time() {
      const lastChecked = localStorage.getItem('lastChecked');

      if (lastChecked) {
        localStorage.setItem('lastChecked', new Date().getTime() - lastChecked);
      } else {
        localStorage.setItem('lastChecked', new Date().getTime());
      }
    },

    count() {
      const count = localStorage.getItem('count');

      if (count) {
        localStorage.setItem('count', parseInt(count, 10) + 1);
      } else {
        localStorage.setItem('count', 1);
      }
    },

    cryptocurrency(currency) {
      const currencyFormat = currency.toLowerCase();

      axios.get(`https://api.coinbase.com/v2/prices/${currency}-USD/buy`, { 'headers': { 'CB-VERSION': s.versionDate } })
        .then(response => {
          const lastValue = localStorage.getItem(`${currencyFormat}LastValue`);
          const currentValue = response.data.data.amount;

          if (lastValue) {
            const changeValue = Number(lastValue - currentValue).toFixed(2);

            console.log(changeValue, currency);
          }

          localStorage.setItem(`${currencyFormat}LastValue`, currentValue);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default SpotPrice;
