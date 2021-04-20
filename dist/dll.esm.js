/*!
  * DLL.js v1.5.7-alpha2 (https://thednp.github.io/dll.js/)
  * Copyright 2021 © thednp
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */
function queryElement(selector, parent) {
  var lookUp = parent && parent instanceof Element ? parent : document;
  return selector instanceof Element ? selector : lookUp.querySelector(selector);
}

function loadMedia(mediaElement, imageCallback) {
  const isVideo = mediaElement.tagName === 'SOURCE';
  const loadEvent = isVideo ? 'loadstart' : 'load';
  const newVideo = isVideo ? document.createElement('VIDEO') : 0;
  const mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
  const loadTarget = isVideo ? newVideo : mediaObject;
  const src = mediaElement.getAttribute('data-src');

  loadTarget.addEventListener(loadEvent, function loadWrapper() {
    if (mediaElement.tagName === 'IMG') { // 'IMG'
      mediaElement.src = src;
    } else if (mediaElement.tagName === 'SOURCE') { // 'VIDEO' 'SOURCE'
      mediaElement.src = src;
      mediaElement.parentNode.load();
    } else { // background-image
      mediaElement.style.backgroundImage = `url("${src}")`;
    }
    mediaElement.removeAttribute('data-src');
    if (imageCallback) imageCallback();
    loadTarget.removeEventListener(loadEvent, loadWrapper);
  });
  mediaObject.src = src;
  if (newVideo) newVideo.appendChild(mediaObject);
}

// private method
function getMediaElements(source) { // we get images of a given object or itself
  let queue;
  const mediaItems = [];
  const matchedSelectors = source.querySelectorAll('[data-src]');
  const elementSRC = source ? source.getAttribute('data-src') : null; // element has own data-src attribute

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

  Array.from(queue).forEach((x) => mediaItems.push(x));
  return mediaItems;
}

// DLL DEFINITION
// ==============
function DLL(elem, callback) {
  // element
  const element = queryElement(elem);

  // callback
  const callbackFn = typeof callback === 'function' ? callback : null;

  const mediaTargets = getMediaElements(element);
  const elementSRC = element ? element.getAttribute('data-src') : null;

  if (elementSRC || element.querySelector('[data-src]') !== null) {
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

export default DLL;
