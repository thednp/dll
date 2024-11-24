import {
  createElement,
  getAttribute,
  isFunction,
  loadEvent,
  loadstartEvent,
  off,
  on,
  removeAttribute,
  setElementStyle,
} from "@thednp/shorty";
import dataSRC from "./dataSRC";
import type { CallbackFunction, LoadMediaTarget } from "./types";
import { isImage, isSource, isVideo } from "./utils";

/**
 * Load media for single target.
 *
 * @param mediaElement
 * @param imageCallback callback function
 */
const loadMedia = (
  mediaElement: LoadMediaTarget,
  imageCallback?: CallbackFunction,
) => {
  const isSOURCE = isSource(mediaElement);
  const loadEv = isSOURCE ? loadstartEvent : loadEvent;
  const newVideo = isSOURCE ? createElement("VIDEO") : null;
  const mediaObject = createElement(isSOURCE ? "SOURCE" : "IMG");
  const loadTarget = isSOURCE ? newVideo : mediaObject;
  const src = getAttribute(mediaElement, dataSRC);

  if (!loadTarget || !src) return;

  const loadWrapper = () => {
    // 'HTMLImageElement' | 'HTMLSourceElement'
    if (isImage(mediaElement) || isSource(mediaElement)) {
      mediaElement.src = src;
      if (isSource(mediaElement)) {
        if (isVideo(mediaElement.parentElement)) {
          mediaElement.parentElement.load();
        }
      }
      // `HTMLElement` background-image
    } else {
      setElementStyle(mediaElement, { backgroundImage: `url("${src}")` });
    }
    removeAttribute(mediaElement, dataSRC);
    if (isFunction(imageCallback)) imageCallback();
    off(loadTarget, loadEv, loadWrapper);
  };

  on(loadTarget, loadEv, loadWrapper);

  if (isImage(mediaObject) || isSource(mediaObject)) {
    mediaObject.src = src;
    if (newVideo) newVideo.append(mediaObject);
  }
};

export default loadMedia;
