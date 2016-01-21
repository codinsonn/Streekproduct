/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(5);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _pagesOnepager = __webpack_require__(2);\n\nvar _pagesOnepager2 = _interopRequireDefault(_pagesOnepager);\n\nvar onepager = undefined;\n\nvar $burger = document.querySelector('.burger');\nvar $menu = document.querySelector('.menu');\n\nvar init = function init() {\n\n  $burger.addEventListener('click', function (e) {\n    return toggleMenu(e);\n  });\n\n  initCurrentPage();\n};\n\nvar initCurrentPage = function initCurrentPage() {\n\n  switch (document.querySelector('.active').getAttribute('href')) {\n\n    case '#intro':\n    case '#cadeaus':\n    case '#win':\n    default:\n      console.log('[Script] Intialising Onepager...');\n      onepager = new _pagesOnepager2['default']();\n      onepager.init();\n      break;\n\n  }\n};\n\nvar toggleMenu = function toggleMenu() {\n\n  if ($burger.className === 'burger closed') {\n    $burger.className = 'burger open';\n    $menu.className = 'menu open';\n  } else {\n    $burger.className = 'burger closed';\n    $menu.className = 'menu closed';\n  }\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar _helpersUtil = __webpack_require__(3);\n\nvar Onepager = (function () {\n  function Onepager() {\n    var _this = this;\n\n    _classCallCheck(this, Onepager);\n\n    // -- Class Variables -------------\n    this.scrolling = false;\n    this.stateObj = { hash: '#' };\n\n    // -- Element Variables -----------\n    this.$links = document.querySelectorAll('.menu a');\n    this.$pageSections = document.querySelectorAll('.pageSection');\n\n    // -- Event Listeners -------------\n    window.addEventListener('scroll', function (e) {\n      return _this.checkCurrentSection(e);\n    });\n    for (var i = 0; i < this.$links.length; i++) {\n      this.$links[i].addEventListener('click', function (e) {\n        return _this.checkAnchorAndScroll(e);\n      });\n    }\n  }\n\n  _createClass(Onepager, [{\n    key: 'init',\n    value: function init() {\n\n      // Updates 'a.active' when refreshing once scrolling has taken place.\n      this.checkCurrentSection();\n    }\n  }, {\n    key: 'checkCurrentSection',\n    value: function checkCurrentSection() {\n\n      if (this.scrolling === false) {\n        for (var i = 0; i < this.$pageSections.length; i++) {\n\n          var checkOffset = this.$pageSections[i].offsetTop + this.$pageSections[i].clientHeight - 140;\n          if ((0, _helpersUtil.getTopOffset)() >= this.$pageSections[i].offsetTop - 100 && (0, _helpersUtil.getTopOffset)() <= checkOffset) {\n            this.setActiveLinks('#' + this.$pageSections[i].getAttribute('id'));\n            history.pushState(this.stateObj, this.$pageSections[i].getAttribute('id'), '#' + this.$pageSections[i].getAttribute('id'));\n          }\n        }\n      }\n    }\n  }, {\n    key: 'checkAnchorAndScroll',\n    value: function checkAnchorAndScroll(e) {\n      var _this2 = this;\n\n      var $link = e.currentTarget;\n      var href = $link.getAttribute('href');\n\n      if (href.substr(0, 1) === '#') {\n\n        e.preventDefault();\n\n        var target = document.querySelector('#' + href.substr(1, href.length));\n\n        this.setActiveLinks(href);\n\n        this.scrolling = true;\n        (0, _helpersUtil.animate)(document.documentElement, 'scrollTop', '', (0, _helpersUtil.getTopOffset)(), target.offsetTop - 8, 600, true);\n        setTimeout(function () {\n          _this2.scrolling = false;\n        }, 580);\n      }\n    }\n  }, {\n    key: 'setActiveLinks',\n    value: function setActiveLinks(href) {\n\n      for (var i = 0; i < this.$links.length; i++) {\n        if (this.$links[i].getAttribute('href') === href) {\n          this.$links[i].className = 'active';\n        } else {\n          this.$links[i].className = '';\n        }\n      }\n    }\n  }]);\n\n  return Onepager;\n})();\n\nexports['default'] = Onepager;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/pages/Onepager.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/pages/Onepager.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\n__webpack_require__(4);\n\nvar html = function html(strings) {\n  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    values[_key - 1] = arguments[_key];\n  }\n\n  var str = '';\n\n  if (Array.isArray(strings)) {\n    for (var i = 0; i < strings.length; i++) {\n      if (strings[i]) str += strings[i];\n      if (values[i]) str += values[i];\n    }\n  } else {\n    str = strings;\n  }\n\n  var doc = new DOMParser().parseFromString(str.trim(), 'text/html');\n\n  return doc.body.firstChild;\n};\n\nexports.html = html;\nvar prepend = function prepend($parent, $element) {\n\n  var $first = $parent.children[0];\n  $parent.insertBefore($element, $first);\n};\n\nexports.prepend = prepend;\nvar getTopOffset = function getTopOffset() {\n\n  var topOffset = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);\n  return topOffset;\n};\n\nexports.getTopOffset = getTopOffset;\nvar animate = function animate(elem, style, unit, from, to, time, prop) {\n\n  if (!elem) return;\n\n  var start = new Date().getTime();\n  var timer = setInterval(function () {\n\n    var step = Math.min(1, (new Date().getTime() - start) / time);\n\n    if (prop) {\n      elem[style] = from + step * (to - from) + unit;\n    } else {\n      elem.style[style] = from + step * (to - from) + unit;\n    }\n\n    if (step === 1) clearInterval(timer);\n  }, 25);\n\n  elem.style[style] = from + unit;\n};\n\nexports.animate = animate;\nvar removeByClassName = function removeByClassName(selector) {\n\n  var $element = document.querySelector(selector);\n  $element.parentNode.removeChild($element);\n};\n\nexports.removeByClassName = removeByClassName;\nvar httpGet = function httpGet(theUrl) {\n\n  var xmlHttp = new XMLHttpRequest();\n  xmlHttp.open('GET', theUrl, false); // false for synchronous request\n  xmlHttp.send(null);\n  return xmlHttp.responseText;\n};\n\nexports.httpGet = httpGet;\nvar httpGetAsync = function httpGetAsync(theUrl, callback) {\n\n  var xmlHttp = new XMLHttpRequest();\n  xmlHttp.onreadystatechange = function () {\n\n    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {\n      callback(xmlHttp.responseText);\n    }\n  };\n\n  xmlHttp.open('GET', theUrl, true); // true for asynchronous\n  xmlHttp.send(null);\n};\n\nexports.httpGetAsync = httpGetAsync;\nvar $ = function $(selector) {\n\n  var result = undefined;\n\n  if (selector === 'body') {\n    return document.body;\n  } else if (selector === 'head') {\n    return document.head;\n  } else if (/^[\\#.]?[\\w-]+$/.test(selector)) {\n\n    if (selector[0] === '#') {\n      return document.getElementById(selector.slice(1));\n    } else if (selector[0] === '.') {\n      result = document.getElementsByClassName(selector.slice(1));\n    } else {\n      result = document.getElementsByTagName(selector);\n    }\n  } else {\n    result = document.querySelectorAll(selector);\n  }\n\n  var elements = [].concat(_toConsumableArray(result));\n  if (elements.length === 1) return elements[0];\n  return elements;\n};\nexports.$ = $;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/helpers/util.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/helpers/util.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("/*! http://mths.be/array-from v0.2.0 by @mathias */\nif (!Array.from) {\n\t(function() {\n\t\t'use strict';\n\t\tvar defineProperty = (function() {\n\t\t\t// IE 8 only supports `Object.defineProperty` on DOM elements.\n\t\t\ttry {\n\t\t\t\tvar object = {};\n\t\t\t\tvar $defineProperty = Object.defineProperty;\n\t\t\t\tvar result = $defineProperty(object, object, object) && $defineProperty;\n\t\t\t} catch(error) {}\n\t\t\treturn result || function put(object, key, descriptor) {\n\t\t\t\tobject[key] = descriptor.value;\n\t\t\t};\n\t\t}());\n\t\tvar toStr = Object.prototype.toString;\n\t\tvar isCallable = function(fn) {\n\t\t\t// In a perfect world, the `typeof` check would be sufficient. However,\n\t\t\t// in Chrome 1–12, `typeof /x/ == 'object'`, and in IE 6–8\n\t\t\t// `typeof alert == 'object'` and similar for other host objects.\n\t\t\treturn typeof fn == 'function' || toStr.call(fn) == '[object Function]';\n\t\t};\n\t\tvar toInteger = function(value) {\n\t\t\tvar number = Number(value);\n\t\t\tif (isNaN(number)) {\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t\tif (number == 0 || !isFinite(number)) {\n\t\t\t\treturn number;\n\t\t\t}\n\t\t\treturn (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n\t\t};\n\t\tvar maxSafeInteger = Math.pow(2, 53) - 1;\n\t\tvar toLength = function(value) {\n\t\t\tvar len = toInteger(value);\n\t\t\treturn Math.min(Math.max(len, 0), maxSafeInteger);\n\t\t};\n\t\tvar from = function(arrayLike) {\n\t\t\tvar C = this;\n\t\t\tif (arrayLike == null) {\n\t\t\t\tthrow new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');\n\t\t\t}\n\t\t\tvar items = Object(arrayLike);\n\t\t\tvar mapping = arguments.length > 1;\n\n\t\t\tvar mapFn, T;\n\t\t\tif (arguments.length > 1) {\n\t\t\t\tmapFn = arguments[1];\n\t\t\t\tif (!isCallable(mapFn)) {\n\t\t\t\t\tthrow new TypeError('When provided, the second argument to `Array.from` must be a function');\n\t\t\t\t}\n\t\t\t\tif (arguments.length > 2) {\n\t\t\t\t\tT = arguments[2];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvar len = toLength(items.length);\n\t\t\tvar A = isCallable(C) ? Object(new C(len)) : new Array(len);\n\t\t\tvar k = 0;\n\t\t\tvar kValue, mappedValue;\n\t\t\twhile (k < len) {\n\t\t\t\tkValue = items[k];\n\t\t\t\tif (mapFn) {\n\t\t\t\t\tmappedValue = typeof T == 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);\n\t\t\t\t} else {\n\t\t\t\t\tmappedValue = kValue;\n\t\t\t\t}\n\t\t\t\tdefineProperty(A, k, {\n\t\t\t\t\t'value': mappedValue,\n\t\t\t\t\t'configurable': true,\n\t\t\t\t\t'enumerable': true\n\t\t\t\t});\n\t\t\t\t++k;\n\t\t\t}\n\t\t\tA.length = len;\n\t\t\treturn A;\n\t\t};\n\t\tdefineProperty(Array, 'from', {\n\t\t\t'value': from,\n\t\t\t'configurable': true,\n\t\t\t'writable': true\n\t\t});\n\t}());\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/array.from/array-from.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/array.from/array-from.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);