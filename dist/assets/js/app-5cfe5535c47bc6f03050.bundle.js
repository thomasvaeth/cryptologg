webpackJsonp([1],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(155);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(181);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------
// Render
// ----------------------------------------------
// ----------------------------------------------
// Imports
// ----------------------------------------------
_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('cryptologg'));

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(156);

var _Header2 = _interopRequireDefault(_Header);

var _Mast = __webpack_require__(157);

var _Mast2 = _interopRequireDefault(_Mast);

var _Crypto = __webpack_require__(158);

var _Crypto2 = _interopRequireDefault(_Crypto);

var _Time = __webpack_require__(177);

var _Time2 = _interopRequireDefault(_Time);

var _Popup = __webpack_require__(18);

var _Popup2 = _interopRequireDefault(_Popup);

var _Footer = __webpack_require__(180);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------
// Imports
// ----------------------------------------------


// ----------------------------------------------
// App
// ----------------------------------------------
var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(_Mast2.default, null),
          _react2.default.createElement(_Crypto2.default, null),
          _react2.default.createElement(_Time2.default, null),
          _react2.default.createElement(_Popup2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

// ----------------------------------------------
// Exports
// ----------------------------------------------


exports.default = App;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Popup = __webpack_require__(18);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------
// Imports
// ----------------------------------------------


// ----------------------------------------------
// Header
// ----------------------------------------------
var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.toggleAbout = _this.toggleAbout.bind(_this);

    _this.logo = ['chart-down', 'chart-up'][Math.floor(Math.random() * 2)];
    return _this;
  }

  _createClass(Header, [{
    key: 'toggleAbout',
    value: function toggleAbout() {
      this.refs.popup.togglePopup();
    }
  }, {
    key: 'render',
    value: function render() {
      var popupLeft = _react2.default.createElement(
        'span',
        { className: 'popup__emoji' },
        '\uD83D\uDE4B\u200D\u2642\uFE0F'
      );
      var popupRight = _react2.default.createElement(
        'p',
        { className: 'popup__text' },
        'CryptoLogg was built by ',
        _react2.default.createElement(
          'a',
          { className: 'popup__link', href: 'http://thomasvaeth.com', target: '_blank' },
          'Thomas Vaeth'
        ),
        ' in Seattle, Washington. Thomas was feeling losses significantly more than gains and CryptoLogg is his way of coming to grip with his emotional liability.'
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'header' },
          _react2.default.createElement(
            'figure',
            { className: 'header__img' },
            _react2.default.createElement('img', { src: 'assets/images/' + this.logo + '.png', alt: 'CryptoLogg' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'header__popup', onClick: this.toggleAbout },
            'About'
          )
        ),
        _react2.default.createElement(_Popup2.default, { ref: 'popup', leftContent: popupLeft, rightContent: popupRight })
      );
    }
  }]);

  return Header;
}(_react.Component);

// ----------------------------------------------
// Exports
// ----------------------------------------------


