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

  // utility
  var elementInViewport = function(element) { //check element is in viewport
    var rect = element.getBoundingClientRect();
    return ( 
      rect.top >= 0
      && rect.left >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  };
  
  // DLL DEFINITION
  // ==============
  return function(element,callbackFn){

    // constructor element
    element = typeof element === 'object' ? element : document.querySelector(element);

    // callback
    callbackFn = typeof callbackFn === 'function' ? callbackFn : null; // callback function

    var self = this, 

      // strings
      getAttribute = 'getAttribute',
      dataSRC = 'data-src',
      srcSelector = '['+dataSRC+']',

      // element's src attribute
      elementSRC = element && element[getAttribute]('data-src') || null, //element has own data-src attribute
  
      // private methods
      loader = function(elementImage, imageCallback) {
        var img = new Image(), src = elementImage[getAttribute](dataSRC);
        img.onload = function(){
          if (elementImage.tagName === 'IMG') {
            elementImage.src=src;
          } else {
            elementImage.style.backgroundImage = 'url("'+src+'")';
          }  
          elementImage.removeAttribute('data-src');
          if (imageCallback) { imageCallback() }
        }
        img.src = src
      },
      getElements = function() { //we get images of a given object or itself
        var q, imgs = [], items = element.querySelectorAll(srcSelector);
        if ( elementSRC && !items) {
          q = [element]    
        } else if ( !elementSRC && items ) {
          q = items
        } else if ( elementSRC && items ){
          q = items;
          /* put element first in line, it may have a bigger image 
          * to load than all childNodes combined */
          // imgs.push(element);
          imgs.unshift(element);                 
        } else if ( !elementSRC && !items ){
          q = document.querySelectorAll(srcSelector)
        }
        
        for (var i = 0; i < q.length; i++) { imgs.push(q[i]) }
        
        return imgs;
      };

    // init
    if (elementSRC||element.querySelector(srcSelector) !== null) {
      var images = getElements();
      for (var i = 0; i < images.length; i++) {
        if ( i === images.length-1 && callbackFn) {
          loader(images[i],callbackFn);
        } else {
          loader(images[i])
        }
      }
    }
  };

}));
