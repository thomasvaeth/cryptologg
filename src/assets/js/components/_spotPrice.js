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
        cryptocurrency: 'BTC,ETH,LTC',
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
      this.cryptocurrency();
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

    cryptocurrency() {
      axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${s.cryptocurrency}&tsyms=USD`)
        .then(response => {
          let idx = 0;

          for (const currency in response.data) {
            if (response.data.hasOwnProperty(currency)) {
              const currencyFormat = currency.toLowerCase();
              const lastValue = localStorage.getItem(`${currencyFormat}LastValue`);
              const currentValue = response.data[currency].USD;

              if (lastValue) {
                const image = s.image[idx].getElementsByTagName('img')[0];
                const changeValue = Number(lastValue - currentValue).toFixed(2);

                if (changeValue > 0) {
                  image.src = 'assets/images/positive.png';
                } else if (changeValue < 0) {
                  image.src = 'assets/images/negative.png';
                } else {
                  image.src = 'assets/images/neutral.png';
                }

                s.container[idx].innerHTML = changeValue < 0 ? `–$${Number(Math.abs(changeValue)).toFixed(2)}` : `$${changeValue}`;
                idx++;
              }

              localStorage.setItem(`${currencyFormat}LastValue`, currentValue);
            }
          }
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
