import { queryElement } from 'shorter-js/src/misc/queryElement.js';
import { tryWrapper } from 'shorter-js/src/misc/tryWrapper.js';
import { one } from 'shorter-js/src/event/one.js';


// DLL DEFINITION
// ==============
export default function DLL (element,callbackFn){

  // element
  element = queryElement(element);

  // callback
  callbackFn = typeof callbackFn === 'function' ? callbackFn : null; // callback function
    
  // element's src attribute
  let elementSRC = element && element.getAttribute('data-src') || null, //element has own data-src attribute
  
    // private method
    getElements = function() { // we get images of a given object or itself
      let queue, mediaItems = [], matchedSelectors = element.querySelectorAll('[data-src]');
      if ( elementSRC && !matchedSelectors) {
        queue = [element];
      } else if ( !elementSRC && matchedSelectors ) {
        queue = matchedSelectors;
      } else if ( elementSRC && matchedSelectors ){
        queue = matchedSelectors;
        mediaItems.unshift(element);                 
      } else if ( !elementSRC && !matchedSelectors ){
        queue = document.querySelectorAll('[data-src]');
      }
      
      Array.from(queue).map(x=>mediaItems.push(x))
      
      return mediaItems;
    },

    // public methods
    load = function(mediaElement, imageCallback) {
      var isVideo = mediaElement.tagName === 'SOURCE',
        loadMethod = isVideo ? 'onloadstart' : 'onload',
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

  // init
  tryWrapper(()=>{
    if (elementSRC || element.querySelector('[data-src]') !== null) {
      let mediaTargets = getElements();

      mediaTargets.map((x,i)=>{
        if ( i === mediaTargets.length-1 && callbackFn) {
          load(x,callbackFn);
        } else {
          load(x)
        }
      })
    }
  },'DLL.js:')
}