exports.default = Header;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------
// Mast
// ----------------------------------------------
var Mast = function Mast() {
  return _react2.default.createElement(
    "section",
    { className: "mast section-padding" },
    _react2.default.createElement(
      "div",
      { className: "grid" },
      _react2.default.createElement(
        "p",
        { className: "mast__text" },
        "CryptoLogg only shows the price change of cryptocurrencies since the last time you checked. This is to discourage you from checking the values of your investments often. \uD83D\uDCB8"
      )
    )
  );
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
// ----------------------------------------------
// Imports
// ----------------------------------------------
exports.default = Mast;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------
// Imports
// ----------------------------------------------


// ----------------------------------------------
// Crypto
// ----------------------------------------------
var Crypto = function (_Component) {
  _inherits(Crypto, _Component);

  function Crypto(props) {
    _classCallCheck(this, Crypto);

    var _this = _possibleConstructorReturn(this, (Crypto.__proto__ || Object.getPrototypeOf(Crypto)).call(this, props));

    _this.state = {
      crypto: {},
      currency: true
    };

    _this.toggleCurrency = _this.toggleCurrency.bind(_this);

    _this.crypto = 'BTC,ETH,BCH,XRP,LTC,IOT';
    _this.cryptoArr = ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Ripple', 'Litecoin', 'IOTA'];
    return _this;
  }

  _createClass(Crypto, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var currency = localStorage.getItem('currency');

      if (currency !== null) {
        this.setState({ currency: JSON.parse(currency) });
      }

      this.spotPrice(this.crypto);

      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          _this2.spotPrice(_this2.crypto);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      localStorage.setItem('currency', this.state.currency);
    }
  }, {
    key: 'spotPrice',
    value: function spotPrice(currency) {
      var _this3 = this;

      _axios2.default.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + currency + '&tsyms=USD').then(function (response) {
        var data = response.data;
        var obj = {};

        Object.keys(data).map(function (value, idx) {
          var currencyFormat = value.toLowerCase();
          var currentValue = data[value].USD;

          obj[value] = {
            lastValue: localStorage.getItem(currencyFormat + 'LastValue'),
            currentValue: currentValue,
            title: _this3.cryptoArr[idx]
          };

          localStorage.setItem(currencyFormat + 'LastValue', currentValue);
        });

        _this3.setState({ crypto: obj });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'marketChange',
    value: function marketChange() {
      var _this4 = this;

      var getEmoji = function getEmoji(emojiArr) {
        return emojiArr[Math.floor(Math.random() * emojiArr.length)];
      };
      var toCurrency = function toCurrency(num) {
        return '$' + Number(Math.abs(num)).toFixed(2);
      };
      var toPercentage = function toPercentage(num) {
        return Number(Math.abs(num)).toFixed(4) + '%';
      };

      var positiveEmoji = ['🤑', '😎', '😋', '😍'];
      var neutralEmoji = ['🤔', '😶', '🙃'];
      var negativeEmoji = ['😵', '😥', '🤢', '🙄', '😤'];

      return Object.keys(this.state.crypto).map(function (value) {
        var crypto = _this4.state.crypto[value];
        var lastValue = crypto.lastValue;
        var currentValue = crypto.currentValue;
        var title = crypto.title;
        var emoji = '';
        var text = '';

        if (!crypto.lastValue) {
          var firstVisitEmoji = getEmoji(positiveEmoji);
          var firstVisitText = _this4.state.currency ? toCurrency(crypto.currentValue) : 'Infinity%';

          return _this4.cards(value, firstVisitEmoji, title, firstVisitText);
        }

        var changeValue = _this4.state.currency ? currentValue - lastValue : (currentValue - lastValue) / lastValue * 100;

        if (changeValue > 0) {
          emoji = getEmoji(positiveEmoji);
          text = _this4.state.currency ? toCurrency(changeValue) : toPercentage(changeValue);
        } else if (changeValue < 0) {
          emoji = getEmoji(negativeEmoji);
          text = _this4.state.currency ? '\u2013' + toCurrency(changeValue) : '\u2013' + toPercentage(changeValue);
        } else {
          emoji = getEmoji(neutralEmoji);
          text = _this4.state.currency ? '$0.00' : '0%';
        }

        return _this4.cards(value, emoji, title, text);
      });
    }
  }, {
    key: 'cards',
    value: function cards(value, emoji, title, text) {
      return _react2.default.createElement(
        'div',
        { className: 'crypto__subcontainer', key: value },
        _react2.default.createElement(
          'div',
          { className: 'crypto__content' },
          _react2.default.createElement(
            'span',
            { className: 'crypto__emoji' },
            emoji
          ),
          _react2.default.createElement(
            'h2',
            { className: 'crypto__title' },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: 'crypto__value', onClick: this.toggleCurrency },
            text
          )
        )
      );
    }
  }, {
    key: 'toggleCurrency',
    value: function toggleCurrency() {
      this.setState(function (prevState) {
        return {
          currency: !prevState.currency
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'crypto section-padding' },
        _react2.default.createElement(
          'div',
          { className: 'grid-xlarge' },
          _react2.default.createElement(
            'div',
            { className: 'crypto__container' },
            this.marketChange()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'crypto__format' },
          _react2.default.createElement(
            'span',
            { className: 'crypto__button ' + (this.state.currency ? 'active' : ''), onClick: this.toggleCurrency },
            _react2.default.createElement(
              'span',
              null,
              '$'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'crypto__button ' + (!this.state.currency ? 'active' : ''), onClick: this.toggleCurrency },
            _react2.default.createElement(
              'span',
              null,
              '%'
            )
          )
        )
      );
    }
  }]);

  return Crypto;
}(_react.Component);

