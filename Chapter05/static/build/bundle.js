/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./static/main.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tweet = __webpack_require__(/*! ./components/Tweet */ 1);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	var _TweetList = __webpack_require__(/*! ./components/TweetList */ 2);
	
	var _TweetList2 = _interopRequireDefault(_TweetList);
	
	var _reactCookie = __webpack_require__(/*! react-cookie */ 4);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.state = { userId: _reactCookie2.default.load('session') };
	    _this.state = { tweets: [] };
	    return _this;
	  }
	  // function to post tweets
	
	
	  _createClass(Main, [{
	    key: "addTweet",
	    value: function addTweet(tweet) {
	      var self = this;
	      $.ajax({
	        url: '/api/v2/tweets',
	        contentType: 'application/json',
	        type: 'POST',
	        data: JSON.stringify({
	          'username': "Saussiona55",
	          'body': tweet
	        }),
	        success: function success() {
	          alert("success");
	          var newTweetList = self.state.tweets;
	          newTweetList.unshift({ tweetedby: "Saussiona55", body: tweet, timestamp: Date.now });
	          self.setState({ tweets: newTweetList });
	          return;
	        },
	        error: function error() {
	          return console.log("Failed");
	        }
	      });
	    }
	    // function to pull tweets
	
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var self = this;
	      $.getJSON('/api/v2/tweets', function (tweetModels) {
	        var t = tweetModels;
	        // var t = $.map(tweetModels, function(item) {
	        //     return item;
	        //  });
	        alert(t);
	        self.setState({ tweets: t });
	      });
	
	      // $.ajax("/api/v2/tweets")
	      // //  .success(data => this.setState({tweets: data}))
	      //  .success(alert(data))
	      //  .error(error => console.log(error));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_Tweet2.default, { sendTweet: this.addTweet.bind(this) }),
	        React.createElement(_TweetList2.default, { tweet: this.state.tweets })
	      );
	    }
	  }]);
	
	  return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!*************************************!*\
  !*** ./static/components/Tweet.jsx ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);
	
	  function Tweet() {
	    _classCallCheck(this, Tweet);
	
	    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
	  }
	
	  _createClass(Tweet, [{
	    key: "sendTweet",
	    value: function sendTweet(event) {
	      event.preventDefault();
	      this.props.sendTweet(this.refs.tweetTextArea.value);
	      this.refs.tweetTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "nav",
	          null,
	          React.createElement(
	            "div",
	            { className: "nav-wrapper" },
	            React.createElement(
	              "a",
	              { href: "#", className: "brand-logo" },
	              "APP"
	            ),
	            React.createElement(
	              "ul",
	              { id: "nav-mobile", className: "right hide-on-med-and-down" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/profile" },
	                  "Profile"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/logout" },
	                  "Logout"
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "form",
	          { onSubmit: this.sendTweet.bind(this) },
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "How you doing?"
	            ),
	            React.createElement(
	              "button",
	              { className: "btn waves-effect waves-light right" },
	              "Tweet now ",
	              React.createElement(
	                "i",
	                { className: "material-icons right" },
	                "send"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Tweet;
	}(React.Component);
	
	exports.default = Tweet;

/***/ },
/* 2 */
/*!*****************************************!*\
  !*** ./static/components/TweetList.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templatetweet = __webpack_require__(/*! ./templatetweet */ 3);
	
	var _templatetweet2 = _interopRequireDefault(_templatetweet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweetList = function (_React$Component) {
	  _inherits(TweetList, _React$Component);
	
	  function TweetList() {
	    _classCallCheck(this, TweetList);
	
	    return _possibleConstructorReturn(this, (TweetList.__proto__ || Object.getPrototypeOf(TweetList)).apply(this, arguments));
	  }
	
	  _createClass(TweetList, [{
	    key: "render",
	    value: function render() {
	      var tweetlist = this.props.tweet.map(function (tweet) {
	        return React.createElement(_templatetweet2.default, _extends({ key: tweet.timestamp }, tweet));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          tweetlist
	        )
	      );
	    }
	  }]);
	
	  return TweetList;
	}(React.Component);
	
	exports.default = TweetList;

/***/ },
/* 3 */
/*!*********************************************!*\
  !*** ./static/components/templatetweet.jsx ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweettemplate = function (_React$Component) {
	  _inherits(Tweettemplate, _React$Component);
	
	  function Tweettemplate() {
	    _classCallCheck(this, Tweettemplate);
	
	    return _possibleConstructorReturn(this, (Tweettemplate.__proto__ || Object.getPrototypeOf(Tweettemplate)).apply(this, arguments));
	  }
	
	  _createClass(Tweettemplate, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement(
	          "i",
	          { className: "material-icons circle red" },
	          "play_arrow"
	        ),
	        React.createElement(
	          "span",
	          { className: "title" },
	          this.props.tweetedby
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.body
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.timestamp
	        )
	      );
	    }
	  }]);
	
	  return Tweettemplate;
	}(React.Component);
	
	exports.default = Tweettemplate;

/***/ },
/* 4 */
/*!****************************************!*\
  !*** ./~/react-cookie/build/cookie.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.load = load;
	exports.select = select;
	exports.save = save;
	exports.remove = remove;
	exports.setRawCookie = setRawCookie;
	exports.plugToRequest = plugToRequest;
	
	var _cookie = __webpack_require__(/*! cookie */ 5);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 6);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _isNode = __webpack_require__(/*! is-node */ 7);
	
	var _isNode2 = _interopRequireDefault(_isNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _rawCookie = {};
	var _res = undefined;
	
	function _isResWritable() {
	  return _res && !_res.headersSent;
	}
	
	function load(name, doNotParse, opt) {
	  var cookies = _isNode2.default ? _rawCookie : _cookie2.default.parse(document.cookie, opt);
	  var cookieVal = cookies && cookies[name];
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (e) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = _isNode2.default ? _rawCookie : _cookie2.default.parse(document.cookie);
	
	  if (!cookies) {
	    return {};
	  }
	
	  if (!regex) {
	    return cookies;
	  }
	
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) {
	      return accumulator;
	    }
	
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return (0, _objectAssign2.default)({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (!_isNode2.default) {
	    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    var expressOpt = _extends({}, opt);
	    if (expressOpt.maxAge) {
	      // the standard for maxAge is seconds but express uses milliseconds
	      expressOpt.maxAge = opt.maxAge * 1000;
	    }
	
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = (0, _objectAssign2.default)({}, opt);
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    opt.maxAge = 0;
	    document.cookie = _cookie2.default.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = _cookie2.default.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	exports.default = {
	  setRawCookie: setRawCookie,
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  plugToRequest: plugToRequest
	};

/***/ },
/* 5 */
/*!******************************************!*\
  !*** ./~/react-cookie/~/cookie/index.js ***!
  \******************************************/
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;
	
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var str = name + '=' + value;
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    str += '; Domain=' + opt.domain;
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    str += '; Path=' + opt.path;
	  }
	
	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }
	
	    str += '; Expires=' + opt.expires.toUTCString();
	  }
	
	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }
	
	  if (opt.secure) {
	    str += '; Secure';
	  }
	
	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;
	
	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }
	
	  return str;
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 6 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 7 */
/*!****************************!*\
  !*** ./~/is-node/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
	'use strict';
	
	exports = module.exports = !!(typeof process !== 'undefined' && process.versions && process.versions.node);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 8)))

/***/ },
/* 8 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map