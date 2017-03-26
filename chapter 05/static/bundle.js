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
/***/ function(module, exports) {

	
	
	// var reactval = React.createClass({
	//   render: function() {
	//     // return <Tweet />;
	//     return ('<form> <div className="input-field"><textarea className="materialize-textarea" /> <label>How you doing?</label><button className="btn right">Tweet now</button></div></form>'
	//     );
	//   }
	// });
	// import React from 'react';
	//
	// var React = require("react");
	class Main extends React.Component {
	  render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Hello'
	    );
	  }
	}
	
	let documentReady = () => {
	  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map