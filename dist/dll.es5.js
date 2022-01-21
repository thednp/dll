/*!
  * DLL.js v1.5.7-alpha3 (https://thednp.github.io/dll.js/)
  * Copyright 2015-2022 © thednp
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.dll = factory());
}(this, (function () { 'use strict';

  /**
   * Returns the `document` or the `#document` element.
   * @see https://github.com/floating-ui/floating-ui
   * @param {(Node | HTMLElement | Element | globalThis)=} node
   * @returns {Document}
   */
  function getDocument(node) {
    if (node instanceof HTMLElement) { return node.ownerDocument; }
    if (node instanceof Window) { return node.document; }
    return window.document;
  }

  /**
   * A global array of possible `ParentNode`.
   */
  var parentNodes = [Document, Node, Element, HTMLElement];

  /**
   * A global array with `Element` | `HTMLElement`.
   */
  var elementNodes = [Element, HTMLElement];

  /**
   * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
   * or find one that matches a selector.
   *
   * @param {HTMLElement | Element | string} selector the input selector or target element
   * @param {(HTMLElement | Element | Node | Document)=} parent optional node to look into
   * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
   */
  function querySelector(selector, parent) {
    var selectorIsString = typeof selector === 'string';
    var lookUp = parent && parentNodes.some(function (x) { return parent instanceof x; })
      ? parent : getDocument();

    if (!selectorIsString && [].concat( elementNodes ).some(function (x) { return selector instanceof x; })) {
      return selector;
    }
    // @ts-ignore -- `ShadowRoot` is also a node
    return selectorIsString ? lookUp.querySelector(selector) : null;
  }

  /**
   * Checks if an object is a `Function`.
   *
   * @param {any} element the target object
   * @returns {boolean} the query result
   */
  var isFunction = function (element) { return element instanceof Function; };

  /**
   * Shortcut for `HTMLElement.getAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  var getAttribute = function (element, attribute) { return element.getAttribute(attribute); };

  /**
   * Shortcut for `HTMLElement.removeAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
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
   * Remove eventListener from an `Element` | `HTMLElement` | `Document` | `Window` target.
   *
   * @param {HTMLElement | Element | Document | Window} element event.target
   * @param {string} eventName event.type
   * @param {EventListenerObject['handleEvent']} handler callback
   * @param {(EventListenerOptions | boolean)=} options other event options
   */
  function off(element, eventName, handler, options) {
    var ops = options || false;
    element.removeEventListener(eventName, handler, ops);
  }

  /**
   * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
   *
   * @param {HTMLElement | Element | Document | Window} element event.target
   * @param {string} eventName event.type
   * @param {EventListenerObject['handleEvent']} handler callback
   * @param {(EventListenerOptions | boolean)=} options other event options
   */
  function on(element, eventName, handler, options) {
    var ops = options || false;
    element.addEventListener(eventName, handler, ops);
  }

  /** Global namespace for the `data-src` attribute. */
  var dataSRC = 'data-src';

  /**
   * Load media for single target.
   * @param {HTMLImageElement | HTMLSourceElement | HTMLElement | Element} mediaElement
   * @param {Function=} imageCallback callback function
   */
  function loadMedia(mediaElement, imageCallback) {
    var isVideo = mediaElement.tagName === 'SOURCE';
    var loadEv = isVideo ? loadstartEvent : loadEvent;
    var newVideo = isVideo ? document.createElement('VIDEO') : null;
    var mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
    var loadTarget = isVideo ? newVideo : mediaObject;
    var src = getAttribute(mediaElement, dataSRC);
    var mediaElements = [HTMLImageElement, HTMLSourceElement];

    if (!loadTarget || !src) { return; }

    on(loadTarget, loadEv, function loadWrapper() {
      // 'HTMLImageElement' | 'HTMLSourceElement'
      if (mediaElements.some(function (x) { return mediaElement instanceof x; })) {
        // @ts-ignore
        mediaElement.src = src;
        if (mediaElement instanceof HTMLSourceElement) {
          // @ts-ignore
          mediaElement.parentNode.load();
        }
      // `HTMLElement` background-image
      } else {
        // @ts-ignore
        mediaElement.style.backgroundImage = "url(\"" + src + "\")";
      }
      removeAttribute(mediaElement, dataSRC);
      if (imageCallback) { imageCallback(); }
      off(loadTarget, loadEv, loadWrapper);
    });

    if (mediaElements.some(function (x) { return mediaObject instanceof x; })) {
      // @ts-ignore
      mediaObject.src = src;
      if (newVideo) { newVideo.append(mediaObject); }
    }
  }

  /**
   * A shortcut for `(document|Element).querySelectorAll`.
   *
   * @param {string} selector the input selector
   * @param {(HTMLElement | Element | Document | Node)=} parent optional node to look into
   * @return {NodeListOf<HTMLElement | Element>} the query result
   */
  function querySelectorAll(selector, parent) {
    var lookUp = parent && parentNodes
      .some(function (x) { return parent instanceof x; }) ? parent : getDocument();
    // @ts-ignore -- `ShadowRoot` is also a node
    return lookUp.querySelectorAll(selector);
  }

  /**
   * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
   * with `data-src` attribute.
   *
   * @param {(HTMLElement | Element)=} source
   * @returns {(HTMLElement | Element | HTMLImageElement | HTMLSourceElement)[]?}
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

  // import dataSRC from './dataSRC';

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

  // DATA API
  function initComponent(context) {
    var lookup = context instanceof Element ? context : document;
    var DLLImages = Array.from(lookup.querySelectorAll('[data-src]'));
    DLLImages.map(function (x) { return new DLL(x); });
  }
  // initialize when loaded
  if (document.body) { initComponent(); }
  else {
    document.addEventListener('DOMContentLoaded', function initWrapper() {
      initComponent();
      document.removeEventListener('DOMContentLoaded', initWrapper);
    });
  }

  return DLL;

})));
