import queryElement from 'shorter-js/src/misc/queryElement.js';
import loadMedia  from './loadMedia.js'
import getMediaElements  from './getMediaElements.js'

// DLL DEFINITION
// ==============
export default function(element,callbackFn){
  // element
  element = queryElement(element);

  // callback
  callbackFn = typeof callbackFn === 'function' ? callbackFn : null; // callback function

  let mediaTargets = getMediaElements(element),
      elementSRC = element ? element.getAttribute('data-src') : null;

  if (elementSRC || element.querySelector('[data-src]') !== null) {

    mediaTargets.map((x,i)=>{
      if ( i === mediaTargets.length-1 && callbackFn) {
        loadMedia(x,callbackFn);
      } else {
        loadMedia(x)
      }
    })
  }
}
