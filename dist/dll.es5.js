/*!
  * DLL.js v1.5.7-alpha2 (https://thednp.github.io/dll.js/)
  * Copyright 2021 © thednp
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.dll = factory());
}(this, (function () { 'use strict';

  function queryElement(selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

  function loadMedia(mediaElement, imageCallback) {
    var isVideo = mediaElement.tagName === 'SOURCE';
    var loadEvent = isVideo ? 'loadstart' : 'load';
    var newVideo = isVideo ? document.createElement('VIDEO') : 0;
    var mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
    var loadTarget = isVideo ? newVideo : mediaObject;
    var src = mediaElement.getAttribute('data-src');

    loadTarget.addEventListener(loadEvent, function loadWrapper() {
      if (mediaElement.tagName === 'IMG') { // 'IMG'
        mediaElement.src = src;
      } else if (mediaElement.tagName === 'SOURCE') { // 'VIDEO' 'SOURCE'
        mediaElement.src = src;
        mediaElement.parentNode.load();
      } else { // background-image
        mediaElement.style.backgroundImage = "url(\"" + src + "\")";
      }
      mediaElement.removeAttribute('data-src');
      if (imageCallback) { imageCallback(); }
      loadTarget.removeEventListener(loadEvent, loadWrapper);
    });
    mediaObject.src = src;
    if (newVideo) { newVideo.appendChild(mediaObject); }
  }

  // private method
  function getMediaElements(source) { // we get images of a given object or itself
    var queue;
    var mediaItems = [];
    var matchedSelectors = source.querySelectorAll('[data-src]');
    var elementSRC = source ? source.getAttribute('data-src') : null; // element has own data-src attribute

    if (elementSRC && !matchedSelectors) {
      queue = [source];
    } else if (!elementSRC && matchedSelectors) {
      queue = matchedSelectors;
    } else if (elementSRC && matchedSelectors) {
      queue = matchedSelectors;
      mediaItems.unshift(source);
    } else if (!elementSRC && !matchedSelectors) {
      queue = document.querySelectorAll('[data-src]');
    }

    Array.from(queue).forEach(function (x) { return mediaItems.push(x); });
    return mediaItems;
  }

  // DLL DEFINITION
  // ==============
  function DLL(elem, callback) {
    // element
    var element = queryElement(elem);

    // callback
    var callbackFn = typeof callback === 'function' ? callback : null;

    var mediaTargets = getMediaElements(element);
    var elementSRC = element ? element.getAttribute('data-src') : null;

    if (elementSRC || element.querySelector('[data-src]') !== null) {
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