// ----------------------------------------------
// Exports
// ----------------------------------------------


exports.default = Crypto;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------
// Imports
// ----------------------------------------------


// ----------------------------------------------
// Time
// ----------------------------------------------
var Time = function (_Component) {
  _inherits(Time, _Component);

  function Time(props) {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

    _this.state = { time: 'a few seconds' };

    _this.time = _this.time.bind(_this);
    return _this;
  }

  _createClass(Time, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.time();

      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          _this2.time();
        }
      });
    }
  }, {
    key: 'time',
    value: function time() {
      var checked = (0, _moment2.default)().toISOString();
      var lastChecked = localStorage.getItem('lastChecked');
      var timeDifference = _moment2.default.duration((0, _moment2.default)(checked).diff((0, _moment2.default)(lastChecked))).humanize();

      localStorage.setItem('lastChecked', checked);

      this.setState({ time: lastChecked ? timeDifference : this.state.time });
    }
  }, {
    key: 'quote',
    value: function quote() {
      var quotes = [{
        author: 'Warren Buffet',
        quote: 'Buy, hold, and don\'t watch the market closely'
      }, {
        author: 'Nicholas Taleb',
        quote: 'Over a short time increment, one observes the variability of the portfolio, not the returns'
      }, {
        author: 'Allan Mecham',
        quote: 'Continual performance monitoring is not good for your mental health or for your portfolio’s well-being'
      }, {
        author: 'Nicholas Taleb',
        quote: 'Daily exposure to such high degrees of randomness without much control will have physiological effects on humans'
      }, {
        author: 'Daniel Kahneman',
        quote: 'Losses look larger than gains'
      }, {
        author: 'Allan Mecham',
        quote: 'Almost all investors experience more pain and anguish from losses than they do pleasure from gains'
      }];

      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  }, {
    key: 'render',
    value: function render() {
      var quote = this.quote();

      return _react2.default.createElement(
        'section',
        { className: 'time section-padding' },
        _react2.default.createElement(
          'div',
          { className: 'grid' },
          _react2.default.createElement(
            'p',
            { className: 'time__text' },
            quote.author,
            ' said, \u201C',
            quote.quote,
            ',\u201D but the last time you checked your portfolio was ',
            this.state.time,
            ' ago. \u23F3'
          )
        )
      );
    }
  }]);

  return Time;
}(_react.Component);

// ----------------------------------------------
// Exports
// ----------------------------------------------


exports.default = Time;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----------------------------------------------
// Imports
// ----------------------------------------------


// ----------------------------------------------
// Popup
// ----------------------------------------------
var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.state = { popup: false };

    _this.togglePopup = _this.togglePopup.bind(_this);
    return _this;
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('keyup', function (e) {
        if (_this2.state.popup && e.which === 27) {
          _this2.togglePopup();
        }
      });

      this.popup.addEventListener('click', function (e) {
        if (!_this2.popupContainer.contains(e.target)) {
          _this2.togglePopup();
        }
      });
    }
  }, {
    key: 'togglePopup',
    value: function togglePopup() {
      this.setState(function (prevState) {
        return {
          popup: !prevState.popup
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'popup ' + (this.state.popup ? 'popup-open' : ''), ref: function ref(popup) {
              return _this3.popup = popup;
            } },
          _react2.default.createElement(
            'div',
            { className: 'popup__close' },
            _react2.default.createElement('div', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'popup__container', ref: function ref(popupContainer) {
                return _this3.popupContainer = popupContainer;
              } },
            _react2.default.createElement(
              'div',
              { className: 'popup__subcontainer section-padding' },
              this.props.leftContent
            ),
            _react2.default.createElement(
              'div',
              { className: 'popup__content' },
              this.props.rightContent
            )
          )
        )
      );
    }
  }]);

  return Popup;
}(_react.Component);

// ----------------------------------------------
// Exports
// ----------------------------------------------


exports.default = Popup;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------
// Footer
// ----------------------------------------------
// ----------------------------------------------
// Imports
// ----------------------------------------------
var Footer = function Footer() {
  var year = (0, _moment2.default)().year();

  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'span',
      { className: 'footer__text' },
      'Coded With Code in ',
      year,
      '. \uD83D\uDC68\u200D\uD83D\uDCBB'
    )
  );
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
exports.default = Footer;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[143]);