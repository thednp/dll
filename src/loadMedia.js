import { one } from 'shorter-js/src/event/one.js';

// load
export default function loadMedia(mediaElement, imageCallback) {
  var isVideo = mediaElement.tagName === 'SOURCE',
    loadEvent = isVideo ? 'loadstart' : 'load',
    newVideo = isVideo ? document.createElement('VIDEO') : 0,
    mediaObject = isVideo ? document.createElement('SOURCE') : new Image(),
    loadTarget = isVideo ? newVideo : mediaObject, 
    src = mediaElement.getAttribute('data-src');

  one(loadTarget,loadEvent,()=>{
    if (mediaElement.tagName === 'IMG') { mediaElement.src=src; } // 'IMG' 
    else if (mediaElement.tagName === 'SOURCE') { // 'VIDEO' 'SOURCE'
      mediaElement.src=src;
      mediaElement.parentNode.load();
    } 
    else {mediaElement.style.backgroundImage = 'url("'+src+'")'; } // background-image
    mediaElement.removeAttribute('data-src');
    imageCallback && imageCallback();
  })
  mediaObject.src = src;
  newVideo && ( newVideo.appendChild(mediaObject) );
}