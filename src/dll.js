import queryElement from 'shorter-js/src/misc/queryElement.js';
import loadMedia from './loadMedia.js';
import getMediaElements from './getMediaElements.js';

// DLL DEFINITION
// ==============
export default function DLL(elem, callback) {
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
