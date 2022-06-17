import querySelectorAll from '@thednp/shorty/src/selectors/querySelectorAll';
import getAttribute from '@thednp/shorty/src/attr/getAttribute';

import dataSRC from './dataSRC';

/**
 * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
 * with `data-src` attribute.
 *
 * @param {HTMLElement=} source
 * @returns {(HTMLElement | HTMLImageElement | HTMLSourceElement)[]?}
 */
export default function getMediaElements(source) {
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
