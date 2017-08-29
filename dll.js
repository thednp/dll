// Double Lazy Load / dll.js | by dnp_theme
// MIT License 

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports == 'object') {
    // Node, not strict CommonJS
    module.exports = factory();
  } else {
    // Browser globals    
    root.dll = factory();
  }
}(this, function () {
  "use strict";

  // strings
  var getAttribute = 'getAttribute',
      dataSRC = 'data-src',
      srcSelector = '['+dataSRC+']',
      querySelector = 'querySelector',
      querySelectorAll = 'querySelectorAll',
      SOURCE = 'SOURCE', IMG = 'IMG', VIDEO = 'VIDEO',
      length = 'length',
      tagName = 'tagName';

  // DLL DEFINITION
  // ==============
  return function(element,callbackFn){

    // constructor element
    element = typeof element === 'object' ? element : document[querySelector](element);

    // callback
    callbackFn = typeof callbackFn === 'function' ? callbackFn : null; // callback function

    var self = this,

      // element's src attribute
      elementSRC = element && element[getAttribute](dataSRC) || null, //element has own data-src attribute
  
      // private methods
      loadMedia = function(mediaElement, imageCallback) {
        var isVideo = mediaElement[tagName] === SOURCE,
          loadMethod = isVideo ? 'onloadstart' : 'onload',
          newVideo = isVideo ? document.createElement(VIDEO) : 0,
          mediaObject = isVideo ? document.createElement(SOURCE) : new Image(),
          loadTarget = isVideo ? newVideo : mediaObject, 
          src = mediaElement[getAttribute](dataSRC);

        loadTarget[loadMethod] = function(){
          if (mediaElement[tagName] === IMG) { mediaElement.src=src; } // IMG 
          else if (mediaElement[tagName] === SOURCE) { // VIDEO SOURCE
            mediaElement.src=src;
            mediaElement.parentNode.load();
          } 
          else {mediaElement.style.backgroundImage = 'url("'+src+'")'; } // background-image
          mediaElement.removeAttribute(dataSRC);
          imageCallback && imageCallback();
        }
        mediaObject.src = src;
        newVideo && ( newVideo.appendChild(mediaObject) );

      },
      getElements = function() { //we get images of a given object or itself
        var queue, mediaItems = [], matchedSelectors = element[querySelectorAll](srcSelector);
        if ( elementSRC && !matchedSelectors) {
          queue = [element];
        } else if ( !elementSRC && matchedSelectors ) {
          queue = matchedSelectors;
        } else if ( elementSRC && matchedSelectors ){
          queue = matchedSelectors;
          mediaItems.unshift(element);                 
        } else if ( !elementSRC && !matchedSelectors ){
          queue = document[querySelectorAll](srcSelector);
        }
        
        for (var i = 0; i < queue[length]; i++) { mediaItems.push(queue[i]) }
        
        return mediaItems;
      };

    // init
    if (elementSRC || element[querySelector](srcSelector) !== null) {
      var images = getElements();
      for (var i = 0; i < images[length]; i++) {
        if ( i === images[length]-1 && callbackFn) {
          loadMedia(images[i],callbackFn);
        } else {
          loadMedia(images[i])
        }
      }
    }
  };

}));