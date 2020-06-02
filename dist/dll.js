/*!
  * DLL.js v1.5.1 (https://thednp.github.io/dll.js/)
  * Copyright 2020 © thednp
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.dll = factory());
}(this, (function () { 'use strict';

  function queryElement (selector, parent) {
    var lookUp = parent && parent instanceof Element ? parent : document;
    return selector instanceof Element ? selector : lookUp.querySelector(selector);
  }

  function tryWrapper (fn,origin){
    try{ fn(); }
    catch(e){
      console.error((origin + ": " + e));
    }
  }

  function on (element, event, handler, options) {
    options = options || false;
    element.addEventListener(event, handler, options);
  }

  function off (element, event, handler, options) {
    options = options || false;
    element.removeEventListener(event, handler, options);
  }

  function one (element, event, handler, options) {
    on(element, event, function handlerWrapper(e){
      if (e.target === element) {
        handler(e);
        off(element, event, handlerWrapper, options);
      }
    }, options);
  }

  function loadMedia(mediaElement, imageCallback) {
    var isVideo = mediaElement.tagName === 'SOURCE',
      loadEvent = isVideo ? 'loadstart' : 'load',
      newVideo = isVideo ? document.createElement('VIDEO') : 0,
      mediaObject = isVideo ? document.createElement('SOURCE') : new Image(),
      loadTarget = isVideo ? newVideo : mediaObject,
      src = mediaElement.getAttribute('data-src');
    one(loadTarget,loadEvent,function (){
      if (mediaElement.tagName === 'IMG') { mediaElement.src=src; }
      else if (mediaElement.tagName === 'SOURCE') {
        mediaElement.src=src;
        mediaElement.parentNode.load();
      }
      else {mediaElement.style.backgroundImage = 'url("'+src+'")'; }
      mediaElement.removeAttribute('data-src');
      imageCallback && imageCallback();
    });
    mediaObject.src = src;
    newVideo && ( newVideo.appendChild(mediaObject) );
  }

  function getMediaElements(source) {
    var queue, mediaItems = [],
        matchedSelectors = source.querySelectorAll('[data-src]'),
        elementSRC = source ? source.getAttribute('data-src') : null;
    if ( elementSRC && !matchedSelectors) {
      queue = [source];
    } else if ( !elementSRC && matchedSelectors ) {
      queue = matchedSelectors;
    } else if ( elementSRC && matchedSelectors ){
      queue = matchedSelectors;
      mediaItems.unshift(source);
    } else if ( !elementSRC && !matchedSelectors ){
      queue = document.querySelectorAll('[data-src]');
    }
    Array.from(queue).map(function (x){ return mediaItems.push(x); });
    return mediaItems;
  }

  function DLL (element,callbackFn){
    tryWrapper(function (){
      element = queryElement(element);
      callbackFn = typeof callbackFn === 'function' ? callbackFn : null;
      var mediaTargets = getMediaElements(element),
          elementSRC = element ? element.getAttribute('data-src') : null;
      if (elementSRC || element.querySelector('[data-src]') !== null) {
        mediaTargets.map(function (x,i){
          if ( i === mediaTargets.length-1 && callbackFn) {
            loadMedia(x,callbackFn);
          } else {
            loadMedia(x);
          }
        });
      }
    },'DLL.js:');
  }

  function initComponent() {
    var DLLImages = Array.from(document.querySelectorAll('[data-src]'));
    DLLImages.map(function (x){ return new DLL(x); });
  }
  document.body ? initComponent() : one(document, 'DOMContentLoaded', initComponent);

  return DLL;

})));
