// private method
export default function getMediaElements(source) { // we get images of a given object or itself
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
