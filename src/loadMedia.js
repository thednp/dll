import createElement from '@thednp/shorty/src/misc/createElement';
import getAttribute from '@thednp/shorty/src/attr/getAttribute';
import removeAttribute from '@thednp/shorty/src/attr/removeAttribute';
import loadEvent from '@thednp/shorty/src/strings/loadEvent';
import loadstartEvent from '@thednp/shorty/src/strings/loadstartEvent';
import ObjectAssign from '@thednp/shorty/src/misc/ObjectAssign';
import isFunction from '@thednp/shorty/src/is/isFunction';
import off from '@thednp/shorty/src/event/off';
import on from '@thednp/shorty/src/event/on';

import dataSRC from './dataSRC';

/**
 * Load media for single target.
 * @param {HTMLImageElement | HTMLSourceElement | HTMLElement} mediaElement
 * @param {Function=} imageCallback callback function
 */
export default function loadMedia(mediaElement, imageCallback) {
  const isVideo = mediaElement.tagName === 'SOURCE';
  const loadEv = isVideo ? loadstartEvent : loadEvent;
  const newVideo = isVideo ? createElement('VIDEO') : null;
  const mediaObject = createElement(isVideo ? 'SOURCE' : 'IMG');
  const loadTarget = isVideo ? newVideo : mediaObject;
  const src = getAttribute(mediaElement, dataSRC);
  const mediaElements = ['IMG', 'SOURCE'];

  if (!loadTarget || !src) return;

  on(loadTarget, loadEv, function loadWrapper() {
    // 'HTMLImageElement' | 'HTMLSourceElement'
    if (mediaElements.includes(mediaElement.tagName)) {
      mediaElement.src = src;
      if (isVideo) {
      // if ( mediaElement instanceof HTMLSourceElement) {
        mediaElement.parentNode.load();
      }
    // `HTMLElement` background-image
    } else {
      ObjectAssign(mediaElement.style, { backgroundImage: `url("${src}")` });
    }
    removeAttribute(mediaElement, dataSRC);
    if (isFunction(imageCallback)) imageCallback();
    off(loadTarget, loadEv, loadWrapper);
  });

  if (mediaElements.includes(mediaObject.tagName)) {
    mediaObject.src = src;
    if (newVideo) newVideo.append(mediaObject);
  }
}
