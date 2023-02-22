import { querySelector, isFunction, ObjectAssign } from '@thednp/shorty';
import { version } from '../package.json';

import loadMedia from './loadMedia';
import getMediaElements from './getMediaElements';
import type { CallbackFunction } from './types';

// DLL DEFINITION
// ==============
/**
 * Lazy load one or more items with `data-src` attribute.
 * * target can be  `<img>` | `<video>` | `HTMLElement`
 * * or any `HTMLElement` that contains the above elements
 * * or `HTMLElement` that has the `data-src` attribute
 *
 * @param target target
 * @param callback
 */
const DLL = (target: HTMLElement | string, callback?: CallbackFunction) => {
  // element
  const element = querySelector(target);
  if (!element) return;

  // callback
  const callbackFn = isFunction(callback) ? callback : null;
  const mediaTargets = getMediaElements(element);
  // console.log(mediaTargets,callbackFn)

  if (mediaTargets && mediaTargets.length) {
    mediaTargets.forEach((x, i) => {
      if (i === mediaTargets.length - 1 && callbackFn) {
        loadMedia(x, callbackFn);
      } else {
        loadMedia(x);
      }
    });
  }
};

ObjectAssign(DLL, { version });

export default DLL;
