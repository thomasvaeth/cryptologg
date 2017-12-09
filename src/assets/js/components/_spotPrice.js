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
    },

    bindEvents() {
      this.date();
      s.cryptocurrency.forEach(currency => {
        this.cryptocurrency(currency);
      });
    },

    date() {
      const lastChecked = localStorage.getItem('lastChecked');

      if (lastChecked) {
        localStorage.setItem('lastChecked', new Date().getTime() - lastChecked);
      } else {
        localStorage.setItem('lastChecked', new Date().getTime());
      }
    },

    cryptocurrency(currency) {
      axios.get(`https://api.coinbase.com/v2/prices/${currency}-USD/buy`, { 'headers': { 'CB-VERSION': s.versionDate } })
        .then(response => {
          console.log(response.data.data.amount, currency);
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
