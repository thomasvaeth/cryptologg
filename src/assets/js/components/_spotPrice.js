// ----------------------------------------------
// Imports
// ----------------------------------------------
import axios from 'axios';
import moment from 'moment';

// ----------------------------------------------
// Spot Price
// ----------------------------------------------
const SpotPrice = (() => {
  let s;

  return {
    settings() {
      return {
        cryptocurrency: ['BTC', 'ETH', 'LTC'],
        versionDate: '2017-12-08',
        count: document.getElementsByClassName('mast__count')[0],
        time: document.getElementsByClassName('mast__time')[0],
        container: document.getElementsByClassName('crypto__value'),
        image: document.getElementsByClassName('crypto__img')
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
      s.cryptocurrency.forEach((currency, idx) => {
        this.cryptocurrency(currency, idx);
      });
    },

    time() {
      const checked = moment().toISOString();
      const lastChecked = localStorage.getItem('lastChecked');
      const timeDifference = moment.duration(moment(checked).diff(moment(lastChecked))).humanize();

      localStorage.setItem('lastChecked', checked);

      s.time.innerHTML = timeDifference;
    },

    count() {
      let count = localStorage.getItem('count');

      if (count) {
        count = parseInt(count, 10) + 1;
        localStorage.setItem('count', count);
      } else {
        count = 1;
        localStorage.setItem('count', count);
      }

      s.count.innerHTML = count;
    },

    cryptocurrency(currency, idx) {
      const currencyFormat = currency.toLowerCase();

      axios.get(`https://api.coinbase.com/v2/prices/${currency}-USD/buy`, { 'headers': { 'CB-VERSION': s.versionDate } })
        .then(response => {
          const lastValue = localStorage.getItem(`${currencyFormat}LastValue`);
          const currentValue = response.data.data.amount;

          if (lastValue) {
            const image = s.image[idx].getElementsByTagName('img')[0];
            let changeValue = Number(lastValue - currentValue).toFixed(2);

            if (changeValue > 0) {
              image.src = 'assets/images/positive.png';
            } else if (changeValue < 0) {
              image.src = 'assets/images/negative.png';
            } else {
              image.src = 'assets/images/neutral.png';
            }

            changeValue = changeValue < 0 ? `–$${Math.abs(changeValue)}` : `$${changeValue}`;
            s.container[idx].innerHTML = changeValue;
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
