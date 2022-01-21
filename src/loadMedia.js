import getAttribute from 'shorter-js/src/attr/getAttribute';
import removeAttribute from 'shorter-js/src/attr/removeAttribute';
import loadEvent from 'shorter-js/src/strings/loadEvent';
import loadstartEvent from 'shorter-js/src/strings/loadstartEvent';
import off from 'shorter-js/src/event/off';
import on from 'shorter-js/src/event/on';

import dataSRC from './dataSRC';

/**
 * Load media for single target.
 * @param {HTMLImageElement | HTMLSourceElement | HTMLElement | Element} mediaElement
 * @param {Function=} imageCallback callback function
 */
export default function loadMedia(mediaElement, imageCallback) {
  const isVideo = mediaElement.tagName === 'SOURCE';
  const loadEv = isVideo ? loadstartEvent : loadEvent;
  const newVideo = isVideo ? document.createElement('VIDEO') : null;
  const mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
  const loadTarget = isVideo ? newVideo : mediaObject;
  const src = getAttribute(mediaElement, dataSRC);
  const mediaElements = [HTMLImageElement, HTMLSourceElement];

  if (!loadTarget || !src) return;

  on(loadTarget, loadEv, function loadWrapper() {
    // 'HTMLImageElement' | 'HTMLSourceElement'
    if (mediaElements.some((x) => mediaElement instanceof x)) {
      // @ts-ignore
      mediaElement.src = src;
      if (mediaElement instanceof HTMLSourceElement) {
        // @ts-ignore
        mediaElement.parentNode.load();
      }
    // `HTMLElement` background-image
    } else {
      // @ts-ignore
      mediaElement.style.backgroundImage = `url("${src}")`;
    }
    removeAttribute(mediaElement, dataSRC);
    if (imageCallback) imageCallback();
    off(loadTarget, loadEv, loadWrapper);
  });

  if (mediaElements.some((x) => mediaObject instanceof x)) {
    // @ts-ignore
    mediaObject.src = src;
    if (newVideo) newVideo.append(mediaObject);
  }
}
