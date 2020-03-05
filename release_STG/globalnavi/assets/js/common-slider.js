/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js")({});


/***/ }),

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.js":
/*!***********************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                  || (slideAfter > 0 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      if (currentDirection === 'vertical') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "vertical wp8-vertical"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }
      if (currentDirection === 'horizontal') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "horizontal wp8-horizontal"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || false));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

}));


/***/ }),

/***/ "./resources/assets/js/common-slider.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/common-slider.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./resources/assets/js/components/slider.js");
 // SUMIKA , ITADAKI, AND DOKIDOKI TOP SLIDER

Object(_components_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
  id: 'commonSlider',
  // REQUIRED
  target: '.js-slider',
  // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}); // SUMIKA , ITADAKI, AND DOKIDOKI BOTTOM SLIDER
// slider({
//   id: 'commonSliderBottom', // REQUIRED
//   target: '.js-slider-bottom', // REQUIRED
// })
// slider({
//   id: 'commonSlider', // REQUIRED
//   target: '.js-slider-craft', // REQUIRED
//   options: {
// 		slidesPerView: 3,
// 		spaceBetween: 60,
// 		breakpoints: {
// 			1280: {
// 				slidesPerView: 3,
// 				spaceBetween: 60,
// 			},
//       375: {
//         spaceBetween: 17,
//         slidesPerView: 3,
//       }
//     },
// 	}
// })

Object(_components_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
  id: 'commonSliderBottom',
  // REQUIRED
  target: '.js-slider-bottom',
  // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
});
Object(_components_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
  id: 'commonSliderBottom',
  // REQUIRED
  target: '.js-slider-pickup',
  // REQUIRED
  options: {
    speed: 1500,
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 60,
    centeredSlides: false,
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true
      }
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/slider.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/components/slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);

function slider(params) {
  if (!params.id) return;
  if (!params.target) return;
  var defaultOptions = {
    speed: 1500,
    initialSlide: 2,
    centeredSlides: false,
    breakpoints: {
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 50,
        loopedSlides: 0,
        initialSlide: 1,
        slidesPerGroup: 3
      },
      375: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.5,
        initialSlide: 1,
        loopedSlides: 0,
        loop: true
      }
    },
    on: {
      resize: function resize() {
        this.params.observer = true;
      }
    }
  };
  var config = !params.options ? defaultOptions : params.options;
  params.id = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a(params.target, config);
}

/***/ }),

