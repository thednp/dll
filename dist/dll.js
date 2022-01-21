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
    if (node instanceof HTMLElement) return node.ownerDocument;
    if (node instanceof Window) return node.document;
    return window.document;
  }

  /**
   * A global array of possible `ParentNode`.
   */
  const parentNodes = [Document, Node, Element, HTMLElement];

  /**
   * A global array with `Element` | `HTMLElement`.
   */
  const elementNodes = [Element, HTMLElement];

  /**
   * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
   * or find one that matches a selector.
   *
   * @param {HTMLElement | Element | string} selector the input selector or target element
   * @param {(HTMLElement | Element | Node | Document)=} parent optional node to look into
   * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
   */
  function querySelector(selector, parent) {
    const selectorIsString = typeof selector === 'string';
    const lookUp = parent && parentNodes.some((x) => parent instanceof x)
      ? parent : getDocument();

    if (!selectorIsString && [...elementNodes].some((x) => selector instanceof x)) {
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
  const isFunction = (element) => element instanceof Function;

  /**
   * Shortcut for `HTMLElement.getAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  const getAttribute = (element, attribute) => element.getAttribute(attribute);

  /**
   * Shortcut for `HTMLElement.removeAttribute()` method.
   * @param  {HTMLElement | Element} element target element
   * @param  {string} attribute attribute name
   */
  const removeAttribute = (element, attribute) => element.removeAttribute(attribute);

  /**
   * A global namespace for `load` event.
   * @type {string}
   */
  const loadEvent = 'load';

  /**
   * A global namespace for `loadstart` event.
   * @type {string}
   */
  const loadstartEvent = 'loadstart';

  /**
   * Remove eventListener from an `Element` | `HTMLElement` | `Document` | `Window` target.
   *
   * @param {HTMLElement | Element | Document | Window} element event.target
   * @param {string} eventName event.type
   * @param {EventListenerObject['handleEvent']} handler callback
   * @param {(EventListenerOptions | boolean)=} options other event options
   */
  function off(element, eventName, handler, options) {
    const ops = options || false;
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
    const ops = options || false;
    element.addEventListener(eventName, handler, ops);
  }

  /** Global namespace for the `data-src` attribute. */
  const dataSRC = 'data-src';

  /**
   * Load media for single target.
   * @param {HTMLImageElement | HTMLSourceElement | HTMLElement | Element} mediaElement
   * @param {Function=} imageCallback callback function
   */
  function loadMedia(mediaElement, imageCallback) {
    const isVideo = mediaElement.tagName === 'SOURCE';
    const loadEv = isVideo ? loadstartEvent : loadEvent;
    const newVideo = isVideo ? document.createElement('VIDEO') : null;
    const mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
    const loadTarget = isVideo ? newVideo : mediaObject;
    const src = getAttribute(mediaElement, dataSRC);
    const mediaElements = [HTMLImageElement, HTMLSourceElement];

    if (!loadTarget || !src) return;

    on(loadTarget, loadEv, function loadWrapper() {
      // 'HTMLImageElement' | 'HTMLSourceElement'
      if (mediaElements.some((x) => mediaElement instanceof x)) {
        // @ts-ignore
        mediaElement.src = src;
        if (mediaElement instanceof HTMLSourceElement) {
          // @ts-ignore
          mediaElement.parentNode.load();
        }
      // `HTMLElement` background-image
      } else {
        // @ts-ignore
        mediaElement.style.backgroundImage = `url("${src}")`;
      }
      removeAttribute(mediaElement, dataSRC);
      if (imageCallback) imageCallback();
      off(loadTarget, loadEv, loadWrapper);
    });

    if (mediaElements.some((x) => mediaObject instanceof x)) {
      // @ts-ignore
      mediaObject.src = src;
      if (newVideo) newVideo.append(mediaObject);
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
    const lookUp = parent && parentNodes
      .some((x) => parent instanceof x) ? parent : getDocument();
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
    const matchedSelectors = querySelectorAll(`[${dataSRC}]`, source);
    // element has own data-src attribute
    const elementSRC = source && getAttribute(source, dataSRC);

    if (elementSRC && !matchedSelectors) {
      return [source];
    }
    if (!elementSRC && matchedSelectors) {
      return [...matchedSelectors];
    }
    if (elementSRC && matchedSelectors) {
      return [source, ...matchedSelectors];
    }
    if (!elementSRC && !matchedSelectors) {
      return [...querySelectorAll(`[${dataSRC}]`)];
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
    const element = querySelector(target);
    if (!element) return;

    // callback
    const callbackFn = isFunction(callback) ? callback : null;
    const mediaTargets = getMediaElements(element);

    if (mediaTargets && mediaTargets.length) {
      mediaTargets.forEach((x, i) => {
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
    const lookup = context instanceof Element ? context : document;
    const DLLImages = Array.from(lookup.querySelectorAll('[data-src]'));
    DLLImages.map((x) => new DLL(x));
  }
  // initialize when loaded
  if (document.body) initComponent();
  else {
    document.addEventListener('DOMContentLoaded', function initWrapper() {
      initComponent();
      document.removeEventListener('DOMContentLoaded', initWrapper);
    });
  }

  return DLL;

})));
