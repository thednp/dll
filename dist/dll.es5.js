/*!
  * DLL.js v1.0.0-alpha1 (https://thednp.github.io/dll)
  * Copyright 2015-2022 © thednp
  * Licensed under MIT (https://github.com/thednp/dll/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.dll = factory());
}(this, (function () { 'use strict';

  /**
   * Checks if an object is a `Node`.
   *
   * @param {any} node the target object
   * @returns {boolean} the query result
   */
  var isNode = function (element) { return (element && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .some(function (x) { return +element.nodeType === x; })) || false; };

  /**
   * Check if a target object is `Window`.
   * => equivalent to `object instanceof Window`
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isWindow = function (object) { return (object && object.constructor.name === 'Window') || false; };

  /**
   * Checks if an object is a `Document`.
   * @see https://dom.spec.whatwg.org/#node
   *
   * @param {any} object the target object
   * @returns {boolean} the query result
   */
  var isDocument = function (object) { return (object && object.nodeType === 9) || false; };

  /**
   * Returns the `document` or the `#document` element.
   * @see https://github.com/floating-ui/floating-ui
   * @param {(Node | Window)=} node
   * @returns {Document}
   */
  function getDocument(node) {
    // node instanceof Document
    if (isDocument(node)) { return node; }
    // node instanceof Node
    if (isNode(node)) { return node.ownerDocument; }
    // node instanceof Window
    if (isWindow(node)) { return node.document; }
    // node is undefined | NULL
    return window.document;
  }

  /**
   * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
   * or find one that matches a selector.
   *
   * @param {Node | string} selector the input selector or target element
   * @param {ParentNode=} parent optional node to look into
   * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
   */
  function querySelector(selector, parent) {
    if (isNode(selector)) {
      return selector;
    }
    var lookUp = isNode(parent) ? parent : getDocument();

    return lookUp.querySelector(selector);
  }

  /**
   * Checks if an object is a `Function`.
   *
   * @param {any} fn the target object
   * @returns {boolean} the query result
   */
  var isFunction = function (fn) { return (fn && fn.constructor.name === 'Function') || false; };

  /**
   * Shortcut for `Object.assign()` static method.
   * @param  {Record<string, any>} obj a target object
   * @param  {Record<string, any>} source a source object
   */
  var ObjectAssign = function (obj, source) { return Object.assign(obj, source); };

  /**
   * This is a shortie for `document.createElement` method
   * which allows you to create a new `HTMLElement` for a given `tagName`
   * or based on an object with specific non-readonly attributes:
   * `id`, `className`, `textContent`, `style`, etc.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   *
   * @param {Record<string, string> | string} param `tagName` or object
   * @return {HTMLElement} a new `HTMLElement` or `Element`
   */
  function createElement(param) {
    if (!param) { return null; }

    if (typeof param === 'string') {
      return getDocument().createElement(param);
    }

    var tagName = param.tagName;
    var attr = Object.assign({}, param);
    var newElement = createElement(tagName);
    delete attr.tagName;
    ObjectAssign(newElement, attr);
    return newElement;
  }

  /**
   * Shortcut for `HTMLElement.getAttribute()` method.
   * @param {HTMLElement} element target element
   * @param {string} attribute attribute name
   * @returns {string?} attribute value
   */
  var getAttribute = function (element, attribute) { return element.getAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.removeAttribute()` method.
   * @param  {HTMLElement} element target element
   * @param  {string} attribute attribute name
   * @returns {void}
   */
  var removeAttribute = function (element, attribute) { return element.removeAttribute(attribute); };

  /**
   * A global namespace for `load` event.
   * @type {string}
   */
  var loadEvent = 'load';

  /**
   * A global namespace for `loadstart` event.
   * @type {string}
   */
  var loadstartEvent = 'loadstart';

  /**
   * Remove eventListener from an `HTMLElement` | `Document` | `Window` target.
   *
   * @type {SHORTY.OnOff<EventTarget>}
   */
  function off(element, eventName, listener, options) {
    var ops = options || false;
    element.removeEventListener(eventName, listener, ops);
  }

  /**
   * Add eventListener to an `HTMLElement` | `Document` target.
   *
   * @type {SHORTY.OnOff<EventTarget>}
   */
  function on(element, eventName, listener, options) {
    var ops = options || false;
    element.addEventListener(eventName, listener, ops);
  }

  /** Global namespace for the `data-src` attribute. */
  var dataSRC = 'data-src';

  /**
   * Load media for single target.
   * @param {HTMLImageElement | HTMLSourceElement | HTMLElement} mediaElement
   * @param {Function=} imageCallback callback function
   */
  function loadMedia(mediaElement, imageCallback) {
    var isVideo = mediaElement.tagName === 'SOURCE';
    var loadEv = isVideo ? loadstartEvent : loadEvent;
    var newVideo = isVideo ? createElement('VIDEO') : null;
    var mediaObject = createElement(isVideo ? 'SOURCE' : 'IMG');
    var loadTarget = isVideo ? newVideo : mediaObject;
    var src = getAttribute(mediaElement, dataSRC);
    var mediaElements = ['IMG', 'SOURCE'];

    if (!loadTarget || !src) { return; }

    on(loadTarget, loadEv, function loadWrapper() {
      // 'HTMLImageElement' | 'HTMLSourceElement'
      if (mediaElements.includes(mediaElement.tagName)) {
        mediaElement.src = src;
        if (isVideo) {
        // if ( mediaElement instanceof HTMLSourceElement) {
          mediaElement.parentNode.load();
        }
      // `HTMLElement` background-image
      } else {
        ObjectAssign(mediaElement.style, { backgroundImage: ("url(\"" + src + "\")") });
      }
      removeAttribute(mediaElement, dataSRC);
      if (isFunction(imageCallback)) { imageCallback(); }
      off(loadTarget, loadEv, loadWrapper);
    });

    if (mediaElements.includes(mediaObject.tagName)) {
      mediaObject.src = src;
      if (newVideo) { newVideo.append(mediaObject); }
    }
  }

  /**
   * A shortcut for `(document|Element).querySelectorAll`.
   *
   * @param {string} selector the input selector
   * @param {ParentNode=} parent optional node to look into
   * @return {NodeListOf<HTMLElement>} the query result
   */
  function querySelectorAll(selector, parent) {
    var lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.querySelectorAll(selector);
  }

  /**
   * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
   * with `data-src` attribute.
   *
   * @param {HTMLElement=} source
   * @returns {(HTMLElement | HTMLImageElement | HTMLSourceElement)[]?}
   */
  function getMediaElements(source) {
    // element chidlren with data-src attribute
    var matchedSelectors = querySelectorAll(("[" + dataSRC + "]"), source);
    // element has own data-src attribute
    var elementSRC = source && getAttribute(source, dataSRC);

    if (elementSRC && !matchedSelectors) {
      return [source];
    }
    if (!elementSRC && matchedSelectors) {
      return [].concat( matchedSelectors );
    }
    if (elementSRC && matchedSelectors) {
      return [source ].concat( matchedSelectors);
    }
    if (!elementSRC && !matchedSelectors) {
      return [].concat( querySelectorAll(("[" + dataSRC + "]")) );
    }

    return null;
  }

  // DLL DEFINITION
  // ==============
  /**
   * Lazy load one or more items with `data-src` attribute.
   * * target can be  `<img>` | `<video>` | `HTMLElement`
   * * or any `HTMLElement` that contains the above elements
   * * or `HTMLElement` that has the `data-src` attribute
   * @param {HTMLElement | string} target target
   * @param {Function} callback
   */
  function DLL(target, callback) {
    // element
    var element = querySelector(target);
    if (!element) { return; }

    // callback
    var callbackFn = isFunction(callback) ? callback : null;
    var mediaTargets = getMediaElements(element);
    // console.log(mediaTargets,callbackFn)

    if (mediaTargets && mediaTargets.length) {
      mediaTargets.forEach(function (x, i) {
        if (i === mediaTargets.length - 1 && callbackFn) {
          loadMedia(x, callbackFn);
        } else {
          loadMedia(x);
        }
      });
    }
  }

  /**
   * A global namespace for `DOMContentLoaded` event.
   * @type {string}
   */
  var DOMContentLoadedEvent = 'DOMContentLoaded';

  // DATA API
  function initComponent(context) {
    var lookup = isNode(context) ? context : document;
    [].concat( querySelectorAll(("[" + dataSRC + "]"), lookup) ).forEach(function (x) { return new DLL(x); });
  }

  // initialize when loaded
  if (document.body) { initComponent(); }
  else { on(document, DOMContentLoadedEvent, initComponent, { once: true }); }

  return DLL;

})));
