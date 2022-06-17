# Double Lazy Load | dll.js ![@thednp/shorty version](https://img.shields.io/badge/@thednp/shorty-1.0.3-brightgreen) ![typescript version](https://img.shields.io/badge/typescript-4.5.2-brightgreen)
[![NPM Version](https://img.shields.io/npm/v/@thednp/dll.svg)](https://www.npmjs.com/package/@thednp/dll)
[![NPM Downloads](https://img.shields.io/npm/dm/@thednp/dll.svg)](http://npm-stat.com/charts.html?package=@thednp/dll)
[![jsDeliver](https://data.jsdelivr.com/v1/package/npm/@thednp/dll/badge)](https://www.jsdelivr.com/package/npm/@thednp/dll)

Double Lazy Load for videos, images and background images. Sourced with ES6+ and strong TypeScript definitions.


# Demo
Right [here](http://thednp.github.io/dll). Also provides some tips on how to use.

# npm
```
npm install @thednp/dll
```

# Base syntax
```js
new dll('selector',callback);
```
	
# What it does
* Integrates nicelly into your projects and provides build tools
* Do lazy loading for an element that is subject to lazy load via `data-src`, or
* Do to all child items of a given element
* Do <code>backgroundImage</code> to elements other than <code>&lt;img&gt;</code> if they have <code>data-src</code> attribute.
* Do callback when load event is triggered for one element, or for the last child element of a given parent.
* Do lazy loading for `<video>` elements having `<source>` with `data-src` attribute
* Do lazy load for all items having <code>data-src</code> attribute.

# Works with
Any valid selector or no selector.
```js
// lazy loads an element with a given class and it's children if any have data-src
new dll('.uniqueClassName', callBack); 

// lazy loads an element with a given ID and it's children if any have data-src
new dll('#uniqueID', callBack); 

// lazy loads any items with data-src from the entire page
new dll(); 
```
    

If you want to lazy load on scroll, with [isElementInViewport](https://github.com/thednp/shorty/blob/master/src/is/isElementInViewport.js) you can do:
```js
// your target element
var el = document.getElementById('myItem');

// the callback
function callback(){
  //do some stuff when loading finished
}

// the scroll eventHandler
function scrollHandler(){
  if ( isElementInViewport(el) ){
    new dll(el, callback)
  }
  window.removeEventListener('scroll', scrollHandler, false);
}
window.addEventListener('scroll', scrollHandler, false);
```	

# A nasty example
Lazy load a parent `<div id="myElement" data-src="..image.png">` with many elements inside subject to dll.js object:
```js
var el = document.getElementById('myElement'); //this is a parent
new dll(el, callback)
function callback(){
  console.log('I just finished lazy loading the last element for #myElement')
}
```

# License
[MIT License](https://github.com/thednp/dll/blob/master/LICENSE)