/***/ 4:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/js/common-slider.js ./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\zzz\repo\LIGPH\twinring_motegi\resources\assets\js\common-slider.js */"./resources/assets/js/common-slider.js");
module.exports = __webpack_require__(/*! C:\zzz\repo\LIGPH\twinring_motegi\node_modules\svg-spritemap-webpack-plugin\svg4everybody-helper.js */"./node_modules/svg-spritemap-webpack-plugin/svg4everybody-helper.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9jb21tb24tc2xpZGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlbWFwLXdlYnBhY2stcGx1Z2luL3N2ZzRldmVyeWJvZHktaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tbW9uLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJyZXF1aXJlKCdzdmc0ZXZlcnlib2R5Jykoe30pO1xuIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7IiwiLyoqXG4gKiBTd2lwZXIgNC41LjBcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL3N3aXBlci9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE5IFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEZlYnJ1YXJ5IDIyLCAyMDE5XG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Td2lwZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogU1NSIFdpbmRvdyAxLjAuMVxuICAgKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxOCwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAgICpcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUXG4gICAqXG4gICAqIFJlbGVhc2VkIG9uOiBKdWx5IDE4LCAyMDE4XG4gICAqL1xuICB2YXIgZG9jID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpID8ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKCkge30sXG4gICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHt9LFxuICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiBpbml0RXZlbnQoKSB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSgpIHt9LFxuICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7IGhhc2g6ICcnIH0sXG4gIH0gOiBkb2N1bWVudDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHZhciB3aW4gPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpID8ge1xuICAgIGRvY3VtZW50OiBkb2MsXG4gICAgbmF2aWdhdG9yOiB7XG4gICAgICB1c2VyQWdlbnQ6ICcnLFxuICAgIH0sXG4gICAgbG9jYXRpb246IHt9LFxuICAgIGhpc3Rvcnk6IHt9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpIHt9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgICBnZXRDb21wdXRlZFN0eWxlOiBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgSW1hZ2U6IGZ1bmN0aW9uIEltYWdlKCkge30sXG4gICAgRGF0ZTogZnVuY3Rpb24gRGF0ZSgpIHt9LFxuICAgIHNjcmVlbjoge30sXG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gc2V0VGltZW91dCgpIHt9LFxuICAgIGNsZWFyVGltZW91dDogZnVuY3Rpb24gY2xlYXJUaW1lb3V0KCkge30sXG4gIH0gOiB3aW5kb3c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAvKipcbiAgICogRG9tNyAyLjEuM1xuICAgKiBNaW5pbWFsaXN0aWMgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBET00gbWFuaXB1bGF0aW9uLCB3aXRoIGEgalF1ZXJ5LWNvbXBhdGlibGUgQVBJXG4gICAqIGh0dHA6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tLmh0bWxcbiAgICpcbiAgICogQ29weXJpZ2h0IDIwMTksIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gICAqIFRoZSBpRGFuZ2Vyby51c1xuICAgKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL1xuICAgKlxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAgICpcbiAgICogUmVsZWFzZWQgb246IEZlYnJ1YXJ5IDExLCAyMDE5XG4gICAqL1xuXG4gIHZhciBEb203ID0gZnVuY3Rpb24gRG9tNyhhcnIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLy8gQ3JlYXRlIGFycmF5LWxpa2Ugb2JqZWN0XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNlbGZbaV0gPSBhcnJbaV07XG4gICAgfVxuICAgIHNlbGYubGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAvLyBSZXR1cm4gY29sbGVjdGlvbiB3aXRoIG1ldGhvZHNcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICBpZiAoc2VsZWN0b3IgJiYgIWNvbnRleHQpIHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgLy8gU3RyaW5nXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWxzO1xuICAgICAgICB2YXIgdGVtcFBhcmVudDtcbiAgICAgICAgdmFyIGh0bWwgPSBzZWxlY3Rvci50cmltKCk7XG4gICAgICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcbiAgICAgICAgICB2YXIgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgeyB0b0NyZWF0ZSA9ICd1bCc7IH1cbiAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dHInKSA9PT0gMCkgeyB0b0NyZWF0ZSA9ICd0Ym9keSc7IH1cbiAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGQnKSA9PT0gMCB8fCBodG1sLmluZGV4T2YoJzx0aCcpID09PSAwKSB7IHRvQ3JlYXRlID0gJ3RyJzsgfVxuICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB7IHRvQ3JlYXRlID0gJ3RhYmxlJzsgfVxuICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzxvcHRpb24nKSA9PT0gMCkgeyB0b0NyZWF0ZSA9ICdzZWxlY3QnOyB9XG4gICAgICAgICAgdGVtcFBhcmVudCA9IGRvYy5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgICAgICB0ZW1wUGFyZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yWzBdID09PSAnIycgJiYgIXNlbGVjdG9yLm1hdGNoKC9bIC48Pjp+XS8pKSB7XG4gICAgICAgICAgICAvLyBQdXJlIElEIHNlbGVjdG9yXG4gICAgICAgICAgICBlbHMgPSBbZG9jLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnRyaW0oKS5zcGxpdCgnIycpWzFdKV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyIHNlbGVjdG9yc1xuICAgICAgICAgICAgZWxzID0gKGNvbnRleHQgfHwgZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnRyaW0oKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChlbHNbaV0pIHsgYXJyLnB1c2goZWxzW2ldKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciA9PT0gd2luIHx8IHNlbGVjdG9yID09PSBkb2MpIHtcbiAgICAgICAgLy8gTm9kZS9lbGVtZW50XG4gICAgICAgIGFyci5wdXNoKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCAmJiBzZWxlY3RvclswXS5ub2RlVHlwZSkge1xuICAgICAgICAvLyBBcnJheSBvZiBlbGVtZW50cyBvciBpbnN0YW5jZSBvZiBEb21cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3JbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhhcnIpO1xuICB9XG5cbiAgJC5mbiA9IERvbTcucHJvdG90eXBlO1xuICAkLkNsYXNzID0gRG9tNztcbiAgJC5Eb203ID0gRG9tNztcblxuICBmdW5jdGlvbiB1bmlxdWUoYXJyKSB7XG4gICAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh1bmlxdWVBcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7IHVuaXF1ZUFycmF5LnB1c2goYXJyW2ldKTsgfVxuICAgIH1cbiAgICByZXR1cm4gdW5pcXVlQXJyYXk7XG4gIH1cblxuICAvLyBDbGFzc2VzIGFuZCBhdHRyaWJ1dGVzXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2pdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7IHRoaXNbal0uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXNbal0uY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykgeyB0aGlzW2pdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tpXSk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF0aGlzWzBdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2pdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7IHRoaXNbal0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc2VzW2ldKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBhdHRyKGF0dHJzLCB2YWx1ZSkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIEdldCBhdHRyXG4gICAgICBpZiAodGhpc1swXSkgeyByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpOyB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIFNldCBhdHRyc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFyZ3VtZW50cyQxLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9iamVjdFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgICB0aGlzW2ldW2F0dHJOYW1lXSA9IGF0dHJzW2F0dHJOYW1lXTtcbiAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cihhdHRyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVsO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbCA9IHRoaXNbMF07XG4gICAgICAvLyBHZXQgdmFsdWVcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiAoa2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhS2V5ID0gZWwuZ2V0QXR0cmlidXRlKChcImRhdGEtXCIgKyBrZXkpKTtcbiAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YUtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBTZXQgdmFsdWVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGVsID0gdGhpc1tpXTtcbiAgICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgeyBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlID0ge307IH1cbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvLyBUcmFuc2Zvcm1zXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICBlbFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIGVsU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gKyBcIm1zXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gRXZlbnRzXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHZhciBhc3NpZ247XG5cbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgdmFyIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXTtcbiAgICB2YXIgbGlzdGVuZXIgPSBhcmdzWzJdO1xuICAgIHZhciBjYXB0dXJlID0gYXJnc1szXTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIChhc3NpZ24gPSBhcmdzLCBldmVudFR5cGUgPSBhc3NpZ25bMF0sIGxpc3RlbmVyID0gYXNzaWduWzFdLCBjYXB0dXJlID0gYXNzaWduWzJdKTtcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIWNhcHR1cmUpIHsgY2FwdHVyZSA9IGZhbHNlOyB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMaXZlRXZlbnQoZSkge1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgZXZlbnREYXRhID0gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXTtcbiAgICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgICB9XG4gICAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgeyBsaXN0ZW5lci5hcHBseSh0YXJnZXQsIGV2ZW50RGF0YSk7IH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwYXJlbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgICAgaWYgKCQocGFyZW50c1trXSkuaXModGFyZ2V0U2VsZWN0b3IpKSB7IGxpc3RlbmVyLmFwcGx5KHBhcmVudHNba10sIGV2ZW50RGF0YSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgICB2YXIgZXZlbnREYXRhID0gZSAmJiBlLnRhcmdldCA/IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW10gOiBbXTtcbiAgICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudERhdGEpO1xuICAgIH1cbiAgICB2YXIgZXZlbnRzID0gZXZlbnRUeXBlLnNwbGl0KCcgJyk7XG4gICAgdmFyIGo7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzW2ldO1xuICAgICAgaWYgKCF0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVycykgeyBlbC5kb203TGlzdGVuZXJzID0ge307IH1cbiAgICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdKSB7IGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdID0gW107IH1cbiAgICAgICAgICBlbC5kb203TGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTGl2ZSBldmVudHNcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHZhciBldmVudCQxID0gZXZlbnRzW2pdO1xuICAgICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIHsgZWwuZG9tN0xpdmVMaXN0ZW5lcnMgPSB7fTsgfVxuICAgICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnQkMV0pIHsgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnQkMV0gPSBbXTsgfVxuICAgICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50JDFdLnB1c2goe1xuICAgICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgICAgcHJveHlMaXN0ZW5lcjogaGFuZGxlTGl2ZUV2ZW50LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQkMSwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgdmFyIGFzc2lnbjtcblxuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXTtcbiAgICB2YXIgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdO1xuICAgIHZhciBsaXN0ZW5lciA9IGFyZ3NbMl07XG4gICAgdmFyIGNhcHR1cmUgPSBhcmdzWzNdO1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKGFzc2lnbiA9IGFyZ3MsIGV2ZW50VHlwZSA9IGFzc2lnblswXSwgbGlzdGVuZXIgPSBhc3NpZ25bMV0sIGNhcHR1cmUgPSBhc3NpZ25bMl0pO1xuICAgICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICghY2FwdHVyZSkgeyBjYXB0dXJlID0gZmFsc2U7IH1cblxuICAgIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXNbal07XG4gICAgICAgIHZhciBoYW5kbGVycyA9ICh2b2lkIDApO1xuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXN0ZW5lcnMpIHtcbiAgICAgICAgICBoYW5kbGVycyA9IGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1trXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICAgIHZhciBldmVudERhdGEgPSBhcmdzWzFdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgZXZlbnQgPSBldmVudHNbaV07XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgICAgdmFyIGV2dCA9ICh2b2lkIDApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGV2dCA9IG5ldyB3aW4uQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBldnQgPSBkb2MuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZXZ0LmRldGFpbCA9IGV2ZW50RGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBkYXRhSW5kZXgpIHsgcmV0dXJuIGRhdGFJbmRleCA+IDA7IH0pO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBbXTtcbiAgICAgICAgZGVsZXRlIGVsLmRvbTdFdmVudERhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoY2FsbGJhY2spIHtcbiAgICB2YXIgZXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnXTtcbiAgICB2YXIgZG9tID0gdGhpcztcbiAgICB2YXIgaTtcbiAgICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHsgcmV0dXJuOyB9XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBkb20ub2ZmKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGRvbS5vbihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHZhciBzdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKSArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIG91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgc3R5bGVzID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICAgIHZhciBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICAgIHZhciBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luID8gd2luLnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW4gPyB3aW4uc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IChib3gudG9wICsgc2Nyb2xsVG9wKSAtIGNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogKGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCkgLSBjbGllbnRMZWZ0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gICAgaWYgKHRoaXNbMF0pIHsgcmV0dXJuIHdpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpOyB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHRoaXNbMF0pIHsgcmV0dXJuIHdpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBjb2xsZWN0aW9uIHBhc3NpbmcgZWxlbWVudHMgdG8gYGNhbGxiYWNrYFxuICBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgLy8gRG9uJ3QgYm90aGVyIGNvbnRpbnVpbmcgd2l0aG91dCBhIGNhbGxiYWNrXG4gICAgaWYgKCFjYWxsYmFjaykgeyByZXR1cm4gdGhpczsgfVxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgY3VycmVudCBjb2xsZWN0aW9uXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc1tpXSwgaSwgdGhpc1tpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEVuZCB0aGUgbG9vcCBlYXJseVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIGB0aGlzYCB0byBhbGxvdyBjaGFpbmVkIERPTSBvcGVyYXRpb25zXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBmdW5jdGlvbiB0ZXh0KHRleHQpIHtcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGNvbXBhcmVXaXRoO1xuICAgIHZhciBpO1xuICAgIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGVsLm1hdGNoZXMpIHsgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpOyB9XG4gICAgICBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHsgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7IH1cbiAgICAgIGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7IHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7IH1cblxuICAgICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciA9PT0gZG9jKSB7IHJldHVybiBlbCA9PT0gZG9jOyB9XG4gICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IHdpbikgeyByZXR1cm4gZWwgPT09IHdpbjsgfVxuXG4gICAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBpbmRleCgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xuICAgIHZhciBpO1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaSA9IDA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgeyBpICs9IDE7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBmdW5jdGlvbiBlcShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB0aGlzOyB9XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciByZXR1cm5JbmRleDtcbiAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgICAgaWYgKHJldHVybkluZGV4IDwgMCkgeyByZXR1cm4gbmV3IERvbTcoW10pOyB9XG4gICAgICByZXR1cm4gbmV3IERvbTcoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcbiAgfVxuICBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIG5ld0NoaWxkO1xuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBhcmdzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICBuZXdDaGlsZCA9IGFyZ3Nba107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgdGVtcERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gcHJlcGVuZChuZXdDaGlsZCkge1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdGVtcERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZFtqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHsgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pOyB9XG4gICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICB9XG4gIGZ1bmN0aW9uIG5leHRBbGwoc2VsZWN0b3IpIHtcbiAgICB2YXIgbmV4dEVscyA9IFtdO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgeyByZXR1cm4gbmV3IERvbTcoW10pOyB9XG4gICAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChuZXh0KS5pcyhzZWxlY3RvcikpIHsgbmV4dEVscy5wdXNoKG5leHQpOyB9XG4gICAgICB9IGVsc2UgeyBuZXh0RWxzLnB1c2gobmV4dCk7IH1cbiAgICAgIGVsID0gbmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KG5leHRFbHMpO1xuICB9XG4gIGZ1bmN0aW9uIHByZXYoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQoZWwucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEb203KFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHsgcmV0dXJuIG5ldyBEb203KFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7IH1cbiAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKSB7IHJldHVybiBuZXcgRG9tNyhbXSk7IH1cbiAgICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgdmFyIHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQocHJldikuaXMoc2VsZWN0b3IpKSB7IHByZXZFbHMucHVzaChwcmV2KTsgfVxuICAgICAgfSBlbHNlIHsgcHJldkVscy5wdXNoKHByZXYpOyB9XG4gICAgICBlbCA9IHByZXY7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRG9tNyhwcmV2RWxzKTtcbiAgfVxuICBmdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSB7IHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICQodW5pcXVlKHBhcmVudHMpKTtcbiAgfVxuICBmdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXNbaV0ucGFyZW50Tm9kZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgeyBwYXJlbnRzLnB1c2gocGFyZW50KTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJCh1bmlxdWUocGFyZW50cykpO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2xvc2VzdCA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICB9XG4gICAgaWYgKCFjbG9zZXN0LmlzKHNlbGVjdG9yKSkge1xuICAgICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0O1xuICB9XG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KGZvdW5kRWxlbWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZE5vZGVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxKSB7IGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7IH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcodW5pcXVlKGNoaWxkcmVuKSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSkgeyB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gYWRkKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciBkb20gPSB0aGlzO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgdG9BZGQgPSAkKGFyZ3NbaV0pO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHRvQWRkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGRvbVtkb20ubGVuZ3RoXSA9IHRvQWRkW2pdO1xuICAgICAgICBkb20ubGVuZ3RoICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH1cblxuICB2YXIgTWV0aG9kcyA9IHtcbiAgICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICAgIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gICAgYXR0cjogYXR0cixcbiAgICByZW1vdmVBdHRyOiByZW1vdmVBdHRyLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgICBvbjogb24sXG4gICAgb2ZmOiBvZmYsXG4gICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLFxuICAgIG91dGVyV2lkdGg6IG91dGVyV2lkdGgsXG4gICAgb3V0ZXJIZWlnaHQ6IG91dGVySGVpZ2h0LFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIGNzczogY3NzLFxuICAgIGVhY2g6IGVhY2gsXG4gICAgaHRtbDogaHRtbCxcbiAgICB0ZXh0OiB0ZXh0LFxuICAgIGlzOiBpcyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZXE6IGVxLFxuICAgIGFwcGVuZDogYXBwZW5kLFxuICAgIHByZXBlbmQ6IHByZXBlbmQsXG4gICAgbmV4dDogbmV4dCxcbiAgICBuZXh0QWxsOiBuZXh0QWxsLFxuICAgIHByZXY6IHByZXYsXG4gICAgcHJldkFsbDogcHJldkFsbCxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBwYXJlbnRzOiBwYXJlbnRzLFxuICAgIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gICAgZmluZDogZmluZCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgYWRkOiBhZGQsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICQuZm5bbWV0aG9kTmFtZV0gPSBNZXRob2RzW21ldGhvZE5hbWVdO1xuICB9KTtcblxuICB2YXIgVXRpbHMgPSB7XG4gICAgZGVsZXRlUHJvcHM6IGZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICAgICAgdmFyIG9iamVjdCA9IG9iajtcbiAgICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gbm8gZ2V0dGVyIGZvciBvYmplY3RcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuZXh0VGljazogZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgICBpZiAoIGRlbGF5ID09PSB2b2lkIDAgKSBkZWxheSA9IDA7XG5cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG4gICAgfSxcbiAgICBub3c6IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgIH0sXG4gICAgZ2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgICAgIGlmICggYXhpcyA9PT0gdm9pZCAwICkgYXhpcyA9ICd4JztcblxuICAgICAgdmFyIG1hdHJpeDtcbiAgICAgIHZhciBjdXJUcmFuc2Zvcm07XG4gICAgICB2YXIgdHJhbnNmb3JtTWF0cml4O1xuXG4gICAgICB2YXIgY3VyU3R5bGUgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgICAgIGlmICh3aW4uV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5yZXBsYWNlKCcsJywgJy4nKTsgfSkuam9pbignLCAnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luLldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgICAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgIGlmICh3aW4uV2ViS2l0Q1NTTWF0cml4KSB7IGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IH1cbiAgICAgICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIHsgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTsgfVxuICAgICAgICAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgICAgZWxzZSB7IGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTsgfVxuICAgICAgfVxuICAgICAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgICAgICBpZiAod2luLldlYktpdENTU01hdHJpeCkgeyBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyOyB9XG4gICAgICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSB7IGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IH1cbiAgICAgICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgIGVsc2UgeyBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbiAgICB9LFxuICAgIHBhcnNlVXJsUXVlcnk6IGZ1bmN0aW9uIHBhcnNlVXJsUXVlcnkodXJsKSB7XG4gICAgICB2YXIgcXVlcnkgPSB7fTtcbiAgICAgIHZhciB1cmxUb1BhcnNlID0gdXJsIHx8IHdpbi5sb2NhdGlvbi5ocmVmO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgcGFyYW1zO1xuICAgICAgdmFyIHBhcmFtO1xuICAgICAgdmFyIGxlbmd0aDtcbiAgICAgIGlmICh0eXBlb2YgdXJsVG9QYXJzZSA9PT0gJ3N0cmluZycgJiYgdXJsVG9QYXJzZS5sZW5ndGgpIHtcbiAgICAgICAgdXJsVG9QYXJzZSA9IHVybFRvUGFyc2UuaW5kZXhPZignPycpID4gLTEgPyB1cmxUb1BhcnNlLnJlcGxhY2UoL1xcUypcXD8vLCAnJykgOiAnJztcbiAgICAgICAgcGFyYW1zID0gdXJsVG9QYXJzZS5zcGxpdCgnJicpLmZpbHRlcihmdW5jdGlvbiAocGFyYW1zUGFydCkgeyByZXR1cm4gcGFyYW1zUGFydCAhPT0gJyc7IH0pO1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHBhcmFtID0gcGFyYW1zW2ldLnJlcGxhY2UoLyNcXFMrL2csICcnKS5zcGxpdCgnPScpO1xuICAgICAgICAgIHF1ZXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYXJhbVswXSldID0gdHlwZW9mIHBhcmFtWzFdID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVsxXSkgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9LFxuICAgIGlzT2JqZWN0OiBmdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBvLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gICAgfSxcbiAgICBleHRlbmQ6IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiQxID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuJDEtLSApIGFyZ3NbIGxlbiQxIF0gPSBhcmd1bWVudHNbIGxlbiQxIF07XG5cbiAgICAgIHZhciB0byA9IE9iamVjdChhcmdzWzBdKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3NbaV07XG4gICAgICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuICAgICAgICAgIGZvciAodmFyIG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4ICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNPYmplY3QodG9bbmV4dEtleV0pICYmIFV0aWxzLmlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICAgICAgVXRpbHMuZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghVXRpbHMuaXNPYmplY3QodG9bbmV4dEtleV0pICYmIFV0aWxzLmlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBVdGlscy5leHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvO1xuICAgIH0sXG4gIH07XG5cbiAgdmFyIFN1cHBvcnQgPSAoZnVuY3Rpb24gU3VwcG9ydCgpIHtcbiAgICB2YXIgdGVzdERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdG91Y2g6ICh3aW4uTW9kZXJuaXpyICYmIHdpbi5Nb2Rlcm5penIudG91Y2ggPT09IHRydWUpIHx8IChmdW5jdGlvbiBjaGVja1RvdWNoKCkge1xuICAgICAgICByZXR1cm4gISEoKHdpbi5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKSB8fCAoJ29udG91Y2hzdGFydCcgaW4gd2luKSB8fCAod2luLkRvY3VtZW50VG91Y2ggJiYgZG9jIGluc3RhbmNlb2Ygd2luLkRvY3VtZW50VG91Y2gpKTtcbiAgICAgIH0oKSksXG5cbiAgICAgIHBvaW50ZXJFdmVudHM6ICEhKHdpbi5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgd2luLlBvaW50ZXJFdmVudCB8fCAoJ21heFRvdWNoUG9pbnRzJyBpbiB3aW4ubmF2aWdhdG9yICYmIHdpbi5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKSksXG4gICAgICBwcmVmaXhlZFBvaW50ZXJFdmVudHM6ICEhd2luLm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuXG4gICAgICB0cmFuc2l0aW9uOiAoZnVuY3Rpb24gY2hlY2tUcmFuc2l0aW9uKCkge1xuICAgICAgICB2YXIgc3R5bGUgPSB0ZXN0RGl2LnN0eWxlO1xuICAgICAgICByZXR1cm4gKCd0cmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnd2Via2l0VHJhbnNpdGlvbicgaW4gc3R5bGUgfHwgJ01velRyYW5zaXRpb24nIGluIHN0eWxlKTtcbiAgICAgIH0oKSksXG4gICAgICB0cmFuc2Zvcm1zM2Q6ICh3aW4uTW9kZXJuaXpyICYmIHdpbi5Nb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkID09PSB0cnVlKSB8fCAoZnVuY3Rpb24gY2hlY2tUcmFuc2Zvcm1zM2QoKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRlc3REaXYuc3R5bGU7XG4gICAgICAgIHJldHVybiAoJ3dlYmtpdFBlcnNwZWN0aXZlJyBpbiBzdHlsZSB8fCAnTW96UGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdPUGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdNc1BlcnNwZWN0aXZlJyBpbiBzdHlsZSB8fCAncGVyc3BlY3RpdmUnIGluIHN0eWxlKTtcbiAgICAgIH0oKSksXG5cbiAgICAgIGZsZXhib3g6IChmdW5jdGlvbiBjaGVja0ZsZXhib3goKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRlc3REaXYuc3R5bGU7XG4gICAgICAgIHZhciBzdHlsZXMgPSAoJ2FsaWduSXRlbXMgd2Via2l0QWxpZ25JdGVtcyB3ZWJraXRCb3hBbGlnbiBtc0ZsZXhBbGlnbiBtb3pCb3hBbGlnbiB3ZWJraXRGbGV4RGlyZWN0aW9uIG1zRmxleERpcmVjdGlvbiBtb3pCb3hEaXJlY3Rpb24gbW96Qm94T3JpZW50IHdlYmtpdEJveERpcmVjdGlvbiB3ZWJraXRCb3hPcmllbnQnKS5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzdHlsZXNbaV0gaW4gc3R5bGUpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KCkpLFxuXG4gICAgICBvYnNlcnZlcjogKGZ1bmN0aW9uIGNoZWNrT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJldHVybiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbiB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luKTtcbiAgICAgIH0oKSksXG5cbiAgICAgIHBhc3NpdmVMaXN0ZW5lcjogKGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIE5vIHN1cHBvcnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgICAgfSgpKSxcblxuICAgICAgZ2VzdHVyZXM6IChmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW47XG4gICAgICB9KCkpLFxuICAgIH07XG4gIH0oKSk7XG5cbiAgdmFyIEJyb3dzZXIgPSAoZnVuY3Rpb24gQnJvd3NlcigpIHtcbiAgICBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICAgIHZhciB1YSA9IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gKHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXNJRTogISF3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC9nKSB8fCAhIXdpbi5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFL2cpLFxuICAgICAgaXNFZGdlOiAhIXdpbi5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2cpLFxuICAgICAgaXNTYWZhcmk6IGlzU2FmYXJpKCksXG4gICAgICBpc1VpV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbi5uYXZpZ2F0b3IudXNlckFnZW50KSxcbiAgICB9O1xuICB9KCkpO1xuXG4gIHZhciBTd2lwZXJDbGFzcyA9IGZ1bmN0aW9uIFN3aXBlckNsYXNzKHBhcmFtcykge1xuICAgIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBhcmFtcyA9IHBhcmFtcztcblxuICAgIC8vIEV2ZW50c1xuICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzID0ge307XG5cbiAgICBpZiAoc2VsZi5wYXJhbXMgJiYgc2VsZi5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHNlbGYucGFyYW1zLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc2VsZi5vbihldmVudE5hbWUsIHNlbGYucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzdGF0aWNBY2Nlc3NvcnMgPSB7IGNvbXBvbmVudHM6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuICBTd2lwZXJDbGFzcy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbiAoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHNlbGY7IH1cbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7IHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdOyB9XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBTd2lwZXJDbGFzcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UgKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBzZWxmOyB9XG4gICAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBzZWxmLm9mZihldmVudHMsIG9uY2VIYW5kbGVyKTtcbiAgICAgIGlmIChvbmNlSGFuZGxlci5mN3Byb3h5KSB7XG4gICAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5mN3Byb3h5O1xuICAgICAgfVxuICAgIH1cbiAgICBvbmNlSGFuZGxlci5mN3Byb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH07XG5cbiAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZiAoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHsgcmV0dXJuIHNlbGY7IH1cbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlciwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IChldmVudEhhbmRsZXIuZjdwcm94eSAmJiBldmVudEhhbmRsZXIuZjdwcm94eSA9PT0gaGFuZGxlcikpIHtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0ICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHsgcmV0dXJuIHNlbGY7IH1cbiAgICB2YXIgZXZlbnRzO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBjb250ZXh0O1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuICAgIHZhciBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IFtdO1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnMucHVzaChldmVudEhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBTd2lwZXJDbGFzcy5wcm90b3R5cGUudXNlTW9kdWxlc1BhcmFtcyA9IGZ1bmN0aW9uIHVzZU1vZHVsZXNQYXJhbXMgKGluc3RhbmNlUGFyYW1zKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHsgcmV0dXJuOyB9XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07XG4gICAgICAvLyBFeHRlbmQgcGFyYW1zXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICBVdGlscy5leHRlbmQoaW5zdGFuY2VQYXJhbXMsIG1vZHVsZS5wYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFN3aXBlckNsYXNzLnByb3RvdHlwZS51c2VNb2R1bGVzID0gZnVuY3Rpb24gdXNlTW9kdWxlcyAobW9kdWxlc1BhcmFtcykge1xuICAgICAgaWYgKCBtb2R1bGVzUGFyYW1zID09PSB2b2lkIDAgKSBtb2R1bGVzUGFyYW1zID0ge307XG5cbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgeyByZXR1cm47IH1cbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGVzUGFyYW1zW21vZHVsZU5hbWVdIHx8IHt9O1xuICAgICAgLy8gRXh0ZW5kIGluc3RhbmNlIG1ldGhvZHMgYW5kIHByb3BzXG4gICAgICBpZiAobW9kdWxlLmluc3RhbmNlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5pbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlUHJvcE5hbWUpIHtcbiAgICAgICAgICB2YXIgbW9kdWxlUHJvcCA9IG1vZHVsZS5pbnN0YW5jZVttb2R1bGVQcm9wTmFtZV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVttb2R1bGVQcm9wTmFtZV0gPSBtb2R1bGVQcm9wLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZVttb2R1bGVQcm9wTmFtZV0gPSBtb2R1bGVQcm9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICBpZiAobW9kdWxlLm9uICYmIGluc3RhbmNlLm9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5vbikuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlRXZlbnROYW1lKSB7XG4gICAgICAgICAgaW5zdGFuY2Uub24obW9kdWxlRXZlbnROYW1lLCBtb2R1bGUub25bbW9kdWxlRXZlbnROYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBNb2R1bGUgY3JlYXRlIGNhbGxiYWNrXG4gICAgICBpZiAobW9kdWxlLmNyZWF0ZSkge1xuICAgICAgICBtb2R1bGUuY3JlYXRlLmJpbmQoaW5zdGFuY2UpKG1vZHVsZVBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljQWNjZXNzb3JzLmNvbXBvbmVudHMuc2V0ID0gZnVuY3Rpb24gKGNvbXBvbmVudHMpIHtcbiAgICB2YXIgQ2xhc3MgPSB0aGlzO1xuICAgIGlmICghQ2xhc3MudXNlKSB7IHJldHVybjsgfVxuICAgIENsYXNzLnVzZShjb21wb25lbnRzKTtcbiAgfTtcblxuICBTd2lwZXJDbGFzcy5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gaW5zdGFsbE1vZHVsZSAobW9kdWxlKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBwYXJhbXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICB2YXIgQ2xhc3MgPSB0aGlzO1xuICAgIGlmICghQ2xhc3MucHJvdG90eXBlLm1vZHVsZXMpIHsgQ2xhc3MucHJvdG90eXBlLm1vZHVsZXMgPSB7fTsgfVxuICAgIHZhciBuYW1lID0gbW9kdWxlLm5hbWUgfHwgKCgoT2JqZWN0LmtleXMoQ2xhc3MucHJvdG90eXBlLm1vZHVsZXMpLmxlbmd0aCkgKyBcIl9cIiArIChVdGlscy5ub3coKSkpKTtcbiAgICBDbGFzcy5wcm90b3R5cGUubW9kdWxlc1tuYW1lXSA9IG1vZHVsZTtcbiAgICAvLyBQcm90b3R5cGVcbiAgICBpZiAobW9kdWxlLnByb3RvKSB7XG4gICAgICBPYmplY3Qua2V5cyhtb2R1bGUucHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBDbGFzcy5wcm90b3R5cGVba2V5XSA9IG1vZHVsZS5wcm90b1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENsYXNzXG4gICAgaWYgKG1vZHVsZS5zdGF0aWMpIHtcbiAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5zdGF0aWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBDbGFzc1trZXldID0gbW9kdWxlLnN0YXRpY1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENhbGxiYWNrXG4gICAgaWYgKG1vZHVsZS5pbnN0YWxsKSB7XG4gICAgICBtb2R1bGUuaW5zdGFsbC5hcHBseShDbGFzcywgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIENsYXNzO1xuICB9O1xuXG4gIFN3aXBlckNsYXNzLnVzZSA9IGZ1bmN0aW9uIHVzZSAobW9kdWxlKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBwYXJhbXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICB2YXIgQ2xhc3MgPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldHVybiBDbGFzcy5pbnN0YWxsTW9kdWxlKG0pOyB9KTtcbiAgICAgIHJldHVybiBDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIENsYXNzLmluc3RhbGxNb2R1bGUuYXBwbHkoQ2xhc3MsIFsgbW9kdWxlIF0uY29uY2F0KCBwYXJhbXMgKSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN3aXBlckNsYXNzLCBzdGF0aWNBY2Nlc3NvcnMgKTtcblxuICBmdW5jdGlvbiB1cGRhdGVTaXplICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2lkdGg7XG4gICAgdmFyIGhlaWdodDtcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gJGVsWzBdLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGlmICgod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB8fCAoaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3VidHJhY3QgcGFkZGluZ3NcbiAgICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JyksIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctcmlnaHQnKSwgMTApO1xuICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcblxuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgc2l6ZTogc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gd2lkdGggOiBoZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZXMgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuXG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciB3cm9uZ1JUTCA9IHN3aXBlci53cm9uZ1JUTDtcbiAgICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICB2YXIgcHJldmlvdXNTbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykpKTtcbiAgICB2YXIgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gICAgdmFyIHNuYXBHcmlkID0gW107XG4gICAgdmFyIHNsaWRlc0dyaWQgPSBbXTtcbiAgICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gW107XG5cbiAgICB2YXIgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZTtcbiAgICBpZiAodHlwZW9mIG9mZnNldEJlZm9yZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuICAgIGlmICh0eXBlb2Ygb2Zmc2V0QWZ0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNTbmFwR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICB2YXIgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICB2YXIgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gICAgdmFyIHByZXZTbGlkZVNpemUgPSAwO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXJTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICBzcGFjZUJldHdlZW4gPSAocGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDApICogc3dpcGVyU2l6ZTtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSAtc3BhY2VCZXR3ZWVuO1xuXG4gICAgLy8gcmVzZXQgbWFyZ2luc1xuICAgIGlmIChydGwpIHsgc2xpZGVzLmNzcyh7IG1hcmdpbkxlZnQ6ICcnLCBtYXJnaW5Ub3A6ICcnIH0pOyB9XG4gICAgZWxzZSB7IHNsaWRlcy5jc3MoeyBtYXJnaW5SaWdodDogJycsIG1hcmdpbkJvdHRvbTogJycgfSk7IH1cblxuICAgIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgaWYgKE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgPT09IHNsaWRlc0xlbmd0aCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzbGlkZXNMZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5jZWlsKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcGFyYW1zLnNsaWRlc1BlclZpZXcgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYWxjIHNsaWRlc1xuICAgIHZhciBzbGlkZVNpemU7XG4gICAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgdmFyIHNsaWRlc1BlclJvdyA9IHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gICAgdmFyIG51bUZ1bGxDb2x1bW5zID0gTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZVNpemUgPSAwO1xuICAgICAgdmFyIHNsaWRlID0gc2xpZGVzLmVxKGkpO1xuICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleCA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgY29sdW1uID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciByb3cgPSAodm9pZCAwKTtcbiAgICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJykge1xuICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgcm93ID0gaSAtIChjb2x1bW4gKiBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCAoY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbiAtIDEpKSB7XG4gICAgICAgICAgICByb3cgKz0gMTtcbiAgICAgICAgICAgIGlmIChyb3cgPj0gc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgIGNvbHVtbiArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyAoKHJvdyAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MpIC8gc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgICBzbGlkZVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgb3JkZXI6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgICAgY29sdW1uID0gaSAtIChyb3cgKiBzbGlkZXNQZXJSb3cpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlXG4gICAgICAgICAgLmNzcyhcbiAgICAgICAgICAgIChcIm1hcmdpbi1cIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndG9wJyA6ICdsZWZ0JykpLFxuICAgICAgICAgICAgKHJvdyAhPT0gMCAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuKSAmJiAoKChwYXJhbXMuc3BhY2VCZXR3ZWVuKSArIFwicHhcIikpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1jb2x1bW4nLCBjb2x1bW4pXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLXJvdycsIHJvdyk7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgeyBjb250aW51ZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHZhciBzbGlkZVN0eWxlcyA9IHdpbi5nZXRDb21wdXRlZFN0eWxlKHNsaWRlWzBdLCBudWxsKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciBjdXJyZW50V2ViS2l0VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtO1xuICAgICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKVxuICAgICAgICAgICAgPyBzbGlkZS5vdXRlcldpZHRoKHRydWUpXG4gICAgICAgICAgICA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICAgIHZhciBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgICAgICBpZiAoYm94U2l6aW5nICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJykpO1xuICAgICAgICAgICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKTtcbiAgICAgICAgICAgIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgICAgICB2YXIgYm94U2l6aW5nJDEgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgICAgICBpZiAoYm94U2l6aW5nJDEgJiYgYm94U2l6aW5nJDEgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgICBzbGlkZVNpemUgPSBoZWlnaHQgKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzbGlkZVNpemUgPSBoZWlnaHQgKyBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbSArIG1hcmdpblRvcCArIG1hcmdpbkJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gY3VycmVudFdlYktpdFRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgeyBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSkgLyBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHsgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpOyB9XG5cbiAgICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS53aWR0aCA9IHNsaWRlU2l6ZSArIFwicHhcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmhlaWdodCA9IHNsaWRlU2l6ZSArIFwicHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICAgIH1cbiAgICAgIHNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG5cblxuICAgICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIChzbGlkZVNpemUgLyAyKSArIChwcmV2U2xpZGVTaXplIC8gMikgKyBzcGFjZUJldHdlZW47XG4gICAgICAgIGlmIChwcmV2U2xpZGVTaXplID09PSAwICYmIGkgIT09IDApIHsgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSAoc3dpcGVyU2l6ZSAvIDIpIC0gc3BhY2VCZXR3ZWVuOyB9XG4gICAgICAgIGlmIChpID09PSAwKSB7IHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gKHN3aXBlclNpemUgLyAyKSAtIHNwYWNlQmV0d2VlbjsgfVxuICAgICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgeyBzbGlkZVBvc2l0aW9uID0gMDsgfVxuICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgeyBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTsgfVxuICAgICAgICBpZiAoKGluZGV4KSAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgeyBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pOyB9XG4gICAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7IHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pOyB9XG4gICAgICAgIGlmICgoaW5kZXgpICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSB7IHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7IH1cbiAgICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcblxuICAgICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcblxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuICAgIHZhciBuZXdTbGlkZXNHcmlkO1xuXG4gICAgaWYgKFxuICAgICAgcnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgICAgJHdyYXBwZXJFbC5jc3MoeyB3aWR0aDogKChzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSArIFwicHhcIikgfSk7XG4gICAgfVxuICAgIGlmICghU3VwcG9ydC5mbGV4Ym94IHx8IHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkgeyAkd3JhcHBlckVsLmNzcyh7IHdpZHRoOiAoKHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICsgXCJweFwiKSB9KTsgfVxuICAgICAgZWxzZSB7ICR3cmFwcGVyRWwuY3NzKHsgaGVpZ2h0OiAoKHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICsgXCJweFwiKSB9KTsgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGguY2VpbChzd2lwZXIudmlydHVhbFNpemUgLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAtIHBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7ICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6ICgoc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpIH0pOyB9XG4gICAgICBlbHNlIHsgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6ICgoc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKyBcInB4XCIpIH0pOyB9XG4gICAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgc25hcEdyaWQubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW2kkMV07XG4gICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHsgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTsgfVxuICAgICAgICAgIGlmIChzbmFwR3JpZFtpJDFdIDwgc3dpcGVyLnZpcnR1YWxTaXplICsgc25hcEdyaWRbMF0pIHsgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTsgfVxuICAgICAgICB9XG4gICAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuICAgIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgICBmb3IgKHZhciBpJDIgPSAwOyBpJDIgPCBzbmFwR3JpZC5sZW5ndGg7IGkkMiArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSQxID0gc25hcEdyaWRbaSQyXTtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHsgc2xpZGVzR3JpZEl0ZW0kMSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0kMSk7IH1cbiAgICAgICAgaWYgKHNuYXBHcmlkW2kkMl0gPD0gc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkge1xuICAgICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgeyBzbmFwR3JpZCA9IFswXTsgfVxuXG4gICAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgaWYgKHJ0bCkgeyBzbGlkZXMuY3NzKHsgbWFyZ2luTGVmdDogKHNwYWNlQmV0d2VlbiArIFwicHhcIikgfSk7IH1cbiAgICAgICAgZWxzZSB7IHNsaWRlcy5jc3MoeyBtYXJnaW5SaWdodDogKHNwYWNlQmV0d2VlbiArIFwicHhcIikgfSk7IH1cbiAgICAgIH0gZWxzZSB7IHNsaWRlcy5jc3MoeyBtYXJnaW5Cb3R0b206IChzcGFjZUJldHdlZW4gKyBcInB4XCIpIH0pOyB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMpIHtcbiAgICAgIHZhciBhbGxTbGlkZXNTaXplID0gMDtcbiAgICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgICB9KTtcbiAgICAgIGFsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChhbGxTbGlkZXNTaXplIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICB2YXIgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICAgIHNuYXBHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBzbGlkZXM6IHNsaWRlcyxcbiAgICAgIHNuYXBHcmlkOiBzbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQ6IHNsaWRlc0dyaWQsXG4gICAgICBzbGlkZXNTaXplc0dyaWQ6IHNsaWRlc1NpemVzR3JpZCxcbiAgICB9KTtcblxuICAgIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gICAgfVxuICAgIGlmIChzbmFwR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU25hcEdyaWRMZW5ndGgpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHsgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTsgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gICAgfVxuICAgIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVzR3JpZExlbmd0aENoYW5nZScpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodCAoc3BlZWQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgYWN0aXZlU2xpZGVzID0gW107XG4gICAgdmFyIG5ld0hlaWdodCA9IDA7XG4gICAgdmFyIGk7XG4gICAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgICB9XG4gICAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGgpIHsgYnJlYWs7IH1cbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc3dpcGVyLnNsaWRlcy5lcShpbmRleClbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleClbMF0pO1xuICAgIH1cblxuICAgIC8vIEZpbmQgbmV3IGhlaWdodCBmcm9tIGhpZ2hlc3Qgc2xpZGUgaW4gdmlld1xuICAgIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBIZWlnaHRcbiAgICBpZiAobmV3SGVpZ2h0KSB7IHN3aXBlci4kd3JhcHBlckVsLmNzcygnaGVpZ2h0JywgKG5ld0hlaWdodCArIFwicHhcIikpOyB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHNsaWRlc1tpXS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3MgKHRyYW5zbGF0ZSkge1xuICAgIGlmICggdHJhbnNsYXRlID09PSB2b2lkIDAgKSB0cmFuc2xhdGUgPSAodGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSkgfHwgMDtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuXG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG5cbiAgICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHsgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpOyB9XG5cbiAgICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgICBpZiAocnRsKSB7IG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTsgfVxuXG4gICAgLy8gVmlzaWJsZSBTbGlkZXNcbiAgICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcblxuICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgIHN3aXBlci52aXNpYmxlU2xpZGVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIHNsaWRlID0gc2xpZGVzW2ldO1xuICAgICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSAoXG4gICAgICAgIChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkpIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXRcbiAgICAgICkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgICBpZiAocGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcbiAgICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICAgIHZhciBpc1Zpc2libGUgPSAoc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplKVxuICAgICAgICAgICAgICAgICAgfHwgKHNsaWRlQWZ0ZXIgPiAwICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUpXG4gICAgICAgICAgICAgICAgICB8fCAoc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplKTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgICB9XG4gICAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAkKHN3aXBlci52aXNpYmxlU2xpZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzICh0cmFuc2xhdGUpIHtcbiAgICBpZiAoIHRyYW5zbGF0ZSA9PT0gdm9pZCAwICkgdHJhbnNsYXRlID0gKHRoaXMgJiYgdGhpcy50cmFuc2xhdGUpIHx8IDA7XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgdmFyIGlzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nO1xuICAgIHZhciBpc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgICB2YXIgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gICAgdmFyIHdhc0VuZCA9IGlzRW5kO1xuICAgIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgICAgaXNFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgICB9XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgaXNCZWdpbm5pbmc6IGlzQmVnaW5uaW5nLFxuICAgICAgaXNFbmQ6IGlzRW5kLFxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHsgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7IH1cblxuICAgIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gICAgfVxuICAgIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gICAgfVxuICAgIGlmICgod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZykgfHwgKHdhc0VuZCAmJiAhaXNFbmQpKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciByZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gICAgc2xpZGVzLnJlbW92ZUNsYXNzKCgocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpICsgXCIgXCIgKyAocGFyYW1zLnNsaWRlTmV4dENsYXNzKSArIFwiIFwiICsgKHBhcmFtcy5zbGlkZVByZXZDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpICsgXCIgXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSkpO1xuXG4gICAgdmFyIGFjdGl2ZVNsaWRlO1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgYWN0aXZlSW5kZXggKyBcIlxcXCJdXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBjbGFzc2VzXG4gICAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCI6bm90KC5cIiArIChwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBOZXh0IFNsaWRlXG4gICAgdmFyIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRBbGwoKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgIG5leHRTbGlkZSA9IHNsaWRlcy5lcSgwKTtcbiAgICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgIH1cbiAgICAvLyBQcmV2IFNsaWRlXG4gICAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgICBwcmV2U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiOm5vdCguXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkgKyBcIlxcXCJdXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSArIFwiXFxcIl1cIikpXG4gICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAkd3JhcHBlckVsXG4gICAgICAgICAgLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIjpub3QoLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyAocHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykpICsgXCJcXFwiXVwiKSlcbiAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkgKyBcIlxcXCJdXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4IChuZXdBY3RpdmVJbmRleCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICAgIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQ7XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBwcmV2aW91c0luZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBwcmV2aW91c1JlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgdmFyIHByZXZpb3VzU25hcEluZGV4ID0gc3dpcGVyLnNuYXBJbmRleDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgICB2YXIgc25hcEluZGV4O1xuICAgIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgeyBhY3RpdmVJbmRleCA9IDA7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlSW5kZXggLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIH1cbiAgICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgeyBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxOyB9XG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHJlYWwgaW5kZXhcbiAgICB2YXIgcmVhbEluZGV4ID0gcGFyc2VJbnQoc3dpcGVyLnNsaWRlcy5lcShhY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBhY3RpdmVJbmRleCwgMTApO1xuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgc25hcEluZGV4OiBzbmFwSW5kZXgsXG4gICAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcbiAgICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2xpY2tlZFNsaWRlIChlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdCgoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpKSlbMF07XG4gICAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgICBpZiAoc2xpZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHsgc2xpZGVGb3VuZCA9IHRydWU7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgkKHNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gJChzbGlkZSkuaW5kZXgoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1cGRhdGUgPSB7XG4gICAgdXBkYXRlU2l6ZTogdXBkYXRlU2l6ZSxcbiAgICB1cGRhdGVTbGlkZXM6IHVwZGF0ZVNsaWRlcyxcbiAgICB1cGRhdGVBdXRvSGVpZ2h0OiB1cGRhdGVBdXRvSGVpZ2h0LFxuICAgIHVwZGF0ZVNsaWRlc09mZnNldDogdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICAgIHVwZGF0ZVNsaWRlc1Byb2dyZXNzOiB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgICB1cGRhdGVQcm9ncmVzczogdXBkYXRlUHJvZ3Jlc3MsXG4gICAgdXBkYXRlU2xpZGVzQ2xhc3NlczogdXBkYXRlU2xpZGVzQ2xhc3NlcyxcbiAgICB1cGRhdGVBY3RpdmVJbmRleDogdXBkYXRlQWN0aXZlSW5kZXgsXG4gICAgdXBkYXRlQ2xpY2tlZFNsaWRlOiB1cGRhdGVDbGlja2VkU2xpZGUsXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlIChheGlzKSB7XG4gICAgaWYgKCBheGlzID09PSB2b2lkIDAgKSBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcblxuICAgIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRUcmFuc2xhdGUgPSBVdGlscy5nZXRUcmFuc2xhdGUoJHdyYXBwZXJFbFswXSwgYXhpcyk7XG4gICAgaWYgKHJ0bCkgeyBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7IH1cblxuICAgIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUgKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgdmFyIHggPSAwO1xuICAgIHZhciB5ID0gMDtcbiAgICB2YXIgeiA9IDA7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IHRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICBpZiAoU3VwcG9ydC50cmFuc2Zvcm1zM2QpIHsgJHdyYXBwZXJFbC50cmFuc2Zvcm0oKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgXCIgKyB6ICsgXCJweClcIikpOyB9XG4gICAgICBlbHNlIHsgJHdyYXBwZXJFbC50cmFuc2Zvcm0oKFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIpKTsgfVxuICAgIH1cbiAgICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB4IDogeTtcblxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gICAgdmFyIG5ld1Byb2dyZXNzO1xuICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvICh0cmFuc2xhdGVzRGlmZik7XG4gICAgfVxuICAgIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWluVHJhbnNsYXRlICgpIHtcbiAgICByZXR1cm4gKC10aGlzLnNuYXBHcmlkWzBdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heFRyYW5zbGF0ZSAoKSB7XG4gICAgcmV0dXJuICgtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSB7XG4gICAgZ2V0VHJhbnNsYXRlOiBnZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNsYXRlOiBzZXRUcmFuc2xhdGUsXG4gICAgbWluVHJhbnNsYXRlOiBtaW5UcmFuc2xhdGUsXG4gICAgbWF4VHJhbnNsYXRlOiBtYXhUcmFuc2xhdGUsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbiAoZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG5cbiAgICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0IChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XG4gICAgaWYgKCFkaXIpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ25leHQnOyB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ3ByZXYnOyB9XG4gICAgICBlbHNlIHsgZGlyID0gJ3Jlc2V0JzsgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQkMSAocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XG4gICAgaWYgKCFkaXIpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ25leHQnOyB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIHsgZGlyID0gJ3ByZXYnOyB9XG4gICAgICBlbHNlIHsgZGlyID0gJ3Jlc2V0JzsgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG5cbiAgICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHRyYW5zaXRpb24kMSA9IHtcbiAgICBzZXRUcmFuc2l0aW9uOiBzZXRUcmFuc2l0aW9uLFxuICAgIHRyYW5zaXRpb25TdGFydDogdHJhbnNpdGlvblN0YXJ0LFxuICAgIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQkMSxcbiAgfTtcblxuICBmdW5jdGlvbiBzbGlkZVRvIChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoIGluZGV4ID09PSB2b2lkIDAgKSBpbmRleCA9IDA7XG4gICAgaWYgKCBzcGVlZCA9PT0gdm9pZCAwICkgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHNsaWRlSW5kZXggPCAwKSB7IHNsaWRlSW5kZXggPSAwOyB9XG5cbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gICAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZDtcbiAgICB2YXIgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNuYXBJbmRleCA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleCAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHsgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTsgfVxuXG4gICAgaWYgKChhY3RpdmVJbmRleCB8fCBwYXJhbXMuaW5pdGlhbFNsaWRlIHx8IDApID09PSAocHJldmlvdXNJbmRleCB8fCAwKSAmJiBydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zbGF0ZSA9IC1zbmFwR3JpZFtzbmFwSW5kZXhdO1xuXG4gICAgLy8gVXBkYXRlIHByb2dyZXNzXG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG5cbiAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICgtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApID49IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpXSAqIDEwMCkpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPCBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKChhY3RpdmVJbmRleCB8fCAwKSAhPT0gc2xpZGVJbmRleCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGlyZWN0aW9uO1xuICAgIGlmIChzbGlkZUluZGV4ID4gYWN0aXZlSW5kZXgpIHsgZGlyZWN0aW9uID0gJ25leHQnOyB9XG4gICAgZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSB7IGRpcmVjdGlvbiA9ICdwcmV2JzsgfVxuICAgIGVsc2UgeyBkaXJlY3Rpb24gPSAncmVzZXQnOyB9XG5cblxuICAgIC8vIFVwZGF0ZSBJbmRleFxuICAgIGlmICgocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHx8ICghcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICAgIC8vIFVwZGF0ZSBIZWlnaHRcbiAgICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gIT09ICdyZXNldCcpIHtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3BlZWQgPT09IDAgfHwgIVN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVUb0xvb3AgKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgIGlmICggaW5kZXggPT09IHZvaWQgMCApIGluZGV4ID0gMDtcbiAgICBpZiAoIHNwZWVkID09PSB2b2lkIDAgKSBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIG5ld0luZGV4ID0gaW5kZXg7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgbmV3SW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuXG4gIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuICBmdW5jdGlvbiBzbGlkZU5leHQgKHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgaWYgKCBzcGVlZCA9PT0gdm9pZCAwICkgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nO1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgaWYgKGFuaW1hdGluZykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgfVxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuXG4gIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuICBmdW5jdGlvbiBzbGlkZVByZXYgKHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgaWYgKCBzcGVlZCA9PT0gdm9pZCAwICkgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nO1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcbiAgICB2YXIgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkO1xuICAgIHZhciBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoYW5pbWF0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgICBpZiAodmFsIDwgMCkgeyByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7IH1cbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCk7XG4gICAgfVxuICAgIHZhciBub3JtYWxpemVkVHJhbnNsYXRlID0gbm9ybWFsaXplKHRyYW5zbGF0ZSk7XG4gICAgdmFyIG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBub3JtYWxpemUodmFsKTsgfSk7XG4gICAgdmFyIG5vcm1hbGl6ZWRTbGlkZXNHcmlkID0gc2xpZGVzR3JpZC5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbm9ybWFsaXplKHZhbCk7IH0pO1xuXG4gICAgdmFyIGN1cnJlbnRTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSldO1xuICAgIHZhciBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG4gICAgdmFyIHByZXZJbmRleDtcbiAgICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICAgIGlmIChwcmV2SW5kZXggPCAwKSB7IHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7IH1cbiAgICB9XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG5cbiAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG4gIGZ1bmN0aW9uIHNsaWRlUmVzZXQgKHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgaWYgKCBzcGVlZCA9PT0gdm9pZCAwICkgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgICBpZiAoIHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwICkgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuXG4gIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuICBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdCAoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoIHNwZWVkID09PSB2b2lkIDAgKSBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIGlmICggcnVuQ2FsbGJhY2tzID09PSB2b2lkIDAgKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbmFwSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG5cbiAgICBpZiAoc25hcEluZGV4IDwgc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCAtIDEpIHtcbiAgICAgIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gICAgICB2YXIgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICAgIHZhciBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgICAgaWYgKCh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCkgPiAobmV4dFNuYXAgLSBjdXJyZW50U25hcCkgLyAyKSB7XG4gICAgICAgIGluZGV4ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG5cbiAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIHZhciBzbGlkZVRvSW5kZXggPSBzd2lwZXIuY2xpY2tlZEluZGV4O1xuICAgIHZhciByZWFsSW5kZXg7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgeyByZXR1cm47IH1cbiAgICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSAoc2xpZGVzUGVyVmlldyAvIDIpKVxuICAgICAgICAgIHx8IChzbGlkZVRvSW5kZXggPiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSArIChzbGlkZXNQZXJWaWV3IC8gMikpXG4gICAgICAgICkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbFxuICAgICAgICAgICAgLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCIpXCIpKVxuICAgICAgICAgICAgLmVxKDApXG4gICAgICAgICAgICAuaW5kZXgoKTtcblxuICAgICAgICAgIFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbFxuICAgICAgICAgIC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiKVwiKSlcbiAgICAgICAgICAuZXEoMClcbiAgICAgICAgICAuaW5kZXgoKTtcblxuICAgICAgICBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzbGlkZSA9IHtcbiAgICBzbGlkZVRvOiBzbGlkZVRvLFxuICAgIHNsaWRlVG9Mb29wOiBzbGlkZVRvTG9vcCxcbiAgICBzbGlkZU5leHQ6IHNsaWRlTmV4dCxcbiAgICBzbGlkZVByZXY6IHNsaWRlUHJldixcbiAgICBzbGlkZVJlc2V0OiBzbGlkZVJlc2V0LFxuICAgIHNsaWRlVG9DbG9zZXN0OiBzbGlkZVRvQ2xvc2VzdCxcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBzbGlkZVRvQ2xpY2tlZFNsaWRlLFxuICB9O1xuXG4gIGZ1bmN0aW9uIGxvb3BDcmVhdGUgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZWQgc2xpZGVzXG4gICAgJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpICsgXCIuXCIgKyAocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSkucmVtb3ZlKCk7XG5cbiAgICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpKSk7XG5cbiAgICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICAgIHZhciBibGFua1NsaWRlc051bSA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAtIChzbGlkZXMubGVuZ3RoICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxhbmtTbGlkZXNOdW07IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBibGFua05vZGUgPSAkKGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MoKChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIiBcIiArIChwYXJhbXMuc2xpZGVCbGFua0NsYXNzKSkpO1xuICAgICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKGJsYW5rTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAocGFyYW1zLnNsaWRlQ2xhc3MpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXBhcmFtcy5sb29wZWRTbGlkZXMpIHsgcGFyYW1zLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7IH1cblxuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBwYXJzZUludChwYXJhbXMubG9vcGVkU2xpZGVzIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCk7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBzd2lwZXIubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICAgIHZhciBhcHBlbmRTbGlkZXMgPSBbXTtcbiAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICB2YXIgc2xpZGUgPSAkKGVsKTtcbiAgICAgIGlmIChpbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMpIHsgYXBwZW5kU2xpZGVzLnB1c2goZWwpOyB9XG4gICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSB7IHByZXBlbmRTbGlkZXMucHVzaChlbCk7IH1cbiAgICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpJDFdLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSQyID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBpJDIgPj0gMDsgaSQyIC09IDEpIHtcbiAgICAgICR3cmFwcGVyRWwucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaSQyXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9vcEZpeCAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIHZhciBsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHZhciBhbGxvd1NsaWRlUHJldiA9IHN3aXBlci5hbGxvd1NsaWRlUHJldjtcbiAgICB2YXIgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQ7XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciBuZXdJbmRleDtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG5cbiAgICB2YXIgc25hcFRyYW5zbGF0ZSA9IC1zbmFwR3JpZFthY3RpdmVJbmRleF07XG4gICAgdmFyIGRpZmYgPSBzbmFwVHJhbnNsYXRlIC0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuXG5cbiAgICAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG4gICAgaWYgKGFjdGl2ZUluZGV4IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgICBuZXdJbmRleCA9IChzbGlkZXMubGVuZ3RoIC0gKGxvb3BlZFNsaWRlcyAqIDMpKSArIGFjdGl2ZUluZGV4O1xuICAgICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgICAgdmFyIHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgYWN0aXZlSW5kZXggPj0gbG9vcGVkU2xpZGVzICogMikgfHwgKGFjdGl2ZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMpKSB7XG4gICAgICAvLyBGaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXG4gICAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG4gICAgICB2YXIgc2xpZGVDaGFuZ2VkJDEgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgaWYgKHNsaWRlQ2hhbmdlZCQxICYmIGRpZmYgIT09IDApIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3BEZXN0cm95ICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSArIFwiLlwiICsgKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSArIFwiLC5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykgKyBcIi5cIiArIChwYXJhbXMuc2xpZGVCbGFua0NsYXNzKSkpLnJlbW92ZSgpO1xuICAgIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICB9XG5cbiAgdmFyIGxvb3AgPSB7XG4gICAgbG9vcENyZWF0ZTogbG9vcENyZWF0ZSxcbiAgICBsb29wRml4OiBsb29wRml4LFxuICAgIGxvb3BEZXN0cm95OiBsb29wRGVzdHJveSxcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRHcmFiQ3Vyc29yIChtb3ZpbmcpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoU3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkKSkgeyByZXR1cm47IH1cbiAgICB2YXIgZWwgPSBzd2lwZXIuZWw7XG4gICAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICAgIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctbW96LWdyYWJiaW4nIDogJy1tb3otZ3JhYic7XG4gICAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvciAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKFN1cHBvcnQudG91Y2ggfHwgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQpKSB7IHJldHVybjsgfVxuICAgIHN3aXBlci5lbC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgfVxuXG4gIHZhciBncmFiQ3Vyc29yID0ge1xuICAgIHNldEdyYWJDdXJzb3I6IHNldEdyYWJDdXJzb3IsXG4gICAgdW5zZXRHcmFiQ3Vyc29yOiB1bnNldEdyYWJDdXJzb3IsXG4gIH07XG5cbiAgZnVuY3Rpb24gYXBwZW5kU2xpZGUgKHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSkgeyAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbaV0pOyB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGVuZFNsaWRlIChzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcblxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfVxuICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgMTtcbiAgICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSB7ICR3cmFwcGVyRWwucHJlcGVuZChzbGlkZXNbaV0pOyB9XG4gICAgICB9XG4gICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTbGlkZSAoaW5kZXgsIHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHBhcmFtcy5zbGlkZUNsYXNzKSkpO1xuICAgIH1cbiAgICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuXG4gICAgdmFyIHNsaWRlc0J1ZmZlciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBiYXNlTGVuZ3RoIC0gMTsgaSA+PSBpbmRleDsgaSAtPSAxKSB7XG4gICAgICB2YXIgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgc2xpZGVzLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpJDFdKSB7ICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpJDFdKTsgfVxuICAgICAgfVxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSQyID0gMDsgaSQyIDwgc2xpZGVzQnVmZmVyLmxlbmd0aDsgaSQyICs9IDEpIHtcbiAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltpJDJdKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfVxuICAgIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBTdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNsaWRlIChzbGlkZXNJbmRleGVzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChwYXJhbXMuc2xpZGVDbGFzcykpKTtcbiAgICB9XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gICAgdmFyIGluZGV4VG9SZW1vdmU7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcbiAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHsgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTsgfVxuICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSB7IG5ld0FjdGl2ZUluZGV4IC09IDE7IH1cbiAgICAgIH1cbiAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlcztcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSB7IHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7IH1cbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIHsgbmV3QWN0aXZlSW5kZXggLT0gMTsgfVxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBTdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcyAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgIH1cbiAgICBzd2lwZXIucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG4gIH1cblxuICB2YXIgbWFuaXB1bGF0aW9uID0ge1xuICAgIGFwcGVuZFNsaWRlOiBhcHBlbmRTbGlkZSxcbiAgICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZSxcbiAgICBhZGRTbGlkZTogYWRkU2xpZGUsXG4gICAgcmVtb3ZlU2xpZGU6IHJlbW92ZVNsaWRlLFxuICAgIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzLFxuICB9O1xuXG4gIHZhciBEZXZpY2UgPSAoZnVuY3Rpb24gRGV2aWNlKCkge1xuICAgIHZhciB1YSA9IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgdmFyIGRldmljZSA9IHtcbiAgICAgIGlvczogZmFsc2UsXG4gICAgICBhbmRyb2lkOiBmYWxzZSxcbiAgICAgIGFuZHJvaWRDaHJvbWU6IGZhbHNlLFxuICAgICAgZGVza3RvcDogZmFsc2UsXG4gICAgICB3aW5kb3dzOiBmYWxzZSxcbiAgICAgIGlwaG9uZTogZmFsc2UsXG4gICAgICBpcG9kOiBmYWxzZSxcbiAgICAgIGlwYWQ6IGZhbHNlLFxuICAgICAgY29yZG92YTogd2luLmNvcmRvdmEgfHwgd2luLnBob25lZ2FwLFxuICAgICAgcGhvbmVnYXA6IHdpbi5jb3Jkb3ZhIHx8IHdpbi5waG9uZWdhcCxcbiAgICB9O1xuXG4gICAgdmFyIHdpbmRvd3MgPSB1YS5tYXRjaCgvKFdpbmRvd3MgUGhvbmUpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB2YXIgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHZhciBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgICB2YXIgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuXG5cbiAgICAvLyBXaW5kb3dzXG4gICAgaWYgKHdpbmRvd3MpIHtcbiAgICAgIGRldmljZS5vcyA9ICd3aW5kb3dzJztcbiAgICAgIGRldmljZS5vc1ZlcnNpb24gPSB3aW5kb3dzWzJdO1xuICAgICAgZGV2aWNlLndpbmRvd3MgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBBbmRyb2lkXG4gICAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICAgIGRldmljZS5vc1ZlcnNpb24gPSBhbmRyb2lkWzJdO1xuICAgICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICAgICAgZGV2aWNlLmFuZHJvaWRDaHJvbWUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID49IDA7XG4gICAgfVxuICAgIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpT1NcbiAgICBpZiAoaXBob25lICYmICFpcG9kKSB7XG4gICAgICBkZXZpY2Uub3NWZXJzaW9uID0gaXBob25lWzJdLnJlcGxhY2UoL18vZywgJy4nKTtcbiAgICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXBhZCkge1xuICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwYWRbMl0ucmVwbGFjZSgvXy9nLCAnLicpO1xuICAgICAgZGV2aWNlLmlwYWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXBvZCkge1xuICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwb2RbM10gPyBpcG9kWzNdLnJlcGxhY2UoL18vZywgJy4nKSA6IG51bGw7XG4gICAgICBkZXZpY2UuaXBob25lID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gaU9TIDgrIGNoYW5nZWQgVUFcbiAgICBpZiAoZGV2aWNlLmlvcyAmJiBkZXZpY2Uub3NWZXJzaW9uICYmIHVhLmluZGV4T2YoJ1ZlcnNpb24vJykgPj0gMCkge1xuICAgICAgaWYgKGRldmljZS5vc1ZlcnNpb24uc3BsaXQoJy4nKVswXSA9PT0gJzEwJykge1xuICAgICAgICBkZXZpY2Uub3NWZXJzaW9uID0gdWEudG9Mb3dlckNhc2UoKS5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlc2t0b3BcbiAgICBkZXZpY2UuZGVza3RvcCA9ICEoZGV2aWNlLm9zIHx8IGRldmljZS5hbmRyb2lkIHx8IGRldmljZS53ZWJWaWV3KTtcblxuICAgIC8vIFdlYnZpZXdcbiAgICBkZXZpY2Uud2ViVmlldyA9IChpcGhvbmUgfHwgaXBhZCB8fCBpcG9kKSAmJiB1YS5tYXRjaCgvLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pKTtcblxuICAgIC8vIE1pbmltYWwgVUlcbiAgICBpZiAoZGV2aWNlLm9zICYmIGRldmljZS5vcyA9PT0gJ2lvcycpIHtcbiAgICAgIHZhciBvc1ZlcnNpb25BcnIgPSBkZXZpY2Uub3NWZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbWV0YVZpZXdwb3J0ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJyk7XG4gICAgICBkZXZpY2UubWluaW1hbFVpID0gIWRldmljZS53ZWJWaWV3XG4gICAgICAgICYmIChpcG9kIHx8IGlwaG9uZSlcbiAgICAgICAgJiYgKG9zVmVyc2lvbkFyclswXSAqIDEgPT09IDcgPyBvc1ZlcnNpb25BcnJbMV0gKiAxID49IDEgOiBvc1ZlcnNpb25BcnJbMF0gKiAxID4gNylcbiAgICAgICAgJiYgbWV0YVZpZXdwb3J0ICYmIG1ldGFWaWV3cG9ydC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKS5pbmRleE9mKCdtaW5pbWFsLXVpJykgPj0gMDtcbiAgICB9XG5cbiAgICAvLyBQaXhlbCBSYXRpb1xuICAgIGRldmljZS5waXhlbFJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgIC8vIEV4cG9ydCBvYmplY3RcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9KCkpO1xuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcztcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlID0gZXZlbnQ7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgeyBlID0gZS5vcmlnaW5hbEV2ZW50OyB9XG4gICAgZGF0YS5pc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSB7IHJldHVybjsgfVxuICAgIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHsgcmV0dXJuOyB9XG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgeyByZXR1cm47IH1cbiAgICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IChcIi5cIiArIChwYXJhbXMubm9Td2lwaW5nQ2xhc3MpKSlbMF0pIHtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgIGlmICghJChlKS5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpWzBdKSB7IHJldHVybjsgfVxuICAgIH1cblxuICAgIHRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICB2YXIgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICB2YXIgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcblxuICAgIC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgKFVJV2ViVmlldykgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gICAgdmFyIGVkZ2VTd2lwZURldGVjdGlvbiA9IHBhcmFtcy5lZGdlU3dpcGVEZXRlY3Rpb24gfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZURldGVjdGlvbjtcbiAgICB2YXIgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZCB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuICAgIGlmIChcbiAgICAgIGVkZ2VTd2lwZURldGVjdGlvblxuICAgICAgJiYgKChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkKVxuICAgICAgfHwgKHN0YXJ0WCA+PSB3aW4uc2NyZWVuLndpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBVdGlscy5leHRlbmQoZGF0YSwge1xuICAgICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgfSk7XG5cbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gVXRpbHMubm93KCk7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgeyBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlOyB9XG4gICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkgeyBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlOyB9XG4gICAgICBpZiAoXG4gICAgICAgIGRvYy5hY3RpdmVFbGVtZW50XG4gICAgICAgICYmICQoZG9jLmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKVxuICAgICAgICAmJiBkb2MuYWN0aXZlRWxlbWVudCAhPT0gZS50YXJnZXRcbiAgICAgICkge1xuICAgICAgICBkb2MuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuICAgICAgaWYgKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcztcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfVxuICAgIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7IHJldHVybjsgfVxuICAgIHZhciBwYWdlWCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIHZhciBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAgIC8vIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgICBVdGlscy5leHRlbmQodG91Y2hlcywge1xuICAgICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgICAgY3VycmVudFk6IHBhZ2VZLFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IFV0aWxzLm5vdygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgcGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgICAvLyBWZXJ0aWNhbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpXG4gICAgICAgICAgfHwgKHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSlcbiAgICAgICAgfHwgKHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZG9jLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb3JtRWxlbWVudHMpKSB7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZScsIGUpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7IHJldHVybjsgfVxuXG4gICAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuY3VycmVudFkgPSBwYWdlWTtcblxuICAgIHZhciBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgICB2YXIgZGlmZlkgPSB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydCgoTWF0aC5wb3coIGRpZmZYLCAyICkpICsgKE1hdGgucG93KCBkaWZmWSwgMiApKSkgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgeyByZXR1cm47IH1cblxuICAgIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB0b3VjaEFuZ2xlO1xuICAgICAgaWYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkpIHx8IChzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSkge1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgaWYgKChkaWZmWCAqIGRpZmZYKSArIChkaWZmWSAqIGRpZmZZKSA+PSAyNSkge1xuICAgICAgICAgIHRvdWNoQW5nbGUgPSAoTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODApIC8gTWF0aC5QSTtcbiAgICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogKDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcGFyYW1zLm5lc3RlZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICB9XG4gICAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnKTtcbiAgICAgIH1cbiAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xuICAgICAgLy8gR3JhYiBDdXJzb3JcbiAgICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgICB9XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcblxuICAgIHZhciBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgICB0b3VjaGVzLmRpZmYgPSBkaWZmO1xuXG4gICAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgICBpZiAocnRsKSB7IGRpZmYgPSAtZGlmZjsgfVxuXG4gICAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIGRhdGEuc3RhcnRUcmFuc2xhdGU7XG5cbiAgICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gICAgdmFyIHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG4gICAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgICByZXNpc3RhbmNlUmF0aW8gPSAwO1xuICAgIH1cbiAgICBpZiAoKGRpZmYgPiAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgeyBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSAoc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSkgKyAoTWF0aC5wb3coICgtc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgZGF0YS5zdGFydFRyYW5zbGF0ZSArIGRpZmYpLCByZXNpc3RhbmNlUmF0aW8gKSk7IH1cbiAgICB9IGVsc2UgaWYgKGRpZmYgPCAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSB7IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IChzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxKSAtIChNYXRoLnBvdyggKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGRhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmKSwgcmVzaXN0YW5jZVJhdGlvICkpOyB9XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgIH1cblxuXG4gICAgLy8gVGhyZXNob2xkXG4gICAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBwYXJhbXMudGhyZXNob2xkIHx8IGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICAgIGlmIChwYXJhbXMuZnJlZU1vZGUgfHwgcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAvLyBWZWxvY2l0eVxuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICAgIHRpbWU6IGRhdGEudG91Y2hTdGFydFRpbWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICAgIHRpbWU6IFV0aWxzLm5vdygpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xuICAgIC8vIFVwZGF0ZSB0cmFuc2xhdGVcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRW5kIChldmVudCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcblxuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkO1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfVxuICAgIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICAgIH1cbiAgICBkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuaXNUb3VjaGVkICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIFRpbWUgZGlmZlxuICAgIHZhciB0b3VjaEVuZFRpbWUgPSBVdGlscy5ub3coKTtcbiAgICB2YXIgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lO1xuXG4gICAgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG4gICAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RhcCcsIGUpO1xuICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUpID4gMzAwKSB7XG4gICAgICAgIGlmIChkYXRhLmNsaWNrVGltZW91dCkgeyBjbGVhclRpbWVvdXQoZGF0YS5jbGlja1RpbWVvdXQpOyB9XG4gICAgICAgIGRhdGEuY2xpY2tUaW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2NsaWNrJywgZSk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG4gICAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSkgPCAzMDApIHtcbiAgICAgICAgaWYgKGRhdGEuY2xpY2tUaW1lb3V0KSB7IGNsZWFyVGltZW91dChkYXRhLmNsaWNrVGltZW91dCk7IH1cbiAgICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCcsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEubGFzdENsaWNrVGltZSA9IFV0aWxzLm5vdygpO1xuICAgIFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgeyBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7IH1cbiAgICB9KTtcblxuICAgIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG5cbiAgICB2YXIgY3VycmVudFBvcztcbiAgICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50UG9zID4gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPCBzbmFwR3JpZC5sZW5ndGgpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKSB7XG4gICAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICAgIHZhciB2ZWxvY2l0eUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuXG4gICAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgICAgdmFyIHRpbWUgPSBsYXN0TW92ZUV2ZW50LnRpbWUgLSB2ZWxvY2l0eUV2ZW50LnRpbWU7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpIDwgcGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxuICAgICAgICAgIGlmICh0aW1lID4gMTUwIHx8IChVdGlscy5ub3coKSAtIGxhc3RNb3ZlRXZlbnQudGltZSkgPiAzMDApIHtcbiAgICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcblxuICAgICAgICBkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgICAgdmFyIG1vbWVudHVtRGlzdGFuY2UgPSBzd2lwZXIudmVsb2NpdHkgKiBtb21lbnR1bUR1cmF0aW9uO1xuXG4gICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgICBpZiAocnRsKSB7IG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uOyB9XG5cbiAgICAgICAgdmFyIGRvQm91bmNlID0gZmFsc2U7XG4gICAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgICB2YXIgYm91bmNlQW1vdW50ID0gTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSAqIDIwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztcbiAgICAgICAgdmFyIG5lZWRzTG9vcEZpeDtcbiAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7IG5lZWRzTG9vcEZpeCA9IHRydWU7IH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpID4gYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgYm91bmNlQW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7IG5lZWRzTG9vcEZpeCA9IHRydWU7IH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICB2YXIgbmV4dFNsaWRlO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzbmFwR3JpZFtqXSA+IC1uZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZWVkc0xvb3BGaXgpIHtcbiAgICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRml4IGR1cmF0aW9uXG4gICAgICAgIGlmIChzd2lwZXIudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKC1uZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhZGF0YS5hbGxvd01vbWVudHVtQm91bmNlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ21vbWVudHVtQm91bmNlJyk7XG5cbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci52ZWxvY2l0eSkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyYW1zLmZyZWVNb2RlTW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmluZCBjdXJyZW50IHNsaWRlXG4gICAgdmFyIHN0b3BJbmRleCA9IDA7XG4gICAgdmFyIGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwXSkge1xuICAgICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwXSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuICAgIHZhciByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcblxuICAgIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgIC8vIExvbmcgdG91Y2hlc1xuICAgICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHsgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTsgfVxuICAgICAgICBlbHNlIHsgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmIChyYXRpbyA+ICgxIC0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykpIHsgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTsgfVxuICAgICAgICBlbHNlIHsgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICAgIGlmICghcGFyYW1zLnNob3J0U3dpcGVzKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25SZXNpemUgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGVsID0gc3dpcGVyLmVsO1xuXG4gICAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgLy8gQnJlYWtwb2ludHNcbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIC8vIFNhdmUgbG9ja3NcbiAgICB2YXIgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQ7XG4gICAgdmFyIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2O1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcblxuICAgIC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICB2YXIgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgoc3dpcGVyLnRyYW5zbGF0ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzO1xuICAgIHZhciBlbCA9IHN3aXBlci5lbDtcbiAgICB2YXIgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICAgIHtcbiAgICAgIHN3aXBlci5vblRvdWNoU3RhcnQgPSBvblRvdWNoU3RhcnQuYmluZChzd2lwZXIpO1xuICAgICAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICAgICAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgICB9XG5cbiAgICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuXG4gICAgdmFyIHRhcmdldCA9IHBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBlbCA6IHdyYXBwZXJFbDtcbiAgICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDtcblxuICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgIHtcbiAgICAgIGlmICghU3VwcG9ydC50b3VjaCAmJiAoU3VwcG9ydC5wb2ludGVyRXZlbnRzIHx8IFN1cHBvcnQucHJlZml4ZWRQb2ludGVyRXZlbnRzKSkge1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoU3VwcG9ydC50b3VjaCkge1xuICAgICAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHsgcGFzc2l2ZTogZmFsc2UsIGNhcHR1cmU6IGNhcHR1cmUgfSA6IGNhcHR1cmUpO1xuICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhRGV2aWNlLmlvcyAmJiAhRGV2aWNlLmFuZHJvaWQpIHx8IChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhU3VwcG9ydC50b3VjaCAmJiBEZXZpY2UuaW9zKSkge1xuICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICAgICAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2l6ZSBoYW5kbGVyXG4gICAgc3dpcGVyLm9uKChEZXZpY2UuaW9zIHx8IERldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJyksIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciB0b3VjaEV2ZW50cyA9IHN3aXBlci50b3VjaEV2ZW50cztcbiAgICB2YXIgZWwgPSBzd2lwZXIuZWw7XG4gICAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG5cbiAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IGVsIDogd3JhcHBlckVsO1xuICAgIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkO1xuXG4gICAgLy8gVG91Y2ggRXZlbnRzXG4gICAge1xuICAgICAgaWYgKCFTdXBwb3J0LnRvdWNoICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAnb25Ub3VjaFN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFEZXZpY2UuaW9zICYmICFEZXZpY2UuYW5kcm9pZCkgfHwgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFTdXBwb3J0LnRvdWNoICYmIERldmljZS5pb3MpKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gICAgICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzaXplIGhhbmRsZXJcbiAgICBzd2lwZXIub2ZmKChEZXZpY2UuaW9zIHx8IERldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJyksIG9uUmVzaXplKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7XG4gICAgYXR0YWNoRXZlbnRzOiBhdHRhY2hFdmVudHMsXG4gICAgZGV0YWNoRXZlbnRzOiBkZXRhY2hFdmVudHMsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0QnJlYWtwb2ludCAoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBpbml0aWFsaXplZCA9IHN3aXBlci5pbml0aWFsaXplZDtcbiAgICB2YXIgbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlczsgaWYgKCBsb29wZWRTbGlkZXMgPT09IHZvaWQgMCApIGxvb3BlZFNsaWRlcyA9IDA7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICAgIGlmICghYnJlYWtwb2ludHMgfHwgKGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApKSB7IHJldHVybjsgfVxuXG4gICAgLy8gU2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcbiAgICB2YXIgYnJlYWtwb2ludCA9IHN3aXBlci5nZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzKTtcblxuICAgIGlmIChicmVha3BvaW50ICYmIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgICAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zKSB7XG4gICAgICAgIFsnc2xpZGVzUGVyVmlldycsICdzcGFjZUJldHdlZW4nLCAnc2xpZGVzUGVyR3JvdXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgIHZhciBwYXJhbVZhbHVlID0gYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSAnYXV0byc7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnKSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUludChwYXJhbVZhbHVlLCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gICAgICB2YXIgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICAgICAgdmFyIG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG5cbiAgICAgIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgIH1cblxuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuXG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICB9KTtcblxuICAgICAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcblxuICAgICAgaWYgKG5lZWRzUmVMb29wICYmIGluaXRpYWxpemVkKSB7XG4gICAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKChhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcykgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnJlYWtwb2ludCAoYnJlYWtwb2ludHMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoXG4gICAgaWYgKCFicmVha3BvaW50cykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICB2YXIgcG9pbnRzID0gW107XG4gICAgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgfSk7XG4gICAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIHBhcnNlSW50KGEsIDEwKSAtIHBhcnNlSW50KGIsIDEwKTsgfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzSW52ZXJzZSkge1xuICAgICAgICBpZiAocG9pbnQgPD0gd2luLmlubmVyV2lkdGgpIHtcbiAgICAgICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocG9pbnQgPj0gd2luLmlubmVyV2lkdGggJiYgIWJyZWFrcG9pbnQpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4JztcbiAgfVxuXG4gIHZhciBicmVha3BvaW50cyA9IHsgc2V0QnJlYWtwb2ludDogc2V0QnJlYWtwb2ludCwgZ2V0QnJlYWtwb2ludDogZ2V0QnJlYWtwb2ludCB9O1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzZXMgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgdmFyIHN1ZmZpeGVzID0gW107XG5cbiAgICBzdWZmaXhlcy5wdXNoKCdpbml0aWFsaXplZCcpO1xuICAgIHN1ZmZpeGVzLnB1c2gocGFyYW1zLmRpcmVjdGlvbik7XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzdWZmaXhlcy5wdXNoKCdmcmVlLW1vZGUnKTtcbiAgICB9XG4gICAgaWYgKCFTdXBwb3J0LmZsZXhib3gpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ25vLWZsZXhib3gnKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzdWZmaXhlcy5wdXNoKCdhdXRvaGVpZ2h0Jyk7XG4gICAgfVxuICAgIGlmIChydGwpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ3J0bCcpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIHN1ZmZpeGVzLnB1c2goJ211bHRpcm93Jyk7XG4gICAgfVxuICAgIGlmIChEZXZpY2UuYW5kcm9pZCkge1xuICAgICAgc3VmZml4ZXMucHVzaCgnYW5kcm9pZCcpO1xuICAgIH1cbiAgICBpZiAoRGV2aWNlLmlvcykge1xuICAgICAgc3VmZml4ZXMucHVzaCgnaW9zJyk7XG4gICAgfVxuICAgIC8vIFdQOCBUb3VjaCBFdmVudHMgRml4XG4gICAgaWYgKChCcm93c2VyLmlzSUUgfHwgQnJvd3Nlci5pc0VkZ2UpICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICBzdWZmaXhlcy5wdXNoKChcIndwOC1cIiArIChwYXJhbXMuZGlyZWN0aW9uKSkpO1xuICAgIH1cblxuICAgIHN1ZmZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHN1ZmZpeCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgc3VmZml4KTtcbiAgICB9KTtcblxuICAgICRlbC5hZGRDbGFzcyhjbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzc2VzICgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICB2YXIgY2xhc3NOYW1lcyA9IHN3aXBlci5jbGFzc05hbWVzO1xuXG4gICAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBjbGFzc2VzID0geyBhZGRDbGFzc2VzOiBhZGRDbGFzc2VzLCByZW1vdmVDbGFzc2VzOiByZW1vdmVDbGFzc2VzIH07XG5cbiAgZnVuY3Rpb24gbG9hZEltYWdlIChpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlO1xuICAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxuICAgIH1cbiAgICBpZiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpIHtcbiAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgaW1hZ2UgPSBuZXcgd2luLkltYWdlKCk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBvblJlYWR5O1xuICAgICAgICBpZiAoc2l6ZXMpIHtcbiAgICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICBpbWFnZS5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25SZWFkeSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxuICAgICAgb25SZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMgKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuICAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICBpZiAodHlwZW9mIHN3aXBlciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyID09PSBudWxsIHx8ICFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpIHsgc3dpcGVyLmltYWdlc0xvYWRlZCArPSAxOyB9XG4gICAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCA9PT0gc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgeyBzd2lwZXIudXBkYXRlKCk7IH1cbiAgICAgICAgc3dpcGVyLmVtaXQoJ2ltYWdlc1JlYWR5Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgICAgc3dpcGVyLmxvYWRJbWFnZShcbiAgICAgICAgaW1hZ2VFbCxcbiAgICAgICAgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgICAgaW1hZ2VFbC5zcmNzZXQgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpLFxuICAgICAgICBpbWFnZUVsLnNpemVzIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzaXplcycpLFxuICAgICAgICB0cnVlLFxuICAgICAgICBvblJlYWR5XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbWFnZXMgPSB7XG4gICAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gICAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlcyxcbiAgfTtcblxuICBmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3YXNMb2NrZWQgPSBzd2lwZXIuaXNMb2NrZWQ7XG5cbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcblxuICAgIC8vIGV2ZW50c1xuICAgIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkgeyBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7IH1cblxuICAgIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrT3ZlcmZsb3ckMSA9IHsgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBpbml0OiB0cnVlLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICAvL1xuICAgIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG5cbiAgICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCwgd2l0aCBVSVdlYlZpZXcpLlxuICAgIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gICAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcblxuICAgIC8vIEZyZWUgbW9kZVxuICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG5cbiAgICAvLyBBdXRvaGVpZ2h0XG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG5cbiAgICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICAgIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcblxuICAgIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG5cbiAgICAvLyBFZmZlY3RzXG4gICAgZWZmZWN0OiAnc2xpZGUnLCAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG5cbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gICAgYnJlYWtwb2ludHNJbnZlcnNlOiBmYWxzZSxcblxuICAgIC8vIFNsaWRlcyBncmlkXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsIC8vIGluIHB4XG4gICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsIC8vIGluIHB4XG4gICAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuXG4gICAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgICB3YXRjaE92ZXJmbG93OiBmYWxzZSxcblxuICAgIC8vIFJvdW5kIGxlbmd0aFxuICAgIHJvdW5kTGVuZ3RoczogZmFsc2UsXG5cbiAgICAvLyBUb3VjaGVzXG4gICAgdG91Y2hSYXRpbzogMSxcbiAgICB0b3VjaEFuZ2xlOiA0NSxcbiAgICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICAgIHNob3J0U3dpcGVzOiB0cnVlLFxuICAgIGxvbmdTd2lwZXM6IHRydWUsXG4gICAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gICAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gICAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgIHRocmVzaG9sZDogMCxcbiAgICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHRydWUsXG4gICAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICAgIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcblxuICAgIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gICAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG5cbiAgICAvLyBSZXNpc3RhbmNlXG4gICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG5cbiAgICAvLyBQcm9ncmVzc1xuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG5cbiAgICAvLyBDdXJzb3JcbiAgICBncmFiQ3Vyc29yOiBmYWxzZSxcblxuICAgIC8vIENsaWNrc1xuICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuXG4gICAgLy8gSW1hZ2VzXG4gICAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuXG4gICAgLy8gbG9vcFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcblxuICAgIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICAgIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICAgIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICAgIHN3aXBlSGFuZGxlcjogbnVsbCwgLy8gJy5zd2lwZS1oYW5kbGVyJyxcbiAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gICAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG5cbiAgICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICAgIHBhc3NpdmVMaXN0ZW5lcnM6IHRydWUsXG5cbiAgICAvLyBOU1xuICAgIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLScsIC8vIE5FV1xuICAgIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICAgIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICAgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgICBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmUnLFxuICAgIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICAgIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gICAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gICAgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnLFxuICAgIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcblxuICAgIC8vIENhbGxiYWNrc1xuICAgIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgfTtcblxuICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cblxuICB2YXIgcHJvdG90eXBlcyA9IHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uJDEsXG4gICAgc2xpZGU6IHNsaWRlLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgZ3JhYkN1cnNvcjogZ3JhYkN1cnNvcixcbiAgICBtYW5pcHVsYXRpb246IG1hbmlwdWxhdGlvbixcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyQxLFxuICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgaW1hZ2VzOiBpbWFnZXMsXG4gIH07XG5cbiAgdmFyIGV4dGVuZGVkRGVmYXVsdHMgPSB7fTtcblxuICB2YXIgU3dpcGVyID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoU3dpcGVyQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gICAgICB2YXIgYXNzaWduO1xuXG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgIHZhciBlbDtcbiAgICAgIHZhciBwYXJhbXM7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChhc3NpZ24gPSBhcmdzLCBlbCA9IGFzc2lnblswXSwgcGFyYW1zID0gYXNzaWduWzFdKTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFyYW1zKSB7IHBhcmFtcyA9IHt9OyB9XG5cbiAgICAgIHBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSB7IHBhcmFtcy5lbCA9IGVsOyB9XG5cbiAgICAgIFN3aXBlckNsYXNzLmNhbGwodGhpcywgcGFyYW1zKTtcblxuICAgICAgT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvdG90eXBlR3JvdXApIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2goZnVuY3Rpb24gKHByb3RvTWV0aG9kKSB7XG4gICAgICAgICAgaWYgKCFTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSkge1xuICAgICAgICAgICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTd2lwZXIgSW5zdGFuY2VcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIubW9kdWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBzd2lwZXIubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZS5wYXJhbXNbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHsgZW5hYmxlZDogdHJ1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSB7IHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0geyBlbmFibGVkOiBmYWxzZSB9OyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuICAgICAgdmFyIHN3aXBlclBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgZGVmYXVsdHMpO1xuICAgICAgc3dpcGVyLnVzZU1vZHVsZXNQYXJhbXMoc3dpcGVyUGFyYW1zKTtcblxuICAgICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuICAgICAgc3dpcGVyLnBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gVXRpbHMuZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSBVdGlscy5leHRlbmQoe30sIHBhcmFtcyk7XG5cbiAgICAgIC8vIFNhdmUgRG9tIGxpYlxuICAgICAgc3dpcGVyLiQgPSAkO1xuXG4gICAgICAvLyBGaW5kIGVsXG4gICAgICB2YXIgJGVsID0gJChzd2lwZXIucGFyYW1zLmVsKTtcbiAgICAgIGVsID0gJGVsWzBdO1xuXG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgICAkZWwuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGNvbnRhaW5lckVsKSB7XG4gICAgICAgICAgdmFyIG5ld1BhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zLCB7IGVsOiBjb250YWluZXJFbCB9KTtcbiAgICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgICAgfVxuXG4gICAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgICAkZWwuZGF0YSgnc3dpcGVyJywgc3dpcGVyKTtcblxuICAgICAgLy8gRmluZCBXcmFwcGVyXG4gICAgICB2YXIgJHdyYXBwZXJFbCA9ICRlbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpKSk7XG5cbiAgICAgIC8vIEV4dGVuZCBTd2lwZXJcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgJGVsOiAkZWwsXG4gICAgICAgIGVsOiBlbCxcbiAgICAgICAgJHdyYXBwZXJFbDogJHdyYXBwZXJFbCxcbiAgICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuXG4gICAgICAgIC8vIENsYXNzZXNcbiAgICAgICAgY2xhc3NOYW1lczogW10sXG5cbiAgICAgICAgLy8gU2xpZGVzXG4gICAgICAgIHNsaWRlczogJCgpLFxuICAgICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuXG4gICAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICAgIGlzSG9yaXpvbnRhbDogZnVuY3Rpb24gaXNIb3Jpem9udGFsKCkge1xuICAgICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgICB9LFxuICAgICAgICBpc1ZlcnRpY2FsOiBmdW5jdGlvbiBpc1ZlcnRpY2FsKCkge1xuICAgICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUlRMXG4gICAgICAgIHJ0bDogKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgICB3cm9uZ1JUTDogJHdyYXBwZXJFbC5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JyxcblxuICAgICAgICAvLyBJbmRleGVzXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICByZWFsSW5kZXg6IDAsXG5cbiAgICAgICAgLy9cbiAgICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICAgIGlzRW5kOiBmYWxzZSxcblxuICAgICAgICAvLyBQcm9wc1xuICAgICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG5cbiAgICAgICAgLy8gTG9ja3NcbiAgICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgICB0b3VjaEV2ZW50czogKGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICAgIHZhciB0b3VjaCA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnXTtcbiAgICAgICAgICB2YXIgZGVza3RvcCA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJ107XG4gICAgICAgICAgaWYgKFN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgICAgfSBlbHNlIGlmIChTdXBwb3J0LnByZWZpeGVkUG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgZGVza3RvcCA9IFsnTVNQb2ludGVyRG93bicsICdNU1BvaW50ZXJNb3ZlJywgJ01TUG9pbnRlclVwJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c1RvdWNoID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgICAgbW92ZTogdG91Y2hbMV0sXG4gICAgICAgICAgICBlbmQ6IHRvdWNoWzJdLFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgICAgbW92ZTogZGVza3RvcFsxXSxcbiAgICAgICAgICAgIGVuZDogZGVza3RvcFsyXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBTdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA6IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICAgIH0oKSksXG4gICAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgICBmb3JtRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvJyxcbiAgICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgICBsYXN0Q2xpY2tUaW1lOiBVdGlscy5ub3coKSxcbiAgICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGlzVG91Y2hFdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG5cbiAgICAgICAgLy8gVG91Y2hlc1xuICAgICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcblxuICAgICAgICB0b3VjaGVzOiB7XG4gICAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgICBkaWZmOiAwLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEltYWdlc1xuICAgICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgICBpbWFnZXNMb2FkZWQ6IDAsXG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbnN0YWxsIE1vZHVsZXNcbiAgICAgIHN3aXBlci51c2VNb2R1bGVzKCk7XG5cbiAgICAgIC8vIEluaXRcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG5cbiAgICBpZiAoIFN3aXBlckNsYXNzICkgU3dpcGVyLl9fcHJvdG9fXyA9IFN3aXBlckNsYXNzO1xuICAgIFN3aXBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTd2lwZXJDbGFzcyAmJiBTd2lwZXJDbGFzcy5wcm90b3R5cGUgKTtcbiAgICBTd2lwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3dpcGVyO1xuXG4gICAgdmFyIHN0YXRpY0FjY2Vzc29ycyA9IHsgZXh0ZW5kZWREZWZhdWx0czogeyBjb25maWd1cmFibGU6IHRydWUgfSxkZWZhdWx0czogeyBjb25maWd1cmFibGU6IHRydWUgfSxDbGFzczogeyBjb25maWd1cmFibGU6IHRydWUgfSwkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbiAgICBTd2lwZXIucHJvdG90eXBlLnNsaWRlc1BlclZpZXdEeW5hbWljID0gZnVuY3Rpb24gc2xpZGVzUGVyVmlld0R5bmFtaWMgKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZDtcbiAgICAgIHZhciBzd2lwZXJTaXplID0gc3dpcGVyLnNpemU7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICB2YXIgc3B2ID0gMTtcbiAgICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICB2YXIgYnJlYWtMb29wO1xuICAgICAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIHsgYnJlYWtMb29wID0gdHJ1ZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpJDEgPSBhY3RpdmVJbmRleCAtIDE7IGkkMSA+PSAwOyBpJDEgLT0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNbaSQxXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2kkMV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgeyBicmVha0xvb3AgPSB0cnVlOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpJDIgPSBhY3RpdmVJbmRleCArIDE7IGkkMiA8IHNsaWRlcy5sZW5ndGg7IGkkMiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlc0dyaWRbaSQyXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3B2O1xuICAgIH07XG5cbiAgICBTd2lwZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIC8vIEJyZWFrcG9pbnRzXG4gICAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgICB9XG4gICAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgICB2YXIgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICB9XG4gICAgICB2YXIgdHJhbnNsYXRlZDtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH07XG5cbiAgICBTd2lwZXIucHJvdG90eXBlLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbiAobmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlKSB7XG4gICAgICBpZiAoIG5lZWRVcGRhdGUgPT09IHZvaWQgMCApIG5lZWRVcGRhdGUgPSB0cnVlO1xuXG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICAgIGlmICgobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uKSB8fCAobmV3RGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgbmV3RGlyZWN0aW9uICE9PSAndmVydGljYWwnKSkge1xuICAgICAgICByZXR1cm4gc3dpcGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzd2lwZXIuJGVsXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwidmVydGljYWwgd3A4LXZlcnRpY2FsXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcygoXCJcIiArIChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgbmV3RGlyZWN0aW9uKSk7XG5cbiAgICAgICAgaWYgKChCcm93c2VyLmlzSUUgfHwgQnJvd3Nlci5pc0VkZ2UpICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICAgICAgc3dpcGVyLiRlbC5hZGRDbGFzcygoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIndwOC1cIiArIG5ld0RpcmVjdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHN3aXBlci4kZWxcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoKChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJob3Jpem9udGFsIHdwOC1ob3Jpem9udGFsXCIpKVxuICAgICAgICAgIC5hZGRDbGFzcygoXCJcIiArIChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgbmV3RGlyZWN0aW9uKSk7XG5cbiAgICAgICAgaWYgKChCcm93c2VyLmlzSUUgfHwgQnJvd3Nlci5pc0VkZ2UpICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICAgICAgc3dpcGVyLiRlbC5hZGRDbGFzcygoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIndwOC1cIiArIG5ld0RpcmVjdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuXG4gICAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlSW5kZXgsIHNsaWRlRWwpIHtcbiAgICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgICAgaWYgKG5lZWRVcGRhdGUpIHsgc3dpcGVyLnVwZGF0ZSgpOyB9XG5cbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfTtcblxuICAgIFN3aXBlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQgKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuXG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlSW5pdCcpO1xuXG4gICAgICAvLyBTZXQgYnJlYWtwb2ludFxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIENsYXNzZXNcbiAgICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7XG5cbiAgICAgIC8vIENyZWF0ZSBsb29wXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBzaXplXG4gICAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuXG4gICAgICAvLyBVcGRhdGUgc2xpZGVzXG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHtcbiAgICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IEdyYWIgQ3Vyc29yXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgICAgc3dpcGVyLnByZWxvYWRJbWFnZXMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2xpZGUgVG8gSW5pdGlhbCBTbGlkZVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICAgIHN3aXBlci5hdHRhY2hFdmVudHMoKTtcblxuICAgICAgLy8gSW5pdCBGbGFnXG4gICAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBFbWl0XG4gICAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIH07XG5cbiAgICBTd2lwZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95IChkZWxldGVJbnN0YW5jZSwgY2xlYW5TdHlsZXMpIHtcbiAgICAgIGlmICggZGVsZXRlSW5zdGFuY2UgPT09IHZvaWQgMCApIGRlbGV0ZUluc3RhbmNlID0gdHJ1ZTtcbiAgICAgIGlmICggY2xlYW5TdHlsZXMgPT09IHZvaWQgMCApIGNsZWFuU3R5bGVzID0gdHJ1ZTtcblxuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gICAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7XG5cbiAgICAgIC8vIEluaXQgRmxhZ1xuICAgICAgc3dpcGVyLmluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAgIC8vIERldGFjaCBldmVudHNcbiAgICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTtcblxuICAgICAgLy8gRGVzdHJveSBsb29wXG4gICAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICR3cmFwcGVyRWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoW1xuICAgICAgICAgICAgICBwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsXG4gICAgICAgICAgICAgIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLFxuICAgICAgICAgICAgICBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsXG4gICAgICAgICAgICAgIHBhcmFtcy5zbGlkZVByZXZDbGFzcyBdLmpvaW4oJyAnKSlcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItcm93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgICBzd2lwZXIuJGVsLmRhdGEoJ3N3aXBlcicsIG51bGwpO1xuICAgICAgICBVdGlscy5kZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBTd2lwZXIuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyAobmV3RGVmYXVsdHMpIHtcbiAgICAgIFV0aWxzLmV4dGVuZChleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gICAgfTtcblxuICAgIHN0YXRpY0FjY2Vzc29ycy5leHRlbmRlZERlZmF1bHRzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuZGVmYXVsdHMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuQ2xhc3MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN3aXBlckNsYXNzO1xuICAgIH07XG5cbiAgICBzdGF0aWNBY2Nlc3NvcnMuJC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN3aXBlciwgc3RhdGljQWNjZXNzb3JzICk7XG5cbiAgICByZXR1cm4gU3dpcGVyO1xuICB9KFN3aXBlckNsYXNzKSk7XG5cbiAgdmFyIERldmljZSQxID0ge1xuICAgIG5hbWU6ICdkZXZpY2UnLFxuICAgIHByb3RvOiB7XG4gICAgICBkZXZpY2U6IERldmljZSxcbiAgICB9LFxuICAgIHN0YXRpYzoge1xuICAgICAgZGV2aWNlOiBEZXZpY2UsXG4gICAgfSxcbiAgfTtcblxuICB2YXIgU3VwcG9ydCQxID0ge1xuICAgIG5hbWU6ICdzdXBwb3J0JyxcbiAgICBwcm90bzoge1xuICAgICAgc3VwcG9ydDogU3VwcG9ydCxcbiAgICB9LFxuICAgIHN0YXRpYzoge1xuICAgICAgc3VwcG9ydDogU3VwcG9ydCxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBCcm93c2VyJDEgPSB7XG4gICAgbmFtZTogJ2Jyb3dzZXInLFxuICAgIHByb3RvOiB7XG4gICAgICBicm93c2VyOiBCcm93c2VyLFxuICAgIH0sXG4gICAgc3RhdGljOiB7XG4gICAgICBicm93c2VyOiBCcm93c2VyLFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIFJlc2l6ZSA9IHtcbiAgICBuYW1lOiAncmVzaXplJyxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICByZXNpemU6IHtcbiAgICAgICAgICByZXNpemVIYW5kbGVyOiBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVJlc2l6ZScpO1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIC8vIEVtaXQgcmVzaXplXG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgICAgIC8vIEVtaXQgb3JpZW50YXRpb25jaGFuZ2VcbiAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBPYnNlcnZlciA9IHtcbiAgICBmdW5jOiB3aW4uTXV0YXRpb25PYnNlcnZlciB8fCB3aW4uV2Via2l0TXV0YXRpb25PYnNlcnZlcixcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgdmFyIE9ic2VydmVyRnVuYyA9IE9ic2VydmVyLmZ1bmM7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAgIC8vIHRyaWdnZXJzIGFyZSByZWR1bmRhbnQgYW5kIGFyZSB2ZXJ5IGNvc3RseVxuICAgICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW4uc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIVN1cHBvcnQub2JzZXJ2ZXIgfHwgIXN3aXBlci5wYXJhbXMub2JzZXJ2ZXIpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgICB2YXIgY29udGFpbmVyUGFyZW50cyA9IHN3aXBlci4kZWwucGFyZW50cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBPYnNlcnZlIGNvbnRhaW5lclxuICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJGVsWzBdLCB7IGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlbiB9KTtcblxuICAgICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7IGF0dHJpYnV0ZXM6IGZhbHNlIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMgPSBbXTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBPYnNlcnZlciQxID0ge1xuICAgIG5hbWU6ICdvYnNlcnZlcicsXG4gICAgcGFyYW1zOiB7XG4gICAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBvYnNlcnZlcjoge1xuICAgICAgICAgIGluaXQ6IE9ic2VydmVyLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGF0dGFjaDogT2JzZXJ2ZXIuYXR0YWNoLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkZXN0cm95OiBPYnNlcnZlci5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBvYnNlcnZlcnM6IFtdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5vYnNlcnZlci5pbml0KCk7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIFZpcnR1YWwgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZm9yY2UpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJlZiA9IHN3aXBlci5wYXJhbXM7XG4gICAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHJlZi5zbGlkZXNQZXJWaWV3O1xuICAgICAgdmFyIHNsaWRlc1Blckdyb3VwID0gcmVmLnNsaWRlc1Blckdyb3VwO1xuICAgICAgdmFyIGNlbnRlcmVkU2xpZGVzID0gcmVmLmNlbnRlcmVkU2xpZGVzO1xuICAgICAgdmFyIHJlZiQxID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsO1xuICAgICAgdmFyIGFkZFNsaWRlc0JlZm9yZSA9IHJlZiQxLmFkZFNsaWRlc0JlZm9yZTtcbiAgICAgIHZhciBhZGRTbGlkZXNBZnRlciA9IHJlZiQxLmFkZFNsaWRlc0FmdGVyO1xuICAgICAgdmFyIHJlZiQyID0gc3dpcGVyLnZpcnR1YWw7XG4gICAgICB2YXIgcHJldmlvdXNGcm9tID0gcmVmJDIuZnJvbTtcbiAgICAgIHZhciBwcmV2aW91c1RvID0gcmVmJDIudG87XG4gICAgICB2YXIgc2xpZGVzID0gcmVmJDIuc2xpZGVzO1xuICAgICAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZCA9IHJlZiQyLnNsaWRlc0dyaWQ7XG4gICAgICB2YXIgcmVuZGVyU2xpZGUgPSByZWYkMi5yZW5kZXJTbGlkZTtcbiAgICAgIHZhciBwcmV2aW91c09mZnNldCA9IHJlZiQyLm9mZnNldDtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG5cbiAgICAgIHZhciBvZmZzZXRQcm9wO1xuICAgICAgaWYgKHN3aXBlci5ydGxUcmFuc2xhdGUpIHsgb2Zmc2V0UHJvcCA9ICdyaWdodCc7IH1cbiAgICAgIGVsc2UgeyBvZmZzZXRQcm9wID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCc7IH1cblxuICAgICAgdmFyIHNsaWRlc0FmdGVyO1xuICAgICAgdmFyIHNsaWRlc0JlZm9yZTtcbiAgICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBzbGlkZXNBZnRlciA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNCZWZvcmU7XG4gICAgICAgIHNsaWRlc0JlZm9yZSA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlc0FmdGVyID0gc2xpZGVzUGVyVmlldyArIChzbGlkZXNQZXJHcm91cCAtIDEpICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgICAgICBzbGlkZXNCZWZvcmUgPSBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0FmdGVyO1xuICAgICAgfVxuICAgICAgdmFyIGZyb20gPSBNYXRoLm1heCgoYWN0aXZlSW5kZXggfHwgMCkgLSBzbGlkZXNCZWZvcmUsIDApO1xuICAgICAgdmFyIHRvID0gTWF0aC5taW4oKGFjdGl2ZUluZGV4IHx8IDApICsgc2xpZGVzQWZ0ZXIsIHNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBvZmZzZXQgPSAoc3dpcGVyLnNsaWRlc0dyaWRbZnJvbV0gfHwgMCkgLSAoc3dpcGVyLnNsaWRlc0dyaWRbMF0gfHwgMCk7XG5cbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIudmlydHVhbCwge1xuICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICB0bzogdG8sXG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBvblJlbmRlcmVkKCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICBpZiAoc3dpcGVyLmxhenkgJiYgc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZpb3VzRnJvbSA9PT0gZnJvbSAmJiBwcmV2aW91c1RvID09PSB0byAmJiAhZm9yY2UpIHtcbiAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNHcmlkICE9PSBwcmV2aW91c1NsaWRlc0dyaWQgJiYgb2Zmc2V0ICE9PSBwcmV2aW91c09mZnNldCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZXMuY3NzKG9mZnNldFByb3AsIChvZmZzZXQgKyBcInB4XCIpKTtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbCkge1xuICAgICAgICBzd2lwZXIucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwuY2FsbChzd2lwZXIsIHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICBzbGlkZXM6IChmdW5jdGlvbiBnZXRTbGlkZXMoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVzVG9SZW5kZXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBmcm9tOyBpIDw9IHRvOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9SZW5kZXIucHVzaChzbGlkZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RvUmVuZGVyO1xuICAgICAgICAgIH0oKSksXG4gICAgICAgIH0pO1xuICAgICAgICBvblJlbmRlcmVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwcmVwZW5kSW5kZXhlcyA9IFtdO1xuICAgICAgdmFyIGFwcGVuZEluZGV4ZXMgPSBbXTtcbiAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpKSkucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gcHJldmlvdXNGcm9tOyBpIDw9IHByZXZpb3VzVG87IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpIDwgZnJvbSB8fCBpID4gdG8pIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLmZpbmQoKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpICsgXCJcXFwiXVwiKSkucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBzbGlkZXMubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgICBpZiAoaSQxID49IGZyb20gJiYgaSQxIDw9IHRvKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c1RvID09PSAndW5kZWZpbmVkJyB8fCBmb3JjZSkge1xuICAgICAgICAgICAgYXBwZW5kSW5kZXhlcy5wdXNoKGkkMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpJDEgPiBwcmV2aW91c1RvKSB7IGFwcGVuZEluZGV4ZXMucHVzaChpJDEpOyB9XG4gICAgICAgICAgICBpZiAoaSQxIDwgcHJldmlvdXNGcm9tKSB7IHByZXBlbmRJbmRleGVzLnB1c2goaSQxKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXBwZW5kSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5hcHBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlcGVuZEluZGV4ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYiAtIGE7IH0pLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLnByZXBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oJy5zd2lwZXItc2xpZGUnKS5jc3Mob2Zmc2V0UHJvcCwgKG9mZnNldCArIFwicHhcIikpO1xuICAgICAgb25SZW5kZXJlZCgpO1xuICAgIH0sXG4gICAgcmVuZGVyU2xpZGU6IGZ1bmN0aW9uIHJlbmRlclNsaWRlKHNsaWRlLCBpbmRleCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsO1xuICAgICAgaWYgKHBhcmFtcy5jYWNoZSAmJiBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHZhciAkc2xpZGVFbCA9IHBhcmFtcy5yZW5kZXJTbGlkZVxuICAgICAgICA/ICQocGFyYW1zLnJlbmRlclNsaWRlLmNhbGwoc3dpcGVyLCBzbGlkZSwgaW5kZXgpKVxuICAgICAgICA6ICQoKFwiPGRpdiBjbGFzcz1cXFwiXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSArIFwiXFxcIiBkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIj5cIiArIHNsaWRlICsgXCI8L2Rpdj5cIikpO1xuICAgICAgaWYgKCEkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSB7ICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpOyB9XG4gICAgICBpZiAocGFyYW1zLmNhY2hlKSB7IHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSA9ICRzbGlkZUVsOyB9XG4gICAgICByZXR1cm4gJHNsaWRlRWw7XG4gICAgfSxcbiAgICBhcHBlbmRTbGlkZTogZnVuY3Rpb24gYXBwZW5kU2xpZGUoc2xpZGVzKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVzW2ldKSB7IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5wdXNoKHNsaWRlc1tpXSk7IH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzKTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICB9LFxuICAgIHByZXBlbmRTbGlkZTogZnVuY3Rpb24gcHJlcGVuZFNsaWRlKHNsaWRlcykge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgICB2YXIgbnVtYmVyT2ZOZXdTbGlkZXMgPSAxO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXMpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlc1tpXSkgeyBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXNbaV0pOyB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgIG51bWJlck9mTmV3U2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlcyk7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHN3aXBlci52aXJ0dWFsLmNhY2hlO1xuICAgICAgICB2YXIgbmV3Q2FjaGUgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY2FjaGUpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlZEluZGV4KSB7XG4gICAgICAgICAgbmV3Q2FjaGVbcGFyc2VJbnQoY2FjaGVkSW5kZXgsIDEwKSArIG51bWJlck9mTmV3U2xpZGVzXSA9IGNhY2hlW2NhY2hlZEluZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0gbmV3Q2FjaGU7XG4gICAgICB9XG4gICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCk7XG4gICAgfSxcbiAgICByZW1vdmVTbGlkZTogZnVuY3Rpb24gcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICd1bmRlZmluZWQnIHx8IHNsaWRlc0luZGV4ZXMgPT09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXNJbmRleGVzKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gc2xpZGVzSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5zcGxpY2Uoc2xpZGVzSW5kZXhlc1tpXSwgMSk7XG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNbaV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2xpZGVzSW5kZXhlc1tpXSA8IGFjdGl2ZUluZGV4KSB7IGFjdGl2ZUluZGV4IC09IDE7IH1cbiAgICAgICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzLCAxKTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIudmlydHVhbC5jYWNoZVtzbGlkZXNJbmRleGVzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVzSW5kZXhlcyA8IGFjdGl2ZUluZGV4KSB7IGFjdGl2ZUluZGV4IC09IDE7IH1cbiAgICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgICB9XG4gICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCwgMCk7XG4gICAgfSxcbiAgICByZW1vdmVBbGxTbGlkZXM6IGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzID0gW107XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0ge307XG4gICAgICB9XG4gICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgICBzd2lwZXIuc2xpZGVUbygwLCAwKTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBWaXJ0dWFsJDEgPSB7XG4gICAgbmFtZTogJ3ZpcnR1YWwnLFxuICAgIHBhcmFtczoge1xuICAgICAgdmlydHVhbDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgc2xpZGVzOiBbXSxcbiAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgIHJlbmRlclNsaWRlOiBudWxsLFxuICAgICAgICByZW5kZXJFeHRlcm5hbDogbnVsbCxcbiAgICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgICBhZGRTbGlkZXNBZnRlcjogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICB2aXJ0dWFsOiB7XG4gICAgICAgICAgdXBkYXRlOiBWaXJ0dWFsLnVwZGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgYXBwZW5kU2xpZGU6IFZpcnR1YWwuYXBwZW5kU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHByZXBlbmRTbGlkZTogVmlydHVhbC5wcmVwZW5kU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHJlbW92ZVNsaWRlOiBWaXJ0dWFsLnJlbW92ZVNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICByZW1vdmVBbGxTbGlkZXM6IFZpcnR1YWwucmVtb3ZlQWxsU2xpZGVzLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICByZW5kZXJTbGlkZTogVmlydHVhbC5yZW5kZXJTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2xpZGVzOiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuc2xpZGVzLFxuICAgICAgICAgIGNhY2hlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwidmlydHVhbFwiKSk7XG4gICAgICAgIHZhciBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG5cbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSkge1xuICAgICAgICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgICB2YXIgZSA9IGV2ZW50O1xuICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgeyBlID0gZS5vcmlnaW5hbEV2ZW50OyB9IC8vIGpxdWVyeSBmaXhcbiAgICAgIHZhciBrYyA9IGUua2V5Q29kZSB8fCBlLmNoYXJDb2RlO1xuICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM5KSB8fCAoc3dpcGVyLmlzVmVydGljYWwoKSAmJiBrYyA9PT0gNDApKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAoKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzcpIHx8IChzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGtjID09PSAzOCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCAmJiBkb2MuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2MuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQgJiYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkpIHtcbiAgICAgICAgdmFyIGluVmlldyA9IGZhbHNlO1xuICAgICAgICAvLyBDaGVjayB0aGF0IHN3aXBlciBzaG91bGQgYmUgaW5zaWRlIG9mIHZpc2libGUgYXJlYSBvZiB3aW5kb3dcbiAgICAgICAgaWYgKHN3aXBlci4kZWwucGFyZW50cygoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSkpLmxlbmd0aCA+IDAgJiYgc3dpcGVyLiRlbC5wYXJlbnRzKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIHN3aXBlck9mZnNldCA9IHN3aXBlci4kZWwub2Zmc2V0KCk7XG4gICAgICAgIGlmIChydGwpIHsgc3dpcGVyT2Zmc2V0LmxlZnQgLT0gc3dpcGVyLiRlbFswXS5zY3JvbGxMZWZ0OyB9XG4gICAgICAgIHZhciBzd2lwZXJDb29yZCA9IFtcbiAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLFxuICAgICAgICAgIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlci53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sXG4gICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF0sXG4gICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF0gXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBvaW50WzBdID49IDAgJiYgcG9pbnRbMF0gPD0gd2luZG93V2lkdGhcbiAgICAgICAgICAgICYmIHBvaW50WzFdID49IDAgJiYgcG9pbnRbMV0gPD0gd2luZG93SGVpZ2h0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluVmlldykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIGlmIChrYyA9PT0gMzcgfHwga2MgPT09IDM5KSB7XG4gICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgICAgICAgZWxzZSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoa2MgPT09IDM5ICYmICFydGwpIHx8IChrYyA9PT0gMzcgJiYgcnRsKSkgeyBzd2lwZXIuc2xpZGVOZXh0KCk7IH1cbiAgICAgICAgaWYgKChrYyA9PT0gMzcgJiYgIXJ0bCkgfHwgKGtjID09PSAzOSAmJiBydGwpKSB7IHN3aXBlci5zbGlkZVByZXYoKTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtjID09PSAzOCB8fCBrYyA9PT0gNDApIHtcbiAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgICAgICBlbHNlIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtjID09PSA0MCkgeyBzd2lwZXIuc2xpZGVOZXh0KCk7IH1cbiAgICAgICAgaWYgKGtjID09PSAzOCkgeyBzd2lwZXIuc2xpZGVQcmV2KCk7IH1cbiAgICAgIH1cbiAgICAgIHN3aXBlci5lbWl0KCdrZXlQcmVzcycsIGtjKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgJChkb2MpLm9uKCdrZXlkb3duJywgc3dpcGVyLmtleWJvYXJkLmhhbmRsZSk7XG4gICAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgJChkb2MpLm9mZigna2V5ZG93bicsIHN3aXBlci5rZXlib2FyZC5oYW5kbGUpO1xuICAgICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBLZXlib2FyZCQxID0ge1xuICAgIG5hbWU6ICdrZXlib2FyZCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBrZXlib2FyZDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBlbmFibGU6IEtleWJvYXJkLmVuYWJsZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGlzYWJsZTogS2V5Ym9hcmQuZGlzYWJsZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgaGFuZGxlOiBLZXlib2FyZC5oYW5kbGUuYmluZChzd2lwZXIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmtleWJvYXJkLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRXZlbnRTdXBwb3J0ZWQoKSB7XG4gICAgdmFyIGV2ZW50TmFtZSA9ICdvbndoZWVsJztcbiAgICB2YXIgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZG9jO1xuXG4gICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbGVtZW50W2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgaWYgKCFpc1N1cHBvcnRlZFxuICAgICAgJiYgZG9jLmltcGxlbWVudGF0aW9uXG4gICAgICAmJiBkb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZVxuICAgICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAgICAgLy8gQHNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmVcbiAgICAgICYmIGRvYy5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWVcbiAgICApIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIHRlc3Qgc3VwcG9ydCBmb3IgdGhlIGB3aGVlbGAgZXZlbnQgaW4gSUU5Ky5cbiAgICAgIGlzU3VwcG9ydGVkID0gZG9jLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJ0V2ZW50cy53aGVlbCcsICczLjAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gIH1cbiAgdmFyIE1vdXNld2hlZWwgPSB7XG4gICAgbGFzdFNjcm9sbFRpbWU6IFV0aWxzLm5vdygpLFxuICAgIGV2ZW50OiAoZnVuY3Rpb24gZ2V0RXZlbnQoKSB7XG4gICAgICBpZiAod2luLm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHsgcmV0dXJuICdET01Nb3VzZVNjcm9sbCc7IH1cbiAgICAgIHJldHVybiBpc0V2ZW50U3VwcG9ydGVkKCkgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xuICAgIH0oKSksXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbiBub3JtYWxpemUoZSkge1xuICAgICAgLy8gUmVhc29uYWJsZSBkZWZhdWx0c1xuICAgICAgdmFyIFBJWEVMX1NURVAgPSAxMDtcbiAgICAgIHZhciBMSU5FX0hFSUdIVCA9IDQwO1xuICAgICAgdmFyIFBBR0VfSEVJR0hUID0gODAwO1xuXG4gICAgICB2YXIgc1ggPSAwO1xuICAgICAgdmFyIHNZID0gMDsgLy8gc3BpblgsIHNwaW5ZXG4gICAgICB2YXIgcFggPSAwO1xuICAgICAgdmFyIHBZID0gMDsgLy8gcGl4ZWxYLCBwaXhlbFlcblxuICAgICAgLy8gTGVnYWN5XG4gICAgICBpZiAoJ2RldGFpbCcgaW4gZSkge1xuICAgICAgICBzWSA9IGUuZGV0YWlsO1xuICAgICAgfVxuICAgICAgaWYgKCd3aGVlbERlbHRhJyBpbiBlKSB7XG4gICAgICAgIHNZID0gLWUud2hlZWxEZWx0YSAvIDEyMDtcbiAgICAgIH1cbiAgICAgIGlmICgnd2hlZWxEZWx0YVknIGluIGUpIHtcbiAgICAgICAgc1kgPSAtZS53aGVlbERlbHRhWSAvIDEyMDtcbiAgICAgIH1cbiAgICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcbiAgICAgICAgc1ggPSAtZS53aGVlbERlbHRhWCAvIDEyMDtcbiAgICAgIH1cblxuICAgICAgLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuICAgICAgaWYgKCdheGlzJyBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgc1ggPSBzWTtcbiAgICAgICAgc1kgPSAwO1xuICAgICAgfVxuXG4gICAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gICAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgICBwWSA9IGUuZGVsdGFZO1xuICAgICAgfVxuICAgICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgICAgcFggPSBlLmRlbHRhWDtcbiAgICAgIH1cblxuICAgICAgaWYgKChwWCB8fCBwWSkgJiYgZS5kZWx0YU1vZGUpIHtcbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7IC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgfSBlbHNlIHsgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZhbGwtYmFjayBpZiBzcGluIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG4gICAgICBpZiAocFggJiYgIXNYKSB7XG4gICAgICAgIHNYID0gKHBYIDwgMSkgPyAtMSA6IDE7XG4gICAgICB9XG4gICAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICAgIHNZID0gKHBZIDwgMSkgPyAtMSA6IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNwaW5YOiBzWCxcbiAgICAgICAgc3Bpblk6IHNZLFxuICAgICAgICBwaXhlbFg6IHBYLFxuICAgICAgICBwaXhlbFk6IHBZLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlTW91c2VMZWF2ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQ7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG5cbiAgICAgIGlmICghc3dpcGVyLm1vdXNlRW50ZXJlZCAmJiAhcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIHsgZSA9IGUub3JpZ2luYWxFdmVudDsgfSAvLyBqcXVlcnkgZml4XG4gICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgdmFyIHJ0bEZhY3RvciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7XG5cbiAgICAgIHZhciBkYXRhID0gTW91c2V3aGVlbC5ub3JtYWxpemUoZSk7XG5cbiAgICAgIGlmIChwYXJhbXMuZm9yY2VUb0F4aXMpIHtcbiAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkpIHsgZGVsdGEgPSBkYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjsgfVxuICAgICAgICAgIGVsc2UgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxZKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxYKSkgeyBkZWx0YSA9IGRhdGEucGl4ZWxZOyB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsdGEgPSBNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkgPyAtZGF0YS5waXhlbFggKiBydGxGYWN0b3IgOiAtZGF0YS5waXhlbFk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWx0YSA9PT0gMCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICBpZiAocGFyYW1zLmludmVydCkgeyBkZWx0YSA9IC1kZWx0YTsgfVxuXG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgaWYgKFV0aWxzLm5vdygpIC0gc3dpcGVyLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPiA2MCkge1xuICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgIGlmICgoIXN3aXBlci5pc0VuZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbCcsIGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGwnLCBlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yZWxlYXNlT25FZGdlcykgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB3aW4uRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIChkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eSk7XG4gICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmc7XG4gICAgICAgIHZhciB3YXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgeyBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTsgfVxuICAgICAgICBpZiAocG9zaXRpb24gPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7IHBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpOyB9XG5cbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICAgICAgaWYgKCghd2FzQmVnaW5uaW5nICYmIHN3aXBlci5pc0JlZ2lubmluZykgfHwgKCF3YXNFbmQgJiYgc3dpcGVyLmlzRW5kKSkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0KTtcbiAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGwnLCBlKTtcblxuICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikgeyBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpOyB9XG4gICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbiA9PT0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgICAgZWxzZSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghTW91c2V3aGVlbC5ldmVudCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgdmFyIHRhcmdldCA9IHN3aXBlci4kZWw7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgdGFyZ2V0ID0gJChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5vbignbW91c2VlbnRlcicsIHN3aXBlci5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIpO1xuICAgICAgdGFyZ2V0Lm9uKCdtb3VzZWxlYXZlJywgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgICB0YXJnZXQub24oTW91c2V3aGVlbC5ldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIU1vdXNld2hlZWwuZXZlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBpZiAoIXN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB2YXIgdGFyZ2V0ID0gc3dpcGVyLiRlbDtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkICE9PSAnY29udGFpbmVyJykge1xuICAgICAgICB0YXJnZXQgPSAkKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0Lm9mZihNb3VzZXdoZWVsLmV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfTtcblxuICB2YXIgTW91c2V3aGVlbCQxID0ge1xuICAgIG5hbWU6ICdtb3VzZXdoZWVsJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgICAgICAgaW52ZXJ0OiBmYWxzZSxcbiAgICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgICAgICBzZW5zaXRpdml0eTogMSxcbiAgICAgICAgZXZlbnRzVGFyZ2VkOiAnY29udGFpbmVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgZW5hYmxlOiBNb3VzZXdoZWVsLmVuYWJsZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGlzYWJsZTogTW91c2V3aGVlbC5kaXNhYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBoYW5kbGU6IE1vdXNld2hlZWwuaGFuZGxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyOiBNb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGhhbmRsZU1vdXNlTGVhdmU6IE1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgbGFzdFNjcm9sbFRpbWU6IFV0aWxzLm5vdygpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCkgeyBzd2lwZXIubW91c2V3aGVlbC5lbmFibGUoKTsgfVxuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgeyBzd2lwZXIubW91c2V3aGVlbC5kaXNhYmxlKCk7IH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgTmF2aWdhdGlvbiA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIC8vIFVwZGF0ZSBOYXZpZ2F0aW9uIEJ1dHRvbnNcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgeyByZXR1cm47IH1cbiAgICAgIHZhciByZWYgPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICAgIHZhciAkbmV4dEVsID0gcmVmLiRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbCA9IHJlZi4kcHJldkVsO1xuXG4gICAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgICRwcmV2RWwuYWRkQ2xhc3MocGFyYW1zLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRwcmV2RWwucmVtb3ZlQ2xhc3MocGFyYW1zLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgICRwcmV2RWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgICAgJG5leHRFbC5hZGRDbGFzcyhwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG5leHRFbC5yZW1vdmVDbGFzcyhwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgJG5leHRFbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25QcmV2Q2xpY2s6IGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSB7IHJldHVybjsgfVxuICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH0sXG4gICAgb25OZXh0Q2xpY2s6IGZ1bmN0aW9uIG9uTmV4dENsaWNrKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSB7IHJldHVybjsgfVxuICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICAgIGlmICghKHBhcmFtcy5uZXh0RWwgfHwgcGFyYW1zLnByZXZFbCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciAkbmV4dEVsO1xuICAgICAgdmFyICRwcmV2RWw7XG4gICAgICBpZiAocGFyYW1zLm5leHRFbCkge1xuICAgICAgICAkbmV4dEVsID0gJChwYXJhbXMubmV4dEVsKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHNcbiAgICAgICAgICAmJiB0eXBlb2YgcGFyYW1zLm5leHRFbCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAmJiAkbmV4dEVsLmxlbmd0aCA+IDFcbiAgICAgICAgICAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCkubGVuZ3RoID09PSAxXG4gICAgICAgICkge1xuICAgICAgICAgICRuZXh0RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucHJldkVsKSB7XG4gICAgICAgICRwcmV2RWwgPSAkKHBhcmFtcy5wcmV2RWwpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50c1xuICAgICAgICAgICYmIHR5cGVvZiBwYXJhbXMucHJldkVsID09PSAnc3RyaW5nJ1xuICAgICAgICAgICYmICRwcmV2RWwubGVuZ3RoID4gMVxuICAgICAgICAgICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKS5sZW5ndGggPT09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgJHByZXZFbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJG5leHRFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vbk5leHRDbGljayk7XG4gICAgICB9XG4gICAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJHByZXZFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIubmF2aWdhdGlvbiwge1xuICAgICAgICAkbmV4dEVsOiAkbmV4dEVsLFxuICAgICAgICBuZXh0RWw6ICRuZXh0RWwgJiYgJG5leHRFbFswXSxcbiAgICAgICAgJHByZXZFbDogJHByZXZFbCxcbiAgICAgICAgcHJldkVsOiAkcHJldkVsICYmICRwcmV2RWxbMF0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciByZWYgPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICAgIHZhciAkbmV4dEVsID0gcmVmLiRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbCA9IHJlZi4kcHJldkVsO1xuICAgICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGgpIHtcbiAgICAgICAgJG5leHRFbC5vZmYoJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spO1xuICAgICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoKSB7XG4gICAgICAgICRwcmV2RWwub2ZmKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKTtcbiAgICAgICAgJHByZXZFbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgTmF2aWdhdGlvbiQxID0ge1xuICAgIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBudWxsLFxuICAgICAgICBwcmV2RWw6IG51bGwsXG5cbiAgICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1oaWRkZW4nLFxuICAgICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBpbml0OiBOYXZpZ2F0aW9uLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHVwZGF0ZTogTmF2aWdhdGlvbi51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGRlc3Ryb3k6IE5hdmlnYXRpb24uZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25OZXh0Q2xpY2s6IE5hdmlnYXRpb24ub25OZXh0Q2xpY2suYmluZChzd2lwZXIpLFxuICAgICAgICAgIG9uUHJldkNsaWNrOiBOYXZpZ2F0aW9uLm9uUHJldkNsaWNrLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi5pbml0KCk7XG4gICAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHRvRWRnZTogZnVuY3Rpb24gdG9FZGdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgZnJvbUVkZ2U6IGZ1bmN0aW9uIGZyb21FZGdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLmRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHJlZiA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgICAgICB2YXIgJG5leHRFbCA9IHJlZi4kbmV4dEVsO1xuICAgICAgICB2YXIgJHByZXZFbCA9IHJlZi4kcHJldkVsO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGVPbkNsaWNrXG4gICAgICAgICAgJiYgISQoZS50YXJnZXQpLmlzKCRwcmV2RWwpXG4gICAgICAgICAgJiYgISQoZS50YXJnZXQpLmlzKCRuZXh0RWwpXG4gICAgICAgICkge1xuICAgICAgICAgIHZhciBpc0hpZGRlbjtcbiAgICAgICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAgICAgaXNIaWRkZW4gPSAkbmV4dEVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIGlmICgkcHJldkVsKSB7XG4gICAgICAgICAgICBpc0hpZGRlbiA9ICRwcmV2RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvblNob3cnLCBzd2lwZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvbkhpZGUnLCBzd2lwZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAgICAgJG5leHRFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJHByZXZFbCkge1xuICAgICAgICAgICAgJHByZXZFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYWdpbmF0aW9uID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgLy8gUmVuZGVyIHx8IFVwZGF0ZSBQYWdpbmF0aW9uIGJ1bGxldHMvaXRlbXNcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgICAvLyBDdXJyZW50L1RvdGFsXG4gICAgICB2YXIgY3VycmVudDtcbiAgICAgIHZhciB0b3RhbCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIGN1cnJlbnQgPSBNYXRoLmNlaWwoKHN3aXBlci5hY3RpdmVJbmRleCAtIHN3aXBlci5sb29wZWRTbGlkZXMpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIGlmIChjdXJyZW50ID4gc2xpZGVzTGVuZ3RoIC0gMSAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpIHtcbiAgICAgICAgICBjdXJyZW50IC09IChzbGlkZXNMZW5ndGggLSAoc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgeyBjdXJyZW50IC09IHRvdGFsOyB9XG4gICAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIHsgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDsgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3VycmVudCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgICB9XG4gICAgICAvLyBUeXBlc1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGJ1bGxldHMgPSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzO1xuICAgICAgICB2YXIgZmlyc3RJbmRleDtcbiAgICAgICAgdmFyIGxhc3RJbmRleDtcbiAgICAgICAgdmFyIG1pZEluZGV4O1xuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSA9IGJ1bGxldHMuZXEoMClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ291dGVyV2lkdGgnIDogJ291dGVySGVpZ2h0J10odHJ1ZSk7XG4gICAgICAgICAgJGVsLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCcsICgoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSAqIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCkpICsgXCJweFwiKSk7XG4gICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPiAxICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCArPSAoY3VycmVudCAtIHN3aXBlci5wcmV2aW91c0luZGV4KTtcbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpcnN0SW5kZXggPSBjdXJyZW50IC0gc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4O1xuICAgICAgICAgIGxhc3RJbmRleCA9IGZpcnN0SW5kZXggKyAoTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMpIC0gMSk7XG4gICAgICAgICAgbWlkSW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldHMucmVtb3ZlQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCIgXCIgKyAocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW5leHQgXCIgKyAocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW5leHQtbmV4dCBcIiArIChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldiBcIiArIChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldi1wcmV2IFwiICsgKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1tYWluXCIpKTtcbiAgICAgICAgaWYgKCRlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgYnVsbGV0cy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgYnVsbGV0KSB7XG4gICAgICAgICAgICB2YXIgJGJ1bGxldCA9ICQoYnVsbGV0KTtcbiAgICAgICAgICAgIHZhciBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4ICYmIGJ1bGxldEluZGV4IDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbWFpblwiKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgJGJ1bGxldFxuICAgICAgICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCgocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLXByZXZcIikpXG4gICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItcHJldi1wcmV2XCIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICRidWxsZXRcbiAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1uZXh0XCIpKVxuICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCgocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKSArIFwiLW5leHQtbmV4dFwiKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgJGJ1bGxldCA9IGJ1bGxldHMuZXEoY3VycmVudCk7XG4gICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIHZhciAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgICAgdmFyICRsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0cy5lcShsYXN0SW5kZXgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgYnVsbGV0cy5lcShpKS5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1tYWluXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRmaXJzdERpc3BsYXllZEJ1bGxldFxuICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2XCIpKVxuICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcygoKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcykgKyBcIi1wcmV2LXByZXZcIikpO1xuICAgICAgICAgICAgJGxhc3REaXNwbGF5ZWRCdWxsZXRcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dFwiKSlcbiAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoKChwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpICsgXCItbmV4dC1uZXh0XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIHZhciBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgICAgdmFyIGJ1bGxldHNPZmZzZXQgPSAoKChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogZHluYW1pY0J1bGxldHNMZW5ndGgpIC0gKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpKSAvIDIpIC0gKG1pZEluZGV4ICogc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSk7XG4gICAgICAgICAgdmFyIG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgIGJ1bGxldHMuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/IG9mZnNldFByb3AgOiAndG9wJywgKGJ1bGxldHNPZmZzZXQgKyBcInB4XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAgICRlbC5maW5kKChcIi5cIiArIChwYXJhbXMuY3VycmVudENsYXNzKSkpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSkpO1xuICAgICAgICAkZWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLnRvdGFsQ2xhc3MpKSkudGV4dChwYXJhbXMuZm9ybWF0RnJhY3Rpb25Ub3RhbCh0b3RhbCkpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc2JhckRpcmVjdGlvbjtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWw7XG4gICAgICAgIHZhciBzY2FsZVggPSAxO1xuICAgICAgICB2YXIgc2NhbGVZID0gMTtcbiAgICAgICAgaWYgKHByb2dyZXNzYmFyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBzY2FsZVggPSBzY2FsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICAkZWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKSkpLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKFwiICsgc2NhbGVYICsgXCIpIHNjYWxlWShcIiArIHNjYWxlWSArIFwiKVwiKSkudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2N1c3RvbScgJiYgcGFyYW1zLnJlbmRlckN1c3RvbSkge1xuICAgICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgc3dpcGVyLCAkZWxbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25VcGRhdGUnLCBzd2lwZXIsICRlbFswXSk7XG4gICAgICB9XG4gICAgICAkZWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICAgICAgdmFyICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycpIHtcbiAgICAgICAgdmFyIG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLnJlbmRlckJ1bGxldCkge1xuICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gXCI8XCIgKyAocGFyYW1zLmJ1bGxldEVsZW1lbnQpICsgXCIgY2xhc3M9XFxcIlwiICsgKHBhcmFtcy5idWxsZXRDbGFzcykgKyBcIlxcXCI+PC9cIiArIChwYXJhbXMuYnVsbGV0RWxlbWVudCkgKyBcIj5cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzID0gJGVsLmZpbmQoKFwiLlwiICsgKHBhcmFtcy5idWxsZXRDbGFzcykpKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICBpZiAocGFyYW1zLnJlbmRlckZyYWN0aW9uKSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyRnJhY3Rpb24uY2FsbChzd2lwZXIsIHBhcmFtcy5jdXJyZW50Q2xhc3MsIHBhcmFtcy50b3RhbENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgKHBhcmFtcy5jdXJyZW50Q2xhc3MpICsgXCJcXFwiPjwvc3Bhbj5cIlxuICAgICAgICAgICsgJyAvICdcbiAgICAgICAgICArIFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgKHBhcmFtcy50b3RhbENsYXNzKSArIFwiXFxcIj48L3NwYW4+XCI7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICAgIGlmIChwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhci5jYWxsKHN3aXBlciwgcGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgKHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcykgKyBcIlxcXCI+PC9zcGFuPlwiO1xuICAgICAgICB9XG4gICAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzd2lwZXIucGFnaW5hdGlvbi4kZWxbMF0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICAgIGlmICghcGFyYW1zLmVsKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgJGVsID0gJChwYXJhbXMuZWwpO1xuICAgICAgaWYgKCRlbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50c1xuICAgICAgICAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiAkZWwubGVuZ3RoID4gMVxuICAgICAgICAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLmVsKS5sZW5ndGggPT09IDFcbiAgICAgICkge1xuICAgICAgICAkZWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmNsaWNrYWJsZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuXG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgJGVsLmFkZENsYXNzKChcIlwiICsgKHBhcmFtcy5tb2RpZmllckNsYXNzKSArIChwYXJhbXMudHlwZSkgKyBcIi1keW5hbWljXCIpKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPCAxKSB7XG4gICAgICAgICAgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJyAmJiBwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAgICRlbC5vbignY2xpY2snLCAoXCIuXCIgKyAocGFyYW1zLmJ1bGxldENsYXNzKSksIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKiBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHsgaW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlczsgfVxuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgICAgICAkZWw6ICRlbCxcbiAgICAgICAgZWw6ICRlbFswXSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICAgIGlmICghcGFyYW1zLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uJGVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuXG4gICAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmhpZGRlbkNsYXNzKTtcbiAgICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcbiAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzKSB7IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTsgfVxuICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgJGVsLm9mZignY2xpY2snLCAoXCIuXCIgKyAocGFyYW1zLmJ1bGxldENsYXNzKSkpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgdmFyIFBhZ2luYXRpb24kMSA9IHtcbiAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgcGFyYW1zOiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogbnVsbCxcbiAgICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXG4gICAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZTogZmFsc2UsXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsXG4gICAgICAgIGR5bmFtaWNNYWluQnVsbGV0czogMSxcbiAgICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBmdW5jdGlvbiAobnVtYmVyKSB7IHJldHVybiBudW1iZXI7IH0sXG4gICAgICAgIGZvcm1hdEZyYWN0aW9uVG90YWw6IGZ1bmN0aW9uIChudW1iZXIpIHsgcmV0dXJuIG51bWJlcjsgfSxcbiAgICAgICAgYnVsbGV0Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgICBidWxsZXRBY3RpdmVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnLFxuICAgICAgICBtb2RpZmllckNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tJywgLy8gTkVXXG4gICAgICAgIGN1cnJlbnRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnQnLFxuICAgICAgICB0b3RhbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tdG90YWwnLFxuICAgICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWhpZGRlbicsXG4gICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCcsXG4gICAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlJyxcbiAgICAgICAgY2xpY2thYmxlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUnLCAvLyBORVdcbiAgICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tbG9jaycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGluaXQ6IFBhZ2luYXRpb24uaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgcmVuZGVyOiBQYWdpbmF0aW9uLnJlbmRlci5iaW5kKHN3aXBlciksXG4gICAgICAgICAgdXBkYXRlOiBQYWdpbmF0aW9uLnVwZGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGVzdHJveTogUGFnaW5hdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXg6IDAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uaW5pdCgpO1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgYWN0aXZlSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uIGFjdGl2ZUluZGV4Q2hhbmdlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc25hcEluZGV4Q2hhbmdlOiBmdW5jdGlvbiBzbmFwSW5kZXhDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2xpZGVzTGVuZ3RoQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZXNMZW5ndGhDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbmFwR3JpZExlbmd0aENoYW5nZTogZnVuY3Rpb24gc25hcEdyaWRMZW5ndGhDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbFxuICAgICAgICAgICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGlja1xuICAgICAgICAgICYmIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPiAwXG4gICAgICAgICAgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFyIGlzSGlkZGVuID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblNob3cnLCBzd2lwZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvbkhpZGUnLCBzd2lwZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBTY3JvbGxiYXIgPSB7XG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgICAgdmFyIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICAgICAgdmFyIGRyYWdTaXplID0gc2Nyb2xsYmFyLmRyYWdTaXplO1xuICAgICAgdmFyIHRyYWNrU2l6ZSA9IHNjcm9sbGJhci50cmFja1NpemU7XG4gICAgICB2YXIgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG5cbiAgICAgIHZhciBuZXdTaXplID0gZHJhZ1NpemU7XG4gICAgICB2YXIgbmV3UG9zID0gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKSAqIHByb2dyZXNzO1xuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBuZXdQb3MgPSAtbmV3UG9zO1xuICAgICAgICBpZiAobmV3UG9zID4gMCkge1xuICAgICAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKC1uZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgKyBuZXdQb3M7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zIDwgMCkge1xuICAgICAgICBuZXdTaXplID0gZHJhZ1NpemUgKyBuZXdQb3M7XG4gICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKG5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgLSBuZXdQb3M7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIGlmIChTdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICRkcmFnRWwudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKFwiICsgbmV3UG9zICsgXCJweCwgMCwgMClcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcmFnRWwudHJhbnNmb3JtKChcInRyYW5zbGF0ZVgoXCIgKyBuZXdQb3MgKyBcInB4KVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoU3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgICAkZHJhZ0VsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgbmV3UG9zICsgXCJweCwgMClcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcmFnRWwudHJhbnNmb3JtKChcInRyYW5zbGF0ZVkoXCIgKyBuZXdQb3MgKyBcInB4KVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSBuZXdTaXplICsgXCJweFwiO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLnRpbWVvdXQpO1xuICAgICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgeyByZXR1cm47IH1cbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuJGRyYWdFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICAgIHVwZGF0ZVNpemU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuXG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgdmFyIHRyYWNrU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRlbFswXS5vZmZzZXRXaWR0aCA6ICRlbFswXS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHZhciBkaXZpZGVyID0gc3dpcGVyLnNpemUgLyBzd2lwZXIudmlydHVhbFNpemU7XG4gICAgICB2YXIgbW92ZURpdmlkZXIgPSBkaXZpZGVyICogKHRyYWNrU2l6ZSAvIHN3aXBlci5zaXplKTtcbiAgICAgIHZhciBkcmFnU2l6ZTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGRyYWdTaXplID0gdHJhY2tTaXplICogZGl2aWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdTaXplID0gcGFyc2VJbnQoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsIDEwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gZHJhZ1NpemUgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IGRyYWdTaXplICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGl2aWRlciA+PSAxKSB7XG4gICAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5oaWRlKSB7XG4gICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cbiAgICAgIFV0aWxzLmV4dGVuZChzY3JvbGxiYXIsIHtcbiAgICAgICAgdHJhY2tTaXplOiB0cmFja1NpemUsXG4gICAgICAgIGRpdmlkZXI6IGRpdmlkZXIsXG4gICAgICAgIG1vdmVEaXZpZGVyOiBtb3ZlRGl2aWRlcixcbiAgICAgICAgZHJhZ1NpemU6IGRyYWdTaXplLFxuICAgICAgfSk7XG4gICAgICBzY3JvbGxiYXIuJGVsW3N3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9LFxuICAgIHNldERyYWdQb3NpdGlvbjogZnVuY3Rpb24gc2V0RHJhZ1Bvc2l0aW9uKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyIGRyYWdTaXplID0gc2Nyb2xsYmFyLmRyYWdTaXplO1xuICAgICAgdmFyIHRyYWNrU2l6ZSA9IHNjcm9sbGJhci50cmFja1NpemU7XG5cbiAgICAgIHZhciBwb2ludGVyUG9zaXRpb247XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHBvaW50ZXJQb3NpdGlvbiA9ICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYIHx8IGUuY2xpZW50WCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb2ludGVyUG9zaXRpb24gPSAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpO1xuICAgICAgfVxuICAgICAgdmFyIHBvc2l0aW9uUmF0aW87XG4gICAgICBwb3NpdGlvblJhdGlvID0gKChwb2ludGVyUG9zaXRpb24pIC0gJGVsLm9mZnNldCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSAtIChkcmFnU2l6ZSAvIDIpKSAvICh0cmFja1NpemUgLSBkcmFnU2l6ZSk7XG4gICAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBwb3NpdGlvblJhdGlvID0gMSAtIHBvc2l0aW9uUmF0aW87XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArICgoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAqIHBvc2l0aW9uUmF0aW8pO1xuXG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfSxcbiAgICBvbkRyYWdTdGFydDogZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICAgIHZhciAkZHJhZ0VsID0gc2Nyb2xsYmFyLiRkcmFnRWw7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICRkcmFnRWwudHJhbnNpdGlvbigxMDApO1xuICAgICAgc2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbihlKTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpO1xuXG4gICAgICAkZWwudHJhbnNpdGlvbigwKTtcbiAgICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgICB9XG4gICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gICAgfSxcbiAgICBvbkRyYWdNb3ZlOiBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICB2YXIgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuXG4gICAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSB7IHJldHVybjsgfVxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgICBlbHNlIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9XG4gICAgICBzY3JvbGxiYXIuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDApO1xuICAgICAgJGVsLnRyYW5zaXRpb24oMCk7XG4gICAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMCk7XG4gICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ01vdmUnLCBlKTtcbiAgICB9LFxuICAgIG9uRHJhZ0VuZDogZnVuY3Rpb24gb25EcmFnRW5kKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuXG4gICAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSB7IHJldHVybjsgfVxuICAgICAgc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci5kcmFnVGltZW91dCk7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQgPSBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbGJhckRyYWdFbmQnLCBlKTtcbiAgICAgIGlmIChwYXJhbXMuc25hcE9uUmVsZWFzZSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gZW5hYmxlRHJhZ2dhYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICB2YXIgdG91Y2hFdmVudHNUb3VjaCA9IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoO1xuICAgICAgdmFyIHRvdWNoRXZlbnRzRGVza3RvcCA9IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICAgdmFyIHRhcmdldCA9ICRlbFswXTtcbiAgICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICBpZiAoIVN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVEcmFnZ2FibGU6IGZ1bmN0aW9uIGRpc2FibGVEcmFnZ2FibGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgIHZhciB0b3VjaEV2ZW50c1RvdWNoID0gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2g7XG4gICAgICB2YXIgdG91Y2hFdmVudHNEZXNrdG9wID0gc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICB2YXIgdGFyZ2V0ID0gJGVsWzBdO1xuICAgICAgdmFyIGFjdGl2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgIGlmICghU3VwcG9ydC50b3VjaCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3Auc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AuZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgICAgdmFyICRzd2lwZXJFbCA9IHN3aXBlci4kZWw7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG5cbiAgICAgIHZhciAkZWwgPSAkKHBhcmFtcy5lbCk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSAmJiAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAkZWwgPSAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGRyYWdFbCA9ICRlbC5maW5kKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpKSk7XG4gICAgICBpZiAoJGRyYWdFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGRyYWdFbCA9ICQoKFwiPGRpdiBjbGFzcz1cXFwiXCIgKyAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzKSArIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgICAkZWwuYXBwZW5kKCRkcmFnRWwpO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5leHRlbmQoc2Nyb2xsYmFyLCB7XG4gICAgICAgICRlbDogJGVsLFxuICAgICAgICBlbDogJGVsWzBdLFxuICAgICAgICAkZHJhZ0VsOiAkZHJhZ0VsLFxuICAgICAgICBkcmFnRWw6ICRkcmFnRWxbMF0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcmFtcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgc2Nyb2xsYmFyLmVuYWJsZURyYWdnYWJsZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gICAgfSxcbiAgfTtcblxuICB2YXIgU2Nyb2xsYmFyJDEgPSB7XG4gICAgbmFtZTogJ3Njcm9sbGJhcicsXG4gICAgcGFyYW1zOiB7XG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRyYWdTaXplOiAnYXV0bycsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBzbmFwT25SZWxlYXNlOiB0cnVlLFxuICAgICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWxvY2snLFxuICAgICAgICBkcmFnQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWRyYWcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgIGluaXQ6IFNjcm9sbGJhci5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkZXN0cm95OiBTY3JvbGxiYXIuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgdXBkYXRlU2l6ZTogU2Nyb2xsYmFyLnVwZGF0ZVNpemUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zbGF0ZTogU2Nyb2xsYmFyLnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogU2Nyb2xsYmFyLnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICAgIGVuYWJsZURyYWdnYWJsZTogU2Nyb2xsYmFyLmVuYWJsZURyYWdnYWJsZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgZGlzYWJsZURyYWdnYWJsZTogU2Nyb2xsYmFyLmRpc2FibGVEcmFnZ2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldERyYWdQb3NpdGlvbjogU2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25EcmFnU3RhcnQ6IFNjcm9sbGJhci5vbkRyYWdTdGFydC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25EcmFnTW92ZTogU2Nyb2xsYmFyLm9uRHJhZ01vdmUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIG9uRHJhZ0VuZDogU2Nyb2xsYmFyLm9uRHJhZ0VuZC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgICAgIGRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuaW5pdCgpO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICB9LFxuICAgICAgb2JzZXJ2ZXJVcGRhdGU6IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYXJhbGxheCA9IHtcbiAgICBzZXRUcmFuc2Zvcm06IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG5cbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgIHZhciBydGxGYWN0b3IgPSBydGwgPyAtMSA6IDE7XG5cbiAgICAgIHZhciBwID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4JykgfHwgJzAnO1xuICAgICAgdmFyIHggPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgICAgdmFyIHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xuICAgICAgdmFyIHNjYWxlID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlJyk7XG4gICAgICB2YXIgb3BhY2l0eSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5Jyk7XG5cbiAgICAgIGlmICh4IHx8IHkpIHtcbiAgICAgICAgeCA9IHggfHwgJzAnO1xuICAgICAgICB5ID0geSB8fCAnMCc7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB4ID0gcDtcbiAgICAgICAgeSA9ICcwJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHkgPSBwO1xuICAgICAgICB4ID0gJzAnO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHgpLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgIHggPSAocGFyc2VJbnQoeCwgMTApICogcHJvZ3Jlc3MgKiBydGxGYWN0b3IpICsgXCIlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gKHggKiBwcm9ncmVzcyAqIHJ0bEZhY3RvcikgKyBcInB4XCI7XG4gICAgICB9XG4gICAgICBpZiAoKHkpLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgIHkgPSAocGFyc2VJbnQoeSwgMTApICogcHJvZ3Jlc3MpICsgXCIlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5ID0gKHkgKiBwcm9ncmVzcykgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY3VycmVudE9wYWNpdHkgPSBvcGFjaXR5IC0gKChvcGFjaXR5IC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSkpO1xuICAgICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBzY2FsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2NhbGUgPT09IG51bGwpIHtcbiAgICAgICAgJGVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweClcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKChzY2FsZSAtIDEpICogKDEgLSBNYXRoLmFicyhwcm9ncmVzcykpKTtcbiAgICAgICAgJGVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweCkgc2NhbGUoXCIgKyBjdXJyZW50U2NhbGUgKyBcIilcIikpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gICAgICAkZWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbCkge1xuICAgICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oZWwsIHByb2dyZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVJbmRleCwgc2xpZGVFbCkge1xuICAgICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJykge1xuICAgICAgICAgIHNsaWRlUHJvZ3Jlc3MgKz0gTWF0aC5jZWlsKHNsaWRlSW5kZXggLyAyKSAtIChwcm9ncmVzcyAqIChzbmFwR3JpZC5sZW5ndGggLSAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVQcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlUHJvZ3Jlc3MsIC0xKSwgMSk7XG4gICAgICAgICQoc2xpZGVFbCkuZmluZCgnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0nKVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oZWwsIHNsaWRlUHJvZ3Jlc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoIGR1cmF0aW9uID09PSB2b2lkIDAgKSBkdXJhdGlvbiA9IHRoaXMucGFyYW1zLnNwZWVkO1xuXG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgJGVsLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGluZGV4LCBwYXJhbGxheEVsKSB7XG4gICAgICAgICAgdmFyICRwYXJhbGxheEVsID0gJChwYXJhbGxheEVsKTtcbiAgICAgICAgICB2YXIgcGFyYWxsYXhEdXJhdGlvbiA9IHBhcnNlSW50KCRwYXJhbGxheEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uJyksIDEwKSB8fCBkdXJhdGlvbjtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHsgcGFyYWxsYXhEdXJhdGlvbiA9IDA7IH1cbiAgICAgICAgICAkcGFyYWxsYXhFbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBQYXJhbGxheCQxID0ge1xuICAgIG5hbWU6ICdwYXJhbGxheCcsXG4gICAgcGFyYW1zOiB7XG4gICAgICBwYXJhbGxheDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBwYXJhbGxheDoge1xuICAgICAgICAgIHNldFRyYW5zZm9ybTogUGFyYWxsYXguc2V0VHJhbnNmb3JtLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IFBhcmFsbGF4LnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbjogUGFyYWxsYXguc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgWm9vbSA9IHtcbiAgICAvLyBDYWxjIFNjYWxlIEZyb20gTXVsdGktdG91Y2hlc1xuICAgIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXM6IGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7IHJldHVybiAxOyB9XG4gICAgICB2YXIgeDEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB2YXIgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICB2YXIgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgICB2YXIgeTIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKE1hdGgucG93KCAoeDIgLSB4MSksIDIgKSkgKyAoTWF0aC5wb3coICh5MiAtIHkxKSwgMiApKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgfSxcbiAgICAvLyBFdmVudHNcbiAgICBvbkdlc3R1cmVTdGFydDogZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuICAgICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyB8fCAoZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gWm9vbS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsIHx8ICFnZXN0dXJlLiRzbGlkZUVsLmxlbmd0aCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLnN3aXBlci1zbGlkZScpO1xuICAgICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGggPT09IDApIHsgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTsgfVxuICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gZ2VzdHVyZS4kc2xpZGVFbC5maW5kKCdpbWcsIHN2ZywgY2FudmFzJyk7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoKFwiLlwiICsgKHBhcmFtcy5jb250YWluZXJDbGFzcykpKTtcbiAgICAgICAgZ2VzdHVyZS5tYXhSYXRpbyA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICAgIGlmIChnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApO1xuICAgICAgc3dpcGVyLnpvb20uaXNTY2FsaW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uR2VzdHVyZUNoYW5nZTogZnVuY3Rpb24gb25HZXN0dXJlQ2hhbmdlKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICAgIGlmICghU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCAoZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gdHJ1ZTtcbiAgICAgICAgZ2VzdHVyZS5zY2FsZU1vdmUgPSBab29tLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICB6b29tLnNjYWxlID0gZS5zY2FsZSAqIHpvb20uY3VycmVudFNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgem9vbS5zY2FsZSA9IChnZXN0dXJlLnNjYWxlTW92ZSAvIGdlc3R1cmUuc2NhbGVTdGFydCkgKiB6b29tLmN1cnJlbnRTY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgICB6b29tLnNjYWxlID0gKGdlc3R1cmUubWF4UmF0aW8gLSAxKSArIChNYXRoLnBvdyggKCh6b29tLnNjYWxlIC0gZ2VzdHVyZS5tYXhSYXRpbykgKyAxKSwgMC41ICkpO1xuICAgICAgfVxuICAgICAgaWYgKHpvb20uc2NhbGUgPCBwYXJhbXMubWluUmF0aW8pIHtcbiAgICAgICAgem9vbS5zY2FsZSA9IChwYXJhbXMubWluUmF0aW8gKyAxKSAtIChNYXRoLnBvdyggKChwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlKSArIDEpLCAwLjUgKSk7XG4gICAgICB9XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyAoem9vbS5zY2FsZSkgKyBcIilcIikpO1xuICAgIH0sXG4gICAgb25HZXN0dXJlRW5kOiBmdW5jdGlvbiBvbkdlc3R1cmVFbmQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIGlmICghem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgfHwgIXpvb20uZmFrZUdlc3R1cmVNb3ZlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IChlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyICYmICFEZXZpY2UuYW5kcm9pZCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICB6b29tLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4oem9vbS5zY2FsZSwgZ2VzdHVyZS5tYXhSYXRpbyksIHBhcmFtcy5taW5SYXRpbyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArICh6b29tLnNjYWxlKSArIFwiKVwiKSk7XG4gICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgICB6b29tLmlzU2NhbGluZyA9IGZhbHNlO1xuICAgICAgaWYgKHpvb20uc2NhbGUgPT09IDEpIHsgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDsgfVxuICAgIH0sXG4gICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICB2YXIgaW1hZ2UgPSB6b29tLmltYWdlO1xuICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChEZXZpY2UuYW5kcm9pZCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICAgIGltYWdlLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICBpbWFnZS50b3VjaGVzU3RhcnQueCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgIH0sXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgdmFyIGltYWdlID0gem9vbS5pbWFnZTtcbiAgICAgIHZhciB2ZWxvY2l0eSA9IHpvb20udmVsb2NpdHk7XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWdlc3R1cmUuJHNsaWRlRWwpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmICghaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgICBpbWFnZS53aWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGltYWdlLmhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBpbWFnZS5zdGFydFggPSBVdGlscy5nZXRUcmFuc2xhdGUoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd4JykgfHwgMDtcbiAgICAgICAgaW1hZ2Uuc3RhcnRZID0gVXRpbHMuZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneScpIHx8IDA7XG4gICAgICAgIGdlc3R1cmUuc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGdlc3R1cmUuc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKTtcbiAgICAgICAgaWYgKHN3aXBlci5ydGwpIHtcbiAgICAgICAgICBpbWFnZS5zdGFydFggPSAtaW1hZ2Uuc3RhcnRYO1xuICAgICAgICAgIGltYWdlLnN0YXJ0WSA9IC1pbWFnZS5zdGFydFk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICAgIHZhciBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHZhciBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuXG4gICAgICBpZiAoc2NhbGVkV2lkdGggPCBnZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgZ2VzdHVyZS5zbGlkZUhlaWdodCkgeyByZXR1cm47IH1cblxuICAgICAgaW1hZ2UubWluWCA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgICAgaW1hZ2UubWluWSA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG5cbiAgICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgICAgaWYgKCFpbWFnZS5pc01vdmVkICYmICF6b29tLmlzU2NhbGluZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3dpcGVyLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgICAgJiYgKFxuICAgICAgICAgICAgKE1hdGguZmxvb3IoaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54IDwgaW1hZ2UudG91Y2hlc1N0YXJ0LngpXG4gICAgICAgICAgICB8fCAoTWF0aC5mbG9vcihpbWFnZS5tYXhYKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFgpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPiBpbWFnZS50b3VjaGVzU3RhcnQueClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBpZiAoXG4gICAgICAgICAgIXN3aXBlci5pc0hvcml6b250YWwoKVxuICAgICAgICAgICYmIChcbiAgICAgICAgICAgIChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55KVxuICAgICAgICAgICAgfHwgKE1hdGguZmxvb3IoaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGltYWdlLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIGltYWdlLnRvdWNoZXNTdGFydC54KSArIGltYWdlLnN0YXJ0WDtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSBpbWFnZS50b3VjaGVzU3RhcnQueSkgKyBpbWFnZS5zdGFydFk7XG5cbiAgICAgIGlmIChpbWFnZS5jdXJyZW50WCA8IGltYWdlLm1pblgpIHtcbiAgICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UubWluWCArIDEpIC0gKE1hdGgucG93KCAoKGltYWdlLm1pblggLSBpbWFnZS5jdXJyZW50WCkgKyAxKSwgMC44ICkpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmN1cnJlbnRYID4gaW1hZ2UubWF4WCkge1xuICAgICAgICBpbWFnZS5jdXJyZW50WCA9IChpbWFnZS5tYXhYIC0gMSkgKyAoTWF0aC5wb3coICgoaW1hZ2UuY3VycmVudFggLSBpbWFnZS5tYXhYKSArIDEpLCAwLjggKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZS5jdXJyZW50WSA8IGltYWdlLm1pblkpIHtcbiAgICAgICAgaW1hZ2UuY3VycmVudFkgPSAoaW1hZ2UubWluWSArIDEpIC0gKE1hdGgucG93KCAoKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSkgKyAxKSwgMC44ICkpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmN1cnJlbnRZID4gaW1hZ2UubWF4WSkge1xuICAgICAgICBpbWFnZS5jdXJyZW50WSA9IChpbWFnZS5tYXhZIC0gMSkgKyAoTWF0aC5wb3coICgoaW1hZ2UuY3VycmVudFkgLSBpbWFnZS5tYXhZKSArIDEpLCAwLjggKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZlbG9jaXR5XG4gICAgICBpZiAoIXZlbG9jaXR5LnByZXZQb3NpdGlvblgpIHsgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7IH1cbiAgICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgeyB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTsgfVxuICAgICAgaWYgKCF2ZWxvY2l0eS5wcmV2VGltZSkgeyB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7IH1cbiAgICAgIHZlbG9jaXR5LnggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIC8gKERhdGUubm93KCkgLSB2ZWxvY2l0eS5wcmV2VGltZSkgLyAyO1xuICAgICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgICBpZiAoTWF0aC5hYnMoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIDwgMikgeyB2ZWxvY2l0eS54ID0gMDsgfVxuICAgICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSA8IDIpIHsgdmVsb2NpdHkueSA9IDA7IH1cbiAgICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgICAgdmVsb2NpdHkucHJldlBvc2l0aW9uWSA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lnk7XG4gICAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIChpbWFnZS5jdXJyZW50WCkgKyBcInB4LCBcIiArIChpbWFnZS5jdXJyZW50WSkgKyBcInB4LDApXCIpKTtcbiAgICB9LFxuICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICAgIHZhciBpbWFnZSA9IHpvb20uaW1hZ2U7XG4gICAgICB2YXIgdmVsb2NpdHkgPSB6b29tLnZlbG9jaXR5O1xuICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICB2YXIgbW9tZW50dW1EdXJhdGlvblggPSAzMDA7XG4gICAgICB2YXIgbW9tZW50dW1EdXJhdGlvblkgPSAzMDA7XG4gICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVggPSB2ZWxvY2l0eS54ICogbW9tZW50dW1EdXJhdGlvblg7XG4gICAgICB2YXIgbmV3UG9zaXRpb25YID0gaW1hZ2UuY3VycmVudFggKyBtb21lbnR1bURpc3RhbmNlWDtcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHZlbG9jaXR5LnkgKiBtb21lbnR1bUR1cmF0aW9uWTtcbiAgICAgIHZhciBuZXdQb3NpdGlvblkgPSBpbWFnZS5jdXJyZW50WSArIG1vbWVudHVtRGlzdGFuY2VZO1xuXG4gICAgICAvLyBGaXggZHVyYXRpb25cbiAgICAgIGlmICh2ZWxvY2l0eS54ICE9PSAwKSB7IG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpOyB9XG4gICAgICBpZiAodmVsb2NpdHkueSAhPT0gMCkgeyBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTsgfVxuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLm1heChtb21lbnR1bUR1cmF0aW9uWCwgbW9tZW50dW1EdXJhdGlvblkpO1xuXG4gICAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gbmV3UG9zaXRpb25ZO1xuXG4gICAgICAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG4gICAgICB2YXIgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgIGltYWdlLm1pblggPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIpIC0gKHNjYWxlZFdpZHRoIC8gMikpLCAwKTtcbiAgICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyKSAtIChzY2FsZWRIZWlnaHQgLyAyKSksIDApO1xuICAgICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgICAgaW1hZ2UuY3VycmVudFggPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WCwgaW1hZ2UubWF4WCksIGltYWdlLm1pblgpO1xuICAgICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuXG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIChpbWFnZS5jdXJyZW50WCkgKyBcInB4LCBcIiArIChpbWFnZS5jdXJyZW50WSkgKyBcInB4LDApXCIpKTtcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbCAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcblxuICAgICAgICB6b29tLnNjYWxlID0gMTtcbiAgICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuXG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVG9nZ2xlIFpvb21cbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG5cbiAgICAgIGlmICh6b29tLnNjYWxlICYmIHpvb20uc2NhbGUgIT09IDEpIHtcbiAgICAgICAgLy8gWm9vbSBPdXRcbiAgICAgICAgem9vbS5vdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFpvb20gSW5cbiAgICAgICAgem9vbS5pbihlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluOiBmdW5jdGlvbiBpbiQxKGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgICAgdmFyIGltYWdlID0gem9vbS5pbWFnZTtcblxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsKSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KChcIi5cIiArIChwYXJhbXMuY29udGFpbmVyQ2xhc3MpKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwuYWRkQ2xhc3MoKFwiXCIgKyAocGFyYW1zLnpvb21lZFNsaWRlQ2xhc3MpKSk7XG5cbiAgICAgIHZhciB0b3VjaFg7XG4gICAgICB2YXIgdG91Y2hZO1xuICAgICAgdmFyIG9mZnNldFg7XG4gICAgICB2YXIgb2Zmc2V0WTtcbiAgICAgIHZhciBkaWZmWDtcbiAgICAgIHZhciBkaWZmWTtcbiAgICAgIHZhciB0cmFuc2xhdGVYO1xuICAgICAgdmFyIHRyYW5zbGF0ZVk7XG4gICAgICB2YXIgaW1hZ2VXaWR0aDtcbiAgICAgIHZhciBpbWFnZUhlaWdodDtcbiAgICAgIHZhciBzY2FsZWRXaWR0aDtcbiAgICAgIHZhciBzY2FsZWRIZWlnaHQ7XG4gICAgICB2YXIgdHJhbnNsYXRlTWluWDtcbiAgICAgIHZhciB0cmFuc2xhdGVNaW5ZO1xuICAgICAgdmFyIHRyYW5zbGF0ZU1heFg7XG4gICAgICB2YXIgdHJhbnNsYXRlTWF4WTtcbiAgICAgIHZhciBzbGlkZVdpZHRoO1xuICAgICAgdmFyIHNsaWRlSGVpZ2h0O1xuXG4gICAgICBpZiAodHlwZW9mIGltYWdlLnRvdWNoZXNTdGFydC54ID09PSAndW5kZWZpbmVkJyAmJiBlKSB7XG4gICAgICAgIHRvdWNoWCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICB0b3VjaFkgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgICB0b3VjaFkgPSBpbWFnZS50b3VjaGVzU3RhcnQueTtcbiAgICAgIH1cblxuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICBpZiAoZSkge1xuICAgICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgb2Zmc2V0WCA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkudG9wO1xuICAgICAgICBkaWZmWCA9IChvZmZzZXRYICsgKHNsaWRlV2lkdGggLyAyKSkgLSB0b3VjaFg7XG4gICAgICAgIGRpZmZZID0gKG9mZnNldFkgKyAoc2xpZGVIZWlnaHQgLyAyKSkgLSB0b3VjaFk7XG5cbiAgICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIGltYWdlSGVpZ2h0ID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHNjYWxlZFdpZHRoID0gaW1hZ2VXaWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcblxuICAgICAgICB0cmFuc2xhdGVNaW5YID0gTWF0aC5taW4oKChzbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oKChzbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgICAgIHRyYW5zbGF0ZU1heFggPSAtdHJhbnNsYXRlTWluWDtcbiAgICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuXG4gICAgICAgIHRyYW5zbGF0ZVggPSBkaWZmWCAqIHpvb20uc2NhbGU7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSBkaWZmWSAqIHpvb20uc2NhbGU7XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1pblg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVNYXhYKSB7XG4gICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRlWSA8IHRyYW5zbGF0ZU1pblkpIHtcbiAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNsYXRlWSA+IHRyYW5zbGF0ZU1heFkpIHtcbiAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWF4WTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgfVxuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHRyYW5zbGF0ZVggKyBcInB4LCBcIiArIHRyYW5zbGF0ZVkgKyBcInB4LDApXCIpKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyAoem9vbS5zY2FsZSkgKyBcIilcIikpO1xuICAgIH0sXG4gICAgb3V0OiBmdW5jdGlvbiBvdXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcblxuICAgICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsKSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KChcIi5cIiArIChwYXJhbXMuY29udGFpbmVyQ2xhc3MpKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHpvb20uc2NhbGUgPSAxO1xuICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcygoXCJcIiArIChwYXJhbXMuem9vbWVkU2xpZGVDbGFzcykpKTtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICAvLyBBdHRhY2gvRGV0YWNoIEV2ZW50c1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgaWYgKHpvb20uZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcblxuICAgICAgLy8gU2NhbGUgaW1hZ2VcbiAgICAgIGlmIChTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKCdnZXN0dXJlc3RhcnQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKCdnZXN0dXJlY2hhbmdlJywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oJ2dlc3R1cmVlbmQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVDaGFuZ2UsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgaW1hZ2VcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCAoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzKSksIHpvb20ub25Ub3VjaE1vdmUpO1xuICAgIH0sXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgIGlmICghem9vbS5lbmFibGVkKSB7IHJldHVybjsgfVxuXG4gICAgICBzd2lwZXIuem9vbS5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcblxuICAgICAgLy8gU2NhbGUgaW1hZ2VcbiAgICAgIGlmIChTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZignZ2VzdHVyZXN0YXJ0JywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoJ2dlc3R1cmVjaGFuZ2UnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoJ2dlc3R1cmVlbmQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0LCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgaW1hZ2VcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcykpLCB6b29tLm9uVG91Y2hNb3ZlKTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBab29tJDEgPSB7XG4gICAgbmFtZTogJ3pvb20nLFxuICAgIHBhcmFtczoge1xuICAgICAgem9vbToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgIG1pblJhdGlvOiAxLFxuICAgICAgICB0b2dnbGU6IHRydWUsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcbiAgICAgICAgem9vbWVkU2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZS16b29tZWQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgem9vbSA9IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICAgIGlzU2NhbGluZzogZmFsc2UsXG4gICAgICAgIGdlc3R1cmU6IHtcbiAgICAgICAgICAkc2xpZGVFbDogdW5kZWZpbmVkLFxuICAgICAgICAgIHNsaWRlV2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzbGlkZUhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICRpbWFnZUVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgJGltYWdlV3JhcEVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRYOiB1bmRlZmluZWQsXG4gICAgICAgICAgY3VycmVudFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtaW5YOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWluWTogdW5kZWZpbmVkLFxuICAgICAgICAgIG1heFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtYXhZOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0b3VjaGVzU3RhcnQ6IHt9LFxuICAgICAgICAgIHRvdWNoZXNDdXJyZW50OiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZQb3NpdGlvblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgICgnb25HZXN0dXJlU3RhcnQgb25HZXN0dXJlQ2hhbmdlIG9uR2VzdHVyZUVuZCBvblRvdWNoU3RhcnQgb25Ub3VjaE1vdmUgb25Ub3VjaEVuZCBvblRyYW5zaXRpb25FbmQgdG9nZ2xlIGVuYWJsZSBkaXNhYmxlIGluIG91dCcpLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICB6b29tW21ldGhvZE5hbWVdID0gWm9vbVttZXRob2ROYW1lXS5iaW5kKHN3aXBlcik7XG4gICAgICB9KTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgem9vbTogem9vbSxcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN3aXBlci56b29tLCAnc2NhbGUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBzY2FsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2NhbGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VFbCA9IHN3aXBlci56b29tLmdlc3R1cmUuJGltYWdlRWwgPyBzd2lwZXIuem9vbS5nZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHNsaWRlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRzbGlkZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd6b29tQ2hhbmdlJywgdmFsdWUsIGltYWdlRWwsIHNsaWRlRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY2FsZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci56b29tLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci56b29tLmRpc2FibGUoKTtcbiAgICAgIH0sXG4gICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnpvb20uZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnpvb20ub25Ub3VjaFN0YXJ0KGUpO1xuICAgICAgfSxcbiAgICAgIHRvdWNoRW5kOiBmdW5jdGlvbiB0b3VjaEVuZChlKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci56b29tLm9uVG91Y2hFbmQoZSk7XG4gICAgICB9LFxuICAgICAgZG91YmxlVGFwOiBmdW5jdGlvbiBkb3VibGVUYXAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLnRvZ2dsZSkge1xuICAgICAgICAgIHN3aXBlci56b29tLnRvZ2dsZShlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci56b29tLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIExhenkgPSB7XG4gICAgbG9hZEluU2xpZGU6IGZ1bmN0aW9uIGxvYWRJblNsaWRlKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgIGlmICggbG9hZEluRHVwbGljYXRlID09PSB2b2lkIDAgKSBsb2FkSW5EdXBsaWNhdGUgPSB0cnVlO1xuXG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmxhenk7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcblxuICAgICAgdmFyICRzbGlkZUVsID0gaXNWaXJ0dWFsXG4gICAgICAgID8gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIl1cIikpXG4gICAgICAgIDogc3dpcGVyLnNsaWRlcy5lcShpbmRleCk7XG5cbiAgICAgIHZhciAkaW1hZ2VzID0gJHNsaWRlRWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLmVsZW1lbnRDbGFzcykgKyBcIjpub3QoLlwiICsgKHBhcmFtcy5sb2FkZWRDbGFzcykgKyBcIik6bm90KC5cIiArIChwYXJhbXMubG9hZGluZ0NsYXNzKSArIFwiKVwiKSk7XG4gICAgICBpZiAoJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmVsZW1lbnRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpKSB7XG4gICAgICAgICRpbWFnZXMgPSAkaW1hZ2VzLmFkZCgkc2xpZGVFbFswXSk7XG4gICAgICB9XG4gICAgICBpZiAoJGltYWdlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgICRpbWFnZXMuZWFjaChmdW5jdGlvbiAoaW1hZ2VJbmRleCwgaW1hZ2VFbCkge1xuICAgICAgICB2YXIgJGltYWdlRWwgPSAkKGltYWdlRWwpO1xuICAgICAgICAkaW1hZ2VFbC5hZGRDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKTtcblxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICB2YXIgc3JjID0gJGltYWdlRWwuYXR0cignZGF0YS1zcmMnKTtcbiAgICAgICAgdmFyIHNyY3NldCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgIHZhciBzaXplcyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcblxuICAgICAgICBzd2lwZXIubG9hZEltYWdlKCRpbWFnZUVsWzBdLCAoc3JjIHx8IGJhY2tncm91bmQpLCBzcmNzZXQsIHNpemVzLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCAoc3dpcGVyICYmICFzd2lwZXIucGFyYW1zKSB8fCBzd2lwZXIuZGVzdHJveWVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAoXCJ1cmwoXFxcIlwiICsgYmFja2dyb3VuZCArIFwiXFxcIilcIikpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICAgJGltYWdlRWwuYXR0cignc3Jjc2V0Jywgc3Jjc2V0KTtcbiAgICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaXplcykge1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzaXplcycsIHNpemVzKTtcbiAgICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykucmVtb3ZlQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICAgJHNsaWRlRWwuZmluZCgoXCIuXCIgKyAocGFyYW1zLnByZWxvYWRlckNsYXNzKSkpLnJlbW92ZSgpO1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgJiYgbG9hZEluRHVwbGljYXRlKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVPcmlnaW5hbEluZGV4ID0gJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgICAgIGlmICgkc2xpZGVFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgIHZhciBvcmlnaW5hbFNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHNsaWRlT3JpZ2luYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIChzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUob3JpZ2luYWxTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgZHVwbGljYXRlZFNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyBcIlxcXCJdXCIpKTtcbiAgICAgICAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoZHVwbGljYXRlZFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2xhenlJbWFnZVJlYWR5JywgJHNsaWRlRWxbMF0sICRpbWFnZUVsWzBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3dpcGVyLmVtaXQoJ2xhenlJbWFnZUxvYWQnLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBsb2FkOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgdmFyIHN3aXBlclBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXJQYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlclBhcmFtcy5sYXp5O1xuXG4gICAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHN3aXBlclBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gMDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2xpZGVFeGlzdChpbmRleCkge1xuICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgICAgaWYgKCR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlclBhcmFtcy5zbGlkZUNsYXNzKSArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiXVwiKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVzW2luZGV4XSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBzbGlkZUluZGV4KHNsaWRlRWwpIHtcbiAgICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICAgIHJldHVybiAkKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQoc2xpZGVFbCkuaW5kZXgoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpIHsgc3dpcGVyLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTsgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oKFwiLlwiICsgKHN3aXBlclBhcmFtcy5zbGlkZVZpc2libGVDbGFzcykpKS5lYWNoKGZ1bmN0aW9uIChlbEluZGV4LCBzbGlkZUVsKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gaXNWaXJ0dWFsID8gJChzbGlkZUVsKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIDogJChzbGlkZUVsKS5pbmRleCgpO1xuICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbmRleDsgaSA8IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldzsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIHsgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoaSk7IH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoYWN0aXZlSW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5sb2FkUHJldk5leHQpIHtcbiAgICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxIHx8IChwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50ICYmIHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgPiAxKSkge1xuICAgICAgICAgIHZhciBhbW91bnQgPSBwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50O1xuICAgICAgICAgIHZhciBzcHYgPSBzbGlkZXNQZXJWaWV3O1xuICAgICAgICAgIHZhciBtYXhJbmRleCA9IE1hdGgubWluKGFjdGl2ZUluZGV4ICsgc3B2ICsgTWF0aC5tYXgoYW1vdW50LCBzcHYpLCBzbGlkZXMubGVuZ3RoKTtcbiAgICAgICAgICB2YXIgbWluSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCAtIE1hdGgubWF4KHNwdiwgYW1vdW50KSwgMCk7XG4gICAgICAgICAgLy8gTmV4dCBTbGlkZXNcbiAgICAgICAgICBmb3IgKHZhciBpJDEgPSBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkkMSA8IG1heEluZGV4OyBpJDEgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSQxKSkgeyBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShpJDEpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFByZXYgU2xpZGVzXG4gICAgICAgICAgZm9yICh2YXIgaSQyID0gbWluSW5kZXg7IGkkMiA8IGFjdGl2ZUluZGV4OyBpJDIgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSQyKSkgeyBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShpJDIpOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuZXh0U2xpZGUgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChzd2lwZXJQYXJhbXMuc2xpZGVOZXh0Q2xhc3MpKSk7XG4gICAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSB7IHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKHNsaWRlSW5kZXgobmV4dFNsaWRlKSk7IH1cblxuICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSAkd3JhcHBlckVsLmNoaWxkcmVuKChcIi5cIiArIChzd2lwZXJQYXJhbXMuc2xpZGVQcmV2Q2xhc3MpKSk7XG4gICAgICAgICAgaWYgKHByZXZTbGlkZS5sZW5ndGggPiAwKSB7IHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKHNsaWRlSW5kZXgocHJldlNsaWRlKSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgdmFyIExhenkkMSA9IHtcbiAgICBuYW1lOiAnbGF6eScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBsYXp5OiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkUHJldk5leHQ6IGZhbHNlLFxuICAgICAgICBsb2FkUHJldk5leHRBbW91bnQ6IDEsXG4gICAgICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXG5cbiAgICAgICAgZWxlbWVudENsYXNzOiAnc3dpcGVyLWxhenknLFxuICAgICAgICBsb2FkaW5nQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkaW5nJyxcbiAgICAgICAgbG9hZGVkQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkZWQnLFxuICAgICAgICBwcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgbGF6eToge1xuICAgICAgICAgIGluaXRpYWxJbWFnZUxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgbG9hZDogTGF6eS5sb2FkLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBsb2FkSW5TbGlkZTogTGF6eS5sb2FkSW5TbGlkZS5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgICAgIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2Nyb2xsOiBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiAhc3dpcGVyLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2Nyb2xsYmFyRHJhZ01vdmU6IGZ1bmN0aW9uIHNjcm9sbGJhckRyYWdNb3ZlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCB8fCAoIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgJiYgIXN3aXBlci5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkpIHtcbiAgICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmICFzd2lwZXIucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0KSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCI+PlwiXSB9XSAqL1xuXG4gIHZhciBDb250cm9sbGVyID0ge1xuICAgIExpbmVhclNwbGluZTogZnVuY3Rpb24gTGluZWFyU3BsaW5lKHgsIHkpIHtcbiAgICAgIHZhciBiaW5hcnlTZWFyY2ggPSAoZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICAgIHZhciBtaW5JbmRleDtcbiAgICAgICAgdmFyIGd1ZXNzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFycmF5LCB2YWwpIHtcbiAgICAgICAgICBtaW5JbmRleCA9IC0xO1xuICAgICAgICAgIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSkge1xuICAgICAgICAgICAgZ3Vlc3MgPSBtYXhJbmRleCArIG1pbkluZGV4ID4+IDE7XG4gICAgICAgICAgICBpZiAoYXJyYXlbZ3Vlc3NdIDw9IHZhbCkge1xuICAgICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWF4SW5kZXggPSBndWVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XG4gICAgICAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XG4gICAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXG4gICAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cbiAgICAgIHZhciBpMTtcbiAgICAgIHZhciBpMztcblxuICAgICAgdGhpcy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHgyKSB7XG4gICAgICAgIGlmICgheDIpIHsgcmV0dXJuIDA7IH1cblxuICAgICAgICAvLyBHZXQgdGhlIGluZGV4ZXMgb2YgeDEgYW5kIHgzICh0aGUgYXJyYXkgaW5kZXhlcyBiZWZvcmUgYW5kIGFmdGVyIGdpdmVuIHgyKTpcbiAgICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICAgIGkxID0gaTMgLSAxO1xuXG4gICAgICAgIC8vIFdlIGhhdmUgb3VyIGluZGV4ZXMgaTEgJiBpMywgc28gd2UgY2FuIGNhbGN1bGF0ZSBhbHJlYWR5OlxuICAgICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcbiAgICAgICAgcmV0dXJuICgoKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pKSAvICh0aGlzLnhbaTNdIC0gdGhpcy54W2kxXSkpICsgdGhpcy55W2kxXTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIHh4eDogZm9yIG5vdyBpIHdpbGwganVzdCBzYXZlIG9uZSBzcGxpbmUgZnVuY3Rpb24gdG8gdG9cbiAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gc3dpcGVyLnBhcmFtcy5sb29wXG4gICAgICAgICAgPyBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZClcbiAgICAgICAgICA6IG5ldyBDb250cm9sbGVyLkxpbmVhclNwbGluZShzd2lwZXIuc25hcEdyaWQsIGMuc25hcEdyaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc2V0VHJhbnNsYXRlJDEsIGJ5Q29udHJvbGxlcikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB2YXIgbXVsdGlwbGllcjtcbiAgICAgIHZhciBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBjcmVhdGUgYW4gSW50ZXJwb2xhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIHNuYXBHcmlkc1xuICAgICAgICAvLyB4IGlzIHRoZSBHcmlkIG9mIHRoZSBzY3JvbGxlZCBzY3JvbGxlciBhbmQgeSB3aWxsIGJlIHRoZSBjb250cm9sbGVkIHNjcm9sbGVyXG4gICAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgICAvLyB0aGUgZnVuY3Rpb24gZG9lcyBhIGxvdCBvZiB2YWx1ZSBjYWNoaW5nIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgIHN3aXBlci5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oYyk7XG4gICAgICAgICAgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxuICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAtc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10cmFuc2xhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAoKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgKiBtdWx0aXBsaWVyKSArIGMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UpIHtcbiAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gYy5tYXhUcmFuc2xhdGUoKSAtIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICAgIH1cbiAgICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcbiAgICAgICAgYy5zZXRUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgc3dpcGVyKTtcbiAgICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBjLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB2YXIgaTtcbiAgICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgICAgYy5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBzd2lwZXIpO1xuICAgICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICBjLnRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgIGlmIChjLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMuJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbGxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICBjLmxvb3BGaXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIHZhciBDb250cm9sbGVyJDEgPSB7XG4gICAgbmFtZTogJ2NvbnRyb2xsZXInLFxuICAgIHBhcmFtczoge1xuICAgICAgY29udHJvbGxlcjoge1xuICAgICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICAgIGludmVyc2U6IGZhbHNlLFxuICAgICAgICBieTogJ3NsaWRlJywgLy8gb3IgJ2NvbnRhaW5lcidcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBjb250cm9sbGVyOiB7XG4gICAgICAgICAgY29udHJvbDogc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wsXG4gICAgICAgICAgZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjogQ29udHJvbGxlci5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2xhdGU6IENvbnRyb2xsZXIuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBDb250cm9sbGVyLnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIGExMXkgPSB7XG4gICAgbWFrZUVsRm9jdXNhYmxlOiBmdW5jdGlvbiBtYWtlRWxGb2N1c2FibGUoJGVsKSB7XG4gICAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgcmV0dXJuICRlbDtcbiAgICB9LFxuICAgIGFkZEVsUm9sZTogZnVuY3Rpb24gYWRkRWxSb2xlKCRlbCwgcm9sZSkge1xuICAgICAgJGVsLmF0dHIoJ3JvbGUnLCByb2xlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBhZGRFbExhYmVsOiBmdW5jdGlvbiBhZGRFbExhYmVsKCRlbCwgbGFiZWwpIHtcbiAgICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgcmV0dXJuICRlbDtcbiAgICB9LFxuICAgIGRpc2FibGVFbDogZnVuY3Rpb24gZGlzYWJsZUVsKCRlbCkge1xuICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBlbmFibGVFbDogZnVuY3Rpb24gZW5hYmxlRWwoJGVsKSB7XG4gICAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiAkZWw7XG4gICAgfSxcbiAgICBvbkVudGVyS2V5OiBmdW5jdGlvbiBvbkVudGVyS2V5KGUpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICAgIGlmIChlLmtleUNvZGUgIT09IDEzKSB7IHJldHVybjsgfVxuICAgICAgdmFyICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpKSB7XG4gICAgICAgIGlmICghKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkubm90aWZ5KHBhcmFtcy5sYXN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCAmJiAkdGFyZ2V0RWwuaXMoc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkpIHtcbiAgICAgICAgaWYgKCEoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgJHRhcmdldEVsLmlzKChcIi5cIiArIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSkpIHtcbiAgICAgICAgJHRhcmdldEVsWzBdLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBub3RpZmljYXRpb24gPSBzd2lwZXIuYTExeS5saXZlUmVnaW9uO1xuICAgICAgaWYgKG5vdGlmaWNhdGlvbi5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG4gICAgICBub3RpZmljYXRpb24uaHRtbCgnJyk7XG4gICAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgICB9LFxuICAgIHVwZGF0ZU5hdmlnYXRpb246IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgeyByZXR1cm47IH1cbiAgICAgIHZhciByZWYgPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICAgIHZhciAkbmV4dEVsID0gcmVmLiRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbCA9IHJlZi4kcHJldkVsO1xuXG4gICAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIHN3aXBlci5hMTF5LmRpc2FibGVFbCgkcHJldkVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5lbmFibGVFbCgkcHJldkVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5kaXNhYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkuZW5hYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVBhZ2luYXRpb246IGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoYnVsbGV0SW5kZXgsIGJ1bGxldEVsKSB7XG4gICAgICAgICAgdmFyICRidWxsZXRFbCA9ICQoYnVsbGV0RWwpO1xuICAgICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkYnVsbGV0RWwpO1xuICAgICAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgkYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRidWxsZXRFbCwgcGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL3t7aW5kZXh9fS8sICRidWxsZXRFbC5pbmRleCgpICsgMSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgICAgc3dpcGVyLiRlbC5hcHBlbmQoc3dpcGVyLmExMXkubGl2ZVJlZ2lvbik7XG5cbiAgICAgIC8vIE5hdmlnYXRpb25cbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgICB2YXIgJG5leHRFbDtcbiAgICAgIHZhciAkcHJldkVsO1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpIHtcbiAgICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkge1xuICAgICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICAgIH1cbiAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRuZXh0RWwsICdidXR0b24nKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkbmV4dEVsLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICRuZXh0RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cbiAgICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkcHJldkVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRwcmV2RWwsICdidXR0b24nKTtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkcHJldkVsLCBwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgICRwcmV2RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub24oJ2tleWRvd24nLCAoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSksIHN3aXBlci5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5hMTF5LmxpdmVSZWdpb24gJiYgc3dpcGVyLmExMXkubGl2ZVJlZ2lvbi5sZW5ndGggPiAwKSB7IHN3aXBlci5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCk7IH1cblxuICAgICAgdmFyICRuZXh0RWw7XG4gICAgICB2YXIgJHByZXZFbDtcbiAgICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsKSB7XG4gICAgICAgICRuZXh0RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWw7XG4gICAgICB9XG4gICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAkbmV4dEVsLm9mZigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgfVxuICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbC5vZmYoJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub2ZmKCdrZXlkb3duJywgKFwiLlwiICsgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB2YXIgQTExeSA9IHtcbiAgICBuYW1lOiAnYTExeScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhMTF5OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIGExMXk6IHtcbiAgICAgICAgICBsaXZlUmVnaW9uOiAkKChcIjxzcGFuIGNsYXNzPVxcXCJcIiArIChzd2lwZXIucGFyYW1zLmExMXkubm90aWZpY2F0aW9uQ2xhc3MpICsgXCJcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCI+PC9zcGFuPlwiKSksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKGExMXkpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLmExMXlbbWV0aG9kTmFtZV0gPSBhMTF5W21ldGhvZE5hbWVdLmJpbmQoc3dpcGVyKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuYTExeS5pbml0KCk7XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICB0b0VkZ2U6IGZ1bmN0aW9uIHRvRWRnZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICBmcm9tRWRnZTogZnVuY3Rpb24gZnJvbUVkZ2UoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9LFxuICAgICAgcGFnaW5hdGlvblVwZGF0ZTogZnVuY3Rpb24gcGFnaW5hdGlvblVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmExMXkuZGVzdHJveSgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBIaXN0b3J5ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5KSB7IHJldHVybjsgfVxuICAgICAgaWYgKCF3aW4uaGlzdG9yeSB8fCAhd2luLmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBoaXN0b3J5ID0gc3dpcGVyLmhpc3Rvcnk7XG4gICAgICBoaXN0b3J5LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIGhpc3RvcnkucGF0aHMgPSBIaXN0b3J5LmdldFBhdGhWYWx1ZXMoKTtcbiAgICAgIGlmICghaGlzdG9yeS5wYXRocy5rZXkgJiYgIWhpc3RvcnkucGF0aHMudmFsdWUpIHsgcmV0dXJuOyB9XG4gICAgICBoaXN0b3J5LnNjcm9sbFRvU2xpZGUoMCwgaGlzdG9yeS5wYXRocy52YWx1ZSwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHN3aXBlci5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEhpc3RvcnlQb3BTdGF0ZTogZnVuY3Rpb24gc2V0SGlzdG9yeVBvcFN0YXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIuaGlzdG9yeS5wYXRocyA9IEhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgICAgc3dpcGVyLmhpc3Rvcnkuc2Nyb2xsVG9TbGlkZShzd2lwZXIucGFyYW1zLnNwZWVkLCBzd2lwZXIuaGlzdG9yeS5wYXRocy52YWx1ZSwgZmFsc2UpO1xuICAgIH0sXG4gICAgZ2V0UGF0aFZhbHVlczogZnVuY3Rpb24gZ2V0UGF0aFZhbHVlcygpIHtcbiAgICAgIHZhciBwYXRoQXJyYXkgPSB3aW4ubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKS5maWx0ZXIoZnVuY3Rpb24gKHBhcnQpIHsgcmV0dXJuIHBhcnQgIT09ICcnOyB9KTtcbiAgICAgIHZhciB0b3RhbCA9IHBhdGhBcnJheS5sZW5ndGg7XG4gICAgICB2YXIga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgICB2YXIgdmFsdWUgPSBwYXRoQXJyYXlbdG90YWwgLSAxXTtcbiAgICAgIHJldHVybiB7IGtleToga2V5LCB2YWx1ZTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uIHNldEhpc3Rvcnkoa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5oaXN0b3J5LmluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpO1xuICAgICAgdmFyIHZhbHVlID0gSGlzdG9yeS5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcbiAgICAgIGlmICghd2luLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdmFsdWUgPSBrZXkgKyBcIi9cIiArIHZhbHVlO1xuICAgICAgfVxuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHdpbi5oaXN0b3J5LnN0YXRlO1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9LCBudWxsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW4uaGlzdG9yeS5wdXNoU3RhdGUoeyB2YWx1ZTogdmFsdWUgfSwgbnVsbCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2x1Z2lmeTogZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dC50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3LV0rL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvLS0rL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxuICAgICAgICAucmVwbGFjZSgvLSskLywgJycpO1xuICAgIH0sXG4gICAgc2Nyb2xsVG9TbGlkZTogZnVuY3Rpb24gc2Nyb2xsVG9TbGlkZShzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgIHZhciBzbGlkZUhpc3RvcnkgPSBIaXN0b3J5LnNsdWdpZnkoc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5JykpO1xuICAgICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgSGlzdG9yeSQxID0ge1xuICAgIG5hbWU6ICdoaXN0b3J5JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICAgIGtleTogJ3NsaWRlcycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgIGluaXQ6IEhpc3RvcnkuaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgc2V0SGlzdG9yeTogSGlzdG9yeS5zZXRIaXN0b3J5LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRIaXN0b3J5UG9wU3RhdGU6IEhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzY3JvbGxUb1NsaWRlOiBIaXN0b3J5LnNjcm9sbFRvU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIGRlc3Ryb3k6IEhpc3RvcnkuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgICAgIHN3aXBlci5oaXN0b3J5LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBzd2lwZXIuaGlzdG9yeS5zZXRIaXN0b3J5KHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZXksIHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgSGFzaE5hdmlnYXRpb24gPSB7XG4gICAgb25IYXNoQ2FuZ2U6IGZ1bmN0aW9uIG9uSGFzaENhbmdlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgbmV3SGFzaCA9IGRvYy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICB2YXIgYWN0aXZlU2xpZGVIYXNoID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuICAgICAgaWYgKG5ld0hhc2ggIT09IGFjdGl2ZVNsaWRlSGFzaCkge1xuICAgICAgICB2YXIgbmV3SW5kZXggPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCIuXCIgKyAoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSArIFwiW2RhdGEtaGFzaD1cXFwiXCIgKyBuZXdIYXNoICsgXCJcXFwiXVwiKSkuaW5kZXgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEhhc2g6IGZ1bmN0aW9uIHNldEhhc2goKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5yZXBsYWNlU3RhdGUgJiYgd2luLmhpc3RvcnkgJiYgd2luLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAoKFwiI1wiICsgKHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKSkpIHx8ICcnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIHZhciBoYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICAgIGRvYy5sb2NhdGlvbi5oYXNoID0gaGFzaCB8fCAnJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkIHx8IChzd2lwZXIucGFyYW1zLmhpc3RvcnkgJiYgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpKSB7IHJldHVybjsgfVxuICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHZhciBoYXNoID0gZG9jLmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgIHZhciBzcGVlZCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICB2YXIgc2xpZGVIYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICAgICAgaWYgKHNsaWRlSGFzaCA9PT0gaGFzaCAmJiAhc2xpZGUuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgICAkKHdpbikub24oJ2hhc2hjaGFuZ2UnLCBzd2lwZXIuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgICAkKHdpbikub2ZmKCdoYXNoY2hhbmdlJywgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB2YXIgSGFzaE5hdmlnYXRpb24kMSA9IHtcbiAgICBuYW1lOiAnaGFzaC1uYXZpZ2F0aW9uJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGhhc2hOYXZpZ2F0aW9uOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICByZXBsYWNlU3RhdGU6IGZhbHNlLFxuICAgICAgICB3YXRjaFN0YXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBoYXNoTmF2aWdhdGlvbjoge1xuICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0OiBIYXNoTmF2aWdhdGlvbi5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBkZXN0cm95OiBIYXNoTmF2aWdhdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRIYXNoOiBIYXNoTmF2aWdhdGlvbi5zZXRIYXNoLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBvbkhhc2hDYW5nZTogSGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UuYmluZChzd2lwZXIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uc2V0SGFzaCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5cbiAgdmFyIEF1dG9wbGF5ID0ge1xuICAgIHJ1bjogZnVuY3Rpb24gcnVuKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgJGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB2YXIgZGVsYXkgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgICAgaWYgKCRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykpIHtcbiAgICAgICAgZGVsYXkgPSAkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpIHx8IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgICB9XG4gICAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9IFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucmV2ZXJzZURpcmVjdGlvbikge1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKDAsIHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IHRydWU7XG4gICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXlTdGFydCcpO1xuICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpO1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gZmFsc2U7XG4gICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXlTdG9wJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZShzcGVlZCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTsgfVxuICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IHRydWU7XG4gICAgICBpZiAoc3BlZWQgPT09IDAgfHwgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkud2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBBdXRvcGxheSQxID0ge1xuICAgIG5hbWU6ICdhdXRvcGxheScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhdXRvcGxheToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHJ1bjogQXV0b3BsYXkucnVuLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzdGFydDogQXV0b3BsYXkuc3RhcnQuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHN0b3A6IEF1dG9wbGF5LnN0b3AuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHBhdXNlOiBBdXRvcGxheS5wYXVzZS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLiR3cmFwcGVyRWwpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkKSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiZWZvcmVUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIGJlZm9yZVRyYW5zaXRpb25TdGFydChzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKHNwZWVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbGlkZXJGaXJzdE1vdmU6IGZ1bmN0aW9uIHNsaWRlckZpcnN0TW92ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBGYWRlID0ge1xuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciAkc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgIHZhciBvZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgICAgdmFyIHR4ID0gLW9mZnNldDtcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHsgdHggLT0gc3dpcGVyLnRyYW5zbGF0ZTsgfVxuICAgICAgICB2YXIgdHkgPSAwO1xuICAgICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgdHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbGlkZU9wYWNpdHkgPSBzd2lwZXIucGFyYW1zLmZhZGVFZmZlY3QuY3Jvc3NGYWRlXG4gICAgICAgICAgPyBNYXRoLm1heCgxIC0gTWF0aC5hYnMoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MpLCAwKVxuICAgICAgICAgIDogMSArIE1hdGgubWluKE1hdGgubWF4KCRzbGlkZUVsWzBdLnByb2dyZXNzLCAtMSksIDApO1xuICAgICAgICAkc2xpZGVFbFxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogc2xpZGVPcGFjaXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCwgXCIgKyB0eSArIFwicHgsIDBweClcIikpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICBzbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBzbGlkZXMudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJ107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHZhciBFZmZlY3RGYWRlID0ge1xuICAgIG5hbWU6ICdlZmZlY3QtZmFkZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgIGNyb3NzRmFkZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgIHNldFRyYW5zbGF0ZTogRmFkZS5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zaXRpb246IEZhZGUuc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmFkZScpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goKChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJmYWRlXCIpKTtcbiAgICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICB2aXJ0dWFsVHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuZmFkZUVmZmVjdC5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmYWRlJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmZhZGVFZmZlY3Quc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIEN1YmUgPSB7XG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgdmFyIHN3aXBlcldpZHRoID0gc3dpcGVyLndpZHRoO1xuICAgICAgdmFyIHN3aXBlckhlaWdodCA9IHN3aXBlci5oZWlnaHQ7XG4gICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICAgIHZhciBzd2lwZXJTaXplID0gc3dpcGVyLnNpemU7XG4gICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0O1xuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICAgIHZhciB3cmFwcGVyUm90YXRlID0gMDtcbiAgICAgIHZhciAkY3ViZVNoYWRvd0VsO1xuICAgICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAkd3JhcHBlckVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgICBpZiAoJGN1YmVTaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAkd3JhcHBlckVsLmFwcGVuZCgkY3ViZVNoYWRvd0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbC5jc3MoeyBoZWlnaHQ6IChzd2lwZXJXaWR0aCArIFwicHhcIikgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICRlbC5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG4gICAgICAgICAgaWYgKCRjdWJlU2hhZG93RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkY3ViZVNoYWRvd0VsID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgJGVsLmFwcGVuZCgkY3ViZVNoYWRvd0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IHBhcnNlSW50KCRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2xpZGVBbmdsZSA9IHNsaWRlSW5kZXggKiA5MDtcbiAgICAgICAgdmFyIHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIHNsaWRlQW5nbGUgPSAtc2xpZGVBbmdsZTtcbiAgICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCRzbGlkZUVsWzBdLnByb2dyZXNzLCAxKSwgLTEpO1xuICAgICAgICB2YXIgdHggPSAwO1xuICAgICAgICB2YXIgdHkgPSAwO1xuICAgICAgICB2YXIgdHogPSAwO1xuICAgICAgICBpZiAoc2xpZGVJbmRleCAlIDQgPT09IDApIHtcbiAgICAgICAgICB0eCA9IC1yb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgICAgIHR6ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgICB0eiA9IC1yb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgICAgdHggPSBzd2lwZXJTaXplICsgKHJvdW5kICogNCAqIHN3aXBlclNpemUpO1xuICAgICAgICAgIHR6ID0gc3dpcGVyU2l6ZTtcbiAgICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDMpICUgNCA9PT0gMCkge1xuICAgICAgICAgIHR4ID0gLXN3aXBlclNpemU7XG4gICAgICAgICAgdHogPSAoMyAqIHN3aXBlclNpemUpICsgKHN3aXBlclNpemUgKiA0ICogcm91bmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICB0eCA9IC10eDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICB0eCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gXCJyb3RhdGVYKFwiICsgKGlzSG9yaXpvbnRhbCA/IDAgOiAtc2xpZGVBbmdsZSkgKyBcImRlZykgcm90YXRlWShcIiArIChpc0hvcml6b250YWwgPyBzbGlkZUFuZ2xlIDogMCkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyB0eCArIFwicHgsIFwiICsgdHkgKyBcInB4LCBcIiArIHR6ICsgXCJweClcIjtcbiAgICAgICAgaWYgKHByb2dyZXNzIDw9IDEgJiYgcHJvZ3Jlc3MgPiAtMSkge1xuICAgICAgICAgIHdyYXBwZXJSb3RhdGUgPSAoc2xpZGVJbmRleCAqIDkwKSArIChwcm9ncmVzcyAqIDkwKTtcbiAgICAgICAgICBpZiAocnRsKSB7IHdyYXBwZXJSb3RhdGUgPSAoLXNsaWRlSW5kZXggKiA5MCkgLSAocHJvZ3Jlc3MgKiA5MCk7IH1cbiAgICAgICAgfVxuICAgICAgICAkc2xpZGVFbC50cmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgeyBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7IH1cbiAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSB7IHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzogKFwiNTAlIDUwJSAtXCIgKyAoc3dpcGVyU2l6ZSAvIDIpICsgXCJweFwiKSxcbiAgICAgICAgJy1tb3otdHJhbnNmb3JtLW9yaWdpbic6IChcIjUwJSA1MCUgLVwiICsgKHN3aXBlclNpemUgLyAyKSArIFwicHhcIiksXG4gICAgICAgICctbXMtdHJhbnNmb3JtLW9yaWdpbic6IChcIjUwJSA1MCUgLVwiICsgKHN3aXBlclNpemUgLyAyKSArIFwicHhcIiksXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogKFwiNTAlIDUwJSAtXCIgKyAoc3dpcGVyU2l6ZSAvIDIpICsgXCJweFwiKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGFyYW1zLnNoYWRvdykge1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbC50cmFuc2Zvcm0oKFwidHJhbnNsYXRlM2QoMHB4LCBcIiArICgoc3dpcGVyV2lkdGggLyAyKSArIHBhcmFtcy5zaGFkb3dPZmZzZXQpICsgXCJweCwgXCIgKyAoLXN3aXBlcldpZHRoIC8gMikgKyBcInB4KSByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDBkZWcpIHNjYWxlKFwiICsgKHBhcmFtcy5zaGFkb3dTY2FsZSkgKyBcIilcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzaGFkb3dBbmdsZSA9IE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC0gKE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MCk7XG4gICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxLjUgLSAoXG4gICAgICAgICAgICAoTWF0aC5zaW4oKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkpIC8gMzYwKSAvIDIpXG4gICAgICAgICAgICArIChNYXRoLmNvcygoc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSkgLyAzNjApIC8gMilcbiAgICAgICAgICApO1xuICAgICAgICAgIHZhciBzY2FsZTEgPSBwYXJhbXMuc2hhZG93U2NhbGU7XG4gICAgICAgICAgdmFyIHNjYWxlMiA9IHBhcmFtcy5zaGFkb3dTY2FsZSAvIG11bHRpcGxpZXI7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHBhcmFtcy5zaGFkb3dPZmZzZXQ7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbC50cmFuc2Zvcm0oKFwic2NhbGUzZChcIiArIHNjYWxlMSArIFwiLCAxLCBcIiArIHNjYWxlMiArIFwiKSB0cmFuc2xhdGUzZCgwcHgsIFwiICsgKChzd2lwZXJIZWlnaHQgLyAyKSArIG9mZnNldCkgKyBcInB4LCBcIiArICgtc3dpcGVySGVpZ2h0IC8gMiAvIHNjYWxlMikgKyBcInB4KSByb3RhdGVYKC05MGRlZylcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgekZhY3RvciA9IChCcm93c2VyLmlzU2FmYXJpIHx8IEJyb3dzZXIuaXNVaVdlYlZpZXcpID8gKC1zd2lwZXJTaXplIC8gMikgOiAwO1xuICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAudHJhbnNmb3JtKChcInRyYW5zbGF0ZTNkKDBweCwwLFwiICsgekZhY3RvciArIFwicHgpIHJvdGF0ZVgoXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gMCA6IHdyYXBwZXJSb3RhdGUpICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwKSArIFwiZGVnKVwiKSk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgICBzbGlkZXNcbiAgICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKVxuICAgICAgICAudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0LnNoYWRvdyAmJiAhc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICRlbC5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgRWZmZWN0Q3ViZSA9IHtcbiAgICBuYW1lOiAnZWZmZWN0LWN1YmUnLFxuICAgIHBhcmFtczoge1xuICAgICAgY3ViZUVmZmVjdDoge1xuICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgICAgc2hhZG93T2Zmc2V0OiAyMCxcbiAgICAgICAgc2hhZG93U2NhbGU6IDAuOTQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgY3ViZUVmZmVjdDoge1xuICAgICAgICAgIHNldFRyYW5zbGF0ZTogQ3ViZS5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zaXRpb246IEN1YmUuc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goKChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJjdWJlXCIpKTtcbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIjNkXCIpKTtcbiAgICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jdWJlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2N1YmUnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuY3ViZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB2YXIgRmxpcCA9IHtcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gJHNsaWRlRWxbMF0ucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3QubGltaXRSb3RhdGlvbikge1xuICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oJHNsaWRlRWxbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICB2YXIgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzO1xuICAgICAgICB2YXIgcm90YXRlWSA9IHJvdGF0ZTtcbiAgICAgICAgdmFyIHJvdGF0ZVggPSAwO1xuICAgICAgICB2YXIgdHggPSAtb2Zmc2V0O1xuICAgICAgICB2YXIgdHkgPSAwO1xuICAgICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgdHggPSAwO1xuICAgICAgICAgIHJvdGF0ZVggPSAtcm90YXRlWTtcbiAgICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChydGwpIHtcbiAgICAgICAgICByb3RhdGVZID0gLXJvdGF0ZVk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2xpZGVFbFswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChwcm9ncmVzcykpICsgc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0LnNsaWRlU2hhZG93cykge1xuICAgICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2hhZG93QmVmb3JlID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIikpO1xuICAgICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdyaWdodCcgOiAnYm90dG9tJykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSB7IHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTsgfVxuICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHsgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTsgfVxuICAgICAgICB9XG4gICAgICAgICRzbGlkZUVsXG4gICAgICAgICAgLnRyYW5zZm9ybSgoXCJ0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCwgXCIgKyB0eSArIFwicHgsIDBweCkgcm90YXRlWChcIiArIHJvdGF0ZVggKyBcImRlZykgcm90YXRlWShcIiArIHJvdGF0ZVkgKyBcImRlZylcIikpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICBzbGlkZXNcbiAgICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pXG4gICAgICAgIC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKVxuICAgICAgICAudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgeyByZXR1cm47IH1cbiAgICAgICAgICAvLyBpZiAoISQodGhpcykuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSkgcmV0dXJuO1xuICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdmFyIHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgJHdyYXBwZXJFbC50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICB2YXIgRWZmZWN0RmxpcCA9IHtcbiAgICBuYW1lOiAnZWZmZWN0LWZsaXAnLFxuICAgIHBhcmFtczoge1xuICAgICAgZmxpcEVmZmVjdDoge1xuICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICAgIGxpbWl0Um90YXRpb246IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgZmxpcEVmZmVjdDoge1xuICAgICAgICAgIHNldFRyYW5zbGF0ZTogRmxpcC5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIHNldFRyYW5zaXRpb246IEZsaXAuc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goKChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpICsgXCJmbGlwXCIpKTtcbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIjNkXCIpKTtcbiAgICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICB2aXJ0dWFsVHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZsaXAnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuZmxpcEVmZmVjdC5zZXRUcmFuc2xhdGUoKTtcbiAgICAgIH0sXG4gICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmbGlwJykgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLmZsaXBFZmZlY3Quc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIENvdmVyZmxvdyA9IHtcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgdmFyIHN3aXBlcldpZHRoID0gc3dpcGVyLndpZHRoO1xuICAgICAgdmFyIHN3aXBlckhlaWdodCA9IHN3aXBlci5oZWlnaHQ7XG4gICAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZDtcbiAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNvdmVyZmxvd0VmZmVjdDtcbiAgICAgIHZhciBpc0hvcml6b250YWwgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIHZhciBjZW50ZXIgPSBpc0hvcml6b250YWwgPyAtdHJhbnNmb3JtICsgKHN3aXBlcldpZHRoIC8gMikgOiAtdHJhbnNmb3JtICsgKHN3aXBlckhlaWdodCAvIDIpO1xuICAgICAgdmFyIHJvdGF0ZSA9IGlzSG9yaXpvbnRhbCA/IHBhcmFtcy5yb3RhdGUgOiAtcGFyYW1zLnJvdGF0ZTtcbiAgICAgIHZhciB0cmFuc2xhdGUgPSBwYXJhbXMuZGVwdGg7XG4gICAgICAvLyBFYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICAgIHZhciBzbGlkZU9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICB2YXIgb2Zmc2V0TXVsdGlwbGllciA9ICgoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSAoc2xpZGVTaXplIC8gMikpIC8gc2xpZGVTaXplKSAqIHBhcmFtcy5tb2RpZmllcjtcblxuICAgICAgICB2YXIgcm90YXRlWSA9IGlzSG9yaXpvbnRhbCA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICB2YXIgcm90YXRlWCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyO1xuICAgICAgICAvLyB2YXIgcm90YXRlWiA9IDBcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVogPSAtdHJhbnNsYXRlICogTWF0aC5hYnMob2Zmc2V0TXVsdGlwbGllcik7XG5cbiAgICAgICAgdmFyIHRyYW5zbGF0ZVkgPSBpc0hvcml6b250YWwgPyAwIDogcGFyYW1zLnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gaXNIb3Jpem9udGFsID8gcGFyYW1zLnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcikgOiAwO1xuXG4gICAgICAgIC8vIEZpeCBmb3IgdWx0cmEgc21hbGwgdmFsdWVzXG4gICAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVYKSA8IDAuMDAxKSB7IHRyYW5zbGF0ZVggPSAwOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVZKSA8IDAuMDAxKSB7IHRyYW5zbGF0ZVkgPSAwOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVaKSA8IDAuMDAxKSB7IHRyYW5zbGF0ZVogPSAwOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVZKSA8IDAuMDAxKSB7IHJvdGF0ZVkgPSAwOyB9XG4gICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVYKSA8IDAuMDAxKSB7IHJvdGF0ZVggPSAwOyB9XG5cbiAgICAgICAgdmFyIHNsaWRlVHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRyYW5zbGF0ZVggKyBcInB4LFwiICsgdHJhbnNsYXRlWSArIFwicHgsXCIgKyB0cmFuc2xhdGVaICsgXCJweCkgIHJvdGF0ZVgoXCIgKyByb3RhdGVYICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyByb3RhdGVZICsgXCJkZWcpXCI7XG5cbiAgICAgICAgJHNsaWRlRWwudHJhbnNmb3JtKHNsaWRlVHJhbnNmb3JtKTtcbiAgICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQob2Zmc2V0TXVsdGlwbGllcikpICsgMTtcbiAgICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICAgIHZhciAkc2hhZG93QmVmb3JlRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICB2YXIgJHNoYWRvd0FmdGVyRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgICAgaWYgKCRzaGFkb3dCZWZvcmVFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRzaGFkb3dCZWZvcmVFbCA9ICQoKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJykgKyBcIlxcXCI+PC9kaXY+XCIpKTtcbiAgICAgICAgICAgICRzbGlkZUVsLmFwcGVuZCgkc2hhZG93QmVmb3JlRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJHNoYWRvd0FmdGVyRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkc2hhZG93QWZ0ZXJFbCA9ICQoKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgXCJcXFwiPjwvZGl2PlwiKSk7XG4gICAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoJHNoYWRvd0FmdGVyRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJHNoYWRvd0JlZm9yZUVsLmxlbmd0aCkgeyAkc2hhZG93QmVmb3JlRWxbMF0uc3R5bGUub3BhY2l0eSA9IG9mZnNldE11bHRpcGxpZXIgPiAwID8gb2Zmc2V0TXVsdGlwbGllciA6IDA7IH1cbiAgICAgICAgICBpZiAoJHNoYWRvd0FmdGVyRWwubGVuZ3RoKSB7ICRzaGFkb3dBZnRlckVsWzBdLnN0eWxlLm9wYWNpdHkgPSAoLW9mZnNldE11bHRpcGxpZXIpID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBjb3JyZWN0IHBlcnNwZWN0aXZlIGZvciBJRTEwXG4gICAgICBpZiAoU3VwcG9ydC5wb2ludGVyRXZlbnRzIHx8IFN1cHBvcnQucHJlZml4ZWRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHZhciB3cyA9ICR3cmFwcGVyRWxbMF0uc3R5bGU7XG4gICAgICAgIHdzLnBlcnNwZWN0aXZlT3JpZ2luID0gY2VudGVyICsgXCJweCA1MCVcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnNsaWRlc1xuICAgICAgICAudHJhbnNpdGlvbihkdXJhdGlvbilcbiAgICAgICAgLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpXG4gICAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICB9O1xuXG4gIHZhciBFZmZlY3RDb3ZlcmZsb3cgPSB7XG4gICAgbmFtZTogJ2VmZmVjdC1jb3ZlcmZsb3cnLFxuICAgIHBhcmFtczoge1xuICAgICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgIHN0cmV0Y2g6IDAsXG4gICAgICAgIGRlcHRoOiAxMDAsXG4gICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlOiBDb3ZlcmZsb3cuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBDb3ZlcmZsb3cuc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY292ZXJmbG93JykgeyByZXR1cm47IH1cblxuICAgICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKCgoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSArIFwiY292ZXJmbG93XCIpKTtcbiAgICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaCgoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgKyBcIjNkXCIpKTtcblxuICAgICAgICBzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICB9LFxuICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjb3ZlcmZsb3cnKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIuY292ZXJmbG93RWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2NvdmVyZmxvdycpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci5jb3ZlcmZsb3dFZmZlY3Quc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdmFyIFRodW1icyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgcmVmID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIHZhciB0aHVtYnNQYXJhbXMgPSByZWYudGh1bWJzO1xuICAgICAgdmFyIFN3aXBlckNsYXNzID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKHRodW1ic1BhcmFtcy5zd2lwZXIgaW5zdGFuY2VvZiBTd2lwZXJDbGFzcykge1xuICAgICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IHRodW1ic1BhcmFtcy5zd2lwZXI7XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIudGh1bWJzLnN3aXBlci5vcmlnaW5hbFBhcmFtcywge1xuICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnRodW1icy5zd2lwZXIucGFyYW1zLCB7XG4gICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzT2JqZWN0KHRodW1ic1BhcmFtcy5zd2lwZXIpKSB7XG4gICAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gbmV3IFN3aXBlckNsYXNzKFV0aWxzLmV4dGVuZCh7fSwgdGh1bWJzUGFyYW1zLnN3aXBlciwge1xuICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgICB9KSk7XG4gICAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlci4kZWwuYWRkQ2xhc3Moc3dpcGVyLnBhcmFtcy50aHVtYnMudGh1bWJzQ29udGFpbmVyQ2xhc3MpO1xuICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXIub24oJ3RhcCcsIHN3aXBlci50aHVtYnMub25UaHVtYkNsaWNrKTtcbiAgICB9LFxuICAgIG9uVGh1bWJDbGljazogZnVuY3Rpb24gb25UaHVtYkNsaWNrKCkge1xuICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICB2YXIgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgICBpZiAoIXRodW1ic1N3aXBlcikgeyByZXR1cm47IH1cbiAgICAgIHZhciBjbGlja2VkSW5kZXggPSB0aHVtYnNTd2lwZXIuY2xpY2tlZEluZGV4O1xuICAgICAgdmFyIGNsaWNrZWRTbGlkZSA9IHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGU7XG4gICAgICBpZiAoY2xpY2tlZFNsaWRlICYmICQoY2xpY2tlZFNsaWRlKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3MpKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHR5cGVvZiBjbGlja2VkSW5kZXggPT09ICd1bmRlZmluZWQnIHx8IGNsaWNrZWRJbmRleCA9PT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzbGlkZVRvSW5kZXg7XG4gICAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHNsaWRlVG9JbmRleCA9IHBhcnNlSW50KCQodGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gY2xpY2tlZEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgICBpZiAoc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgICAgICAgY3VycmVudEluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkucHJldkFsbCgoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVUb0luZGV4ICsgXCJcXFwiXVwiKSkuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5uZXh0QWxsKChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzbGlkZVRvSW5kZXggKyBcIlxcXCJdXCIpKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBpZiAodHlwZW9mIHByZXZJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHsgc2xpZGVUb0luZGV4ID0gbmV4dEluZGV4OyB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBuZXh0SW5kZXggPT09ICd1bmRlZmluZWQnKSB7IHNsaWRlVG9JbmRleCA9IHByZXZJbmRleDsgfVxuICAgICAgICBlbHNlIGlmIChuZXh0SW5kZXggLSBjdXJyZW50SW5kZXggPCBjdXJyZW50SW5kZXggLSBwcmV2SW5kZXgpIHsgc2xpZGVUb0luZGV4ID0gbmV4dEluZGV4OyB9XG4gICAgICAgIGVsc2UgeyBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7IH1cbiAgICAgIH1cbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShpbml0aWFsKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgIGlmICghdGh1bWJzU3dpcGVyKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nXG4gICAgICAgID8gdGh1bWJzU3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKClcbiAgICAgICAgOiB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG5cbiAgICAgIGlmIChzd2lwZXIucmVhbEluZGV4ICE9PSB0aHVtYnNTd2lwZXIucmVhbEluZGV4KSB7XG4gICAgICAgIHZhciBjdXJyZW50VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICAgIHZhciBuZXdUaHVtYnNJbmRleDtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIGlmICh0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkuaGFzQ2xhc3ModGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgdGh1bWJzU3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgdGh1bWJzU3dpcGVyLl9jbGllbnRMZWZ0ID0gdGh1bWJzU3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICAgIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCBhY3R1YWwgdGh1bWJzIGluZGV4IHRvIHNsaWRlIHRvXG4gICAgICAgICAgdmFyIHByZXZUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5wcmV2QWxsKChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyAoc3dpcGVyLnJlYWxJbmRleCkgKyBcIlxcXCJdXCIpKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAgIHZhciBuZXh0VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkubmV4dEFsbCgoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKHN3aXBlci5yZWFsSW5kZXgpICsgXCJcXFwiXVwiKSkuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHByZXZUaHVtYnNJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHsgbmV3VGh1bWJzSW5kZXggPSBuZXh0VGh1bWJzSW5kZXg7IH1cbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbmV4dFRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykgeyBuZXdUaHVtYnNJbmRleCA9IHByZXZUaHVtYnNJbmRleDsgfVxuICAgICAgICAgIGVsc2UgaWYgKG5leHRUaHVtYnNJbmRleCAtIGN1cnJlbnRUaHVtYnNJbmRleCA9PT0gY3VycmVudFRodW1ic0luZGV4IC0gcHJldlRodW1ic0luZGV4KSB7IG5ld1RodW1ic0luZGV4ID0gY3VycmVudFRodW1ic0luZGV4OyB9XG4gICAgICAgICAgZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4IDwgY3VycmVudFRodW1ic0luZGV4IC0gcHJldlRodW1ic0luZGV4KSB7IG5ld1RodW1ic0luZGV4ID0gbmV4dFRodW1ic0luZGV4OyB9XG4gICAgICAgICAgZWxzZSB7IG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4OyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihuZXdUaHVtYnNJbmRleCkgPCAwKSB7XG4gICAgICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCkge1xuICAgICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCArIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRodW1ic1N3aXBlci5zbGlkZVRvKG5ld1RodW1ic0luZGV4LCBpbml0aWFsID8gMCA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWN0aXZhdGUgdGh1bWJzXG4gICAgICB2YXIgdGh1bWJzVG9BY3RpdmF0ZSA9IDE7XG4gICAgICB2YXIgdGh1bWJBY3RpdmVDbGFzcyA9IHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdGh1bWJzVG9BY3RpdmF0ZSA9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIH1cblxuICAgICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5yZW1vdmVDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbigoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKHN3aXBlci5yZWFsSW5kZXggKyBpKSArIFwiXFxcIl1cIikpLmFkZENsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCB0aHVtYnNUb0FjdGl2YXRlOyBpJDEgKz0gMSkge1xuICAgICAgICAgIHRodW1ic1N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLnJlYWxJbmRleCArIGkkMSkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICB2YXIgVGh1bWJzJDEgPSB7XG4gICAgbmFtZTogJ3RodW1icycsXG4gICAgcGFyYW1zOiB7XG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiBudWxsLFxuICAgICAgICBzbGlkZVRodW1iQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlJyxcbiAgICAgICAgdGh1bWJzQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLXRodW1icycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgc3dpcGVyOiBudWxsLFxuICAgICAgICAgIGluaXQ6IFRodW1icy5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICB1cGRhdGU6IFRodW1icy51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgIG9uVGh1bWJDbGljazogVGh1bWJzLm9uVGh1bWJDbGljay5iaW5kKHN3aXBlciksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHJlZiA9IHN3aXBlci5wYXJhbXM7XG4gICAgICAgIHZhciB0aHVtYnMgPSByZWYudGh1bWJzO1xuICAgICAgICBpZiAoIXRodW1icyB8fCAhdGh1bWJzLnN3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnRodW1icy5pbml0KCk7XG4gICAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKHRydWUpO1xuICAgICAgfSxcbiAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZSgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSB7IHJldHVybjsgfVxuICAgICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgICAgaWYgKCF0aHVtYnNTd2lwZXIpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRodW1ic1N3aXBlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgICAgICBpZiAoIXRodW1ic1N3aXBlcikgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHN3aXBlci50aHVtYnMuc3dpcGVyQ3JlYXRlZCAmJiB0aHVtYnNTd2lwZXIpIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLy8gU3dpcGVyIENsYXNzXG5cbiAgdmFyIGNvbXBvbmVudHMgPSBbXG4gICAgRGV2aWNlJDEsXG4gICAgU3VwcG9ydCQxLFxuICAgIEJyb3dzZXIkMSxcbiAgICBSZXNpemUsXG4gICAgT2JzZXJ2ZXIkMSxcbiAgICBWaXJ0dWFsJDEsXG4gICAgS2V5Ym9hcmQkMSxcbiAgICBNb3VzZXdoZWVsJDEsXG4gICAgTmF2aWdhdGlvbiQxLFxuICAgIFBhZ2luYXRpb24kMSxcbiAgICBTY3JvbGxiYXIkMSxcbiAgICBQYXJhbGxheCQxLFxuICAgIFpvb20kMSxcbiAgICBMYXp5JDEsXG4gICAgQ29udHJvbGxlciQxLFxuICAgIEExMXksXG4gICAgSGlzdG9yeSQxLFxuICAgIEhhc2hOYXZpZ2F0aW9uJDEsXG4gICAgQXV0b3BsYXkkMSxcbiAgICBFZmZlY3RGYWRlLFxuICAgIEVmZmVjdEN1YmUsXG4gICAgRWZmZWN0RmxpcCxcbiAgICBFZmZlY3RDb3ZlcmZsb3csXG4gICAgVGh1bWJzJDFcbiAgXTtcblxuICBpZiAodHlwZW9mIFN3aXBlci51c2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgU3dpcGVyLnVzZSA9IFN3aXBlci5DbGFzcy51c2U7XG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUgPSBTd2lwZXIuQ2xhc3MuaW5zdGFsbE1vZHVsZTtcbiAgfVxuXG4gIFN3aXBlci51c2UoY29tcG9uZW50cyk7XG5cbiAgcmV0dXJuIFN3aXBlcjtcblxufSkpO1xuIiwiaW1wb3J0IHNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcblxuLy8gU1VNSUtBICwgSVRBREFLSSwgQU5EIERPS0lET0tJIFRPUCBTTElERVJcbnNsaWRlcih7XG4gIGlkOiAnY29tbW9uU2xpZGVyJywgLy8gUkVRVUlSRURcbiAgdGFyZ2V0OiAnLmpzLXNsaWRlcicsLy8gUkVRVUlSRURcblxuICBvcHRpb25zOiB7XG4gICAgc3BlZWQ6IDE1MDAsXG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMTI4MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgfSxcbiAgICAgIDM3NToge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuXG4vLyBTVU1JS0EgLCBJVEFEQUtJLCBBTkQgRE9LSURPS0kgQk9UVE9NIFNMSURFUlxuLy8gc2xpZGVyKHtcbi8vICAgaWQ6ICdjb21tb25TbGlkZXJCb3R0b20nLCAvLyBSRVFVSVJFRFxuLy8gICB0YXJnZXQ6ICcuanMtc2xpZGVyLWJvdHRvbScsIC8vIFJFUVVJUkVEXG4vLyB9KVxuXG4vLyBzbGlkZXIoe1xuLy8gICBpZDogJ2NvbW1vblNsaWRlcicsIC8vIFJFUVVJUkVEXG4vLyAgIHRhcmdldDogJy5qcy1zbGlkZXItY3JhZnQnLCAvLyBSRVFVSVJFRFxuLy8gICBvcHRpb25zOiB7XG4vLyBcdFx0c2xpZGVzUGVyVmlldzogMyxcbi8vIFx0XHRzcGFjZUJldHdlZW46IDYwLFxuLy8gXHRcdGJyZWFrcG9pbnRzOiB7XG4vLyBcdFx0XHQxMjgwOiB7XG4vLyBcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXG4vLyBcdFx0XHRcdHNwYWNlQmV0d2VlbjogNjAsXG4vLyBcdFx0XHR9LFxuLy8gICAgICAgMzc1OiB7XG4vLyAgICAgICAgIHNwYWNlQmV0d2VlbjogMTcsXG4vLyAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4vLyAgICAgICB9XG4vLyAgICAgfSxcbi8vIFx0fVxuLy8gfSlcblxuc2xpZGVyKHtcbiAgaWQ6ICdjb21tb25TbGlkZXJCb3R0b20nLCAvLyBSRVFVSVJFRFxuICB0YXJnZXQ6ICcuanMtc2xpZGVyLWJvdHRvbScsIC8vIFJFUVVJUkVEXG4gIG9wdGlvbnM6IHtcbiAgICBzcGVlZDogMTUwMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBpbml0aWFsU2xpZGU6IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDM1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA3Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcblxuc2xpZGVyKHtcbiAgaWQ6ICdjb21tb25TbGlkZXJCb3R0b20nLCAvLyBSRVFVSVJFRFxuICB0YXJnZXQ6ICcuanMtc2xpZGVyLXBpY2t1cCcsIC8vIFJFUVVJUkVEXG4gIG9wdGlvbnM6IHtcbiAgICBzcGVlZDogMTUwMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICBpbml0aWFsU2xpZGU6IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDQ1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA3Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5pZCkgcmV0dXJuO1xuICBpZiAoIXBhcmFtcy50YXJnZXQpIHJldHVybjtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBzcGVlZDogMTUwMCxcbiAgICBpbml0aWFsU2xpZGU6IDIsXG4gICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDEyODA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMy41LFxuICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICBsb29wZWRTbGlkZXM6IDAsXG4gICAgICAgIGluaXRpYWxTbGlkZTogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG5cbiAgICAgIH0sXG4gICAgICAzNzU6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgICAgaW5pdGlhbFNsaWRlOiAxLFxuICAgICAgICBsb29wZWRTbGlkZXM6IDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb246IHtcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLm9ic2VydmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSAhcGFyYW1zLm9wdGlvbnMgPyBkZWZhdWx0T3B0aW9ucyA6IHBhcmFtcy5vcHRpb25zO1xuICBwYXJhbXMuaWQgPSBuZXcgU3dpcGVyKHBhcmFtcy50YXJnZXQsIGNvbmZpZyk7XG59XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSEFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzM3UEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUxBO0FBVkE7QUFKQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBYkE7QUFIQTtBQTBCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFiQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNyRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFUQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBekJBO0FBZ0NBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==