import querySelector from 'shorter-js/src/selectors/querySelector';
import isFunction from 'shorter-js/src/is/isFunction';

import loadMedia from './loadMedia';
import getMediaElements from './getMediaElements';
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
export default function DLL(target, callback) {
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
