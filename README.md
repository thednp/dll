# Double Lazy Load | dll.js
Double Lazy Load for videos, images and background images.

[![NPM Version](https://img.shields.io/npm/v/dll.js.svg?style=flat-square)](https://www.npmjs.com/package/dll.js)
[![NPM Downloads](https://img.shields.io/npm/dm/dll.js.svg?style=flat-square)](http://npm-stat.com/charts.html?package=dll.js)
[![jsDeliver](https://data.jsdelivr.com/v1/package/npm/dll.js/badge)](https://www.jsdelivr.com/package/npm/dll.js)

# Demo
Right [here](http://thednp.github.io/dll.js/). Also provides some tips on how to use.

# npm
```
npm install dll.js
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
    

If you want to lazy load on scroll, with [elementInViewport](https://gist.github.com/vincentorback/9ca8446a4c7c87ce3623) you can do:
```js
// your target element
var el = document.getElementById('myItem');

// the callback
function callback(){
  //do some stuff when loading finished
}

// the scroll eventHandler
function scrollHandler(){
  if ( elementInViewport(el) ){
    new dll(el, callback)
  }
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
[MIT License](https://github.com/thednp/dll.js/blob/master/LICENSE)
