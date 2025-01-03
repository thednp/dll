import { getAttribute, querySelectorAll } from "@thednp/shorty";

import dataSRC from "./dataSRC";

/**
 * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
 * with `data-src` attribute.
 *
 * @param source
 */
const getMediaElements = (
  source?: Element,
) => {
  // element chidlren with data-src attribute
  const matchedSelectors = querySelectorAll<HTMLElement>(
    `[${dataSRC}]`,
    source,
  );
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
    return [...querySelectorAll<HTMLElement>(`[${dataSRC}]`)];
  }

  return null;
};

export default getMediaElements;
