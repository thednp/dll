# Double Lazy Load | dll.js
Double Lazy Load for images, background images and videos.

# CDN
Thanks to jsdelivr, we have CDN link <a href="http://www.jsdelivr.com/#!dll.js">here</a>.

# npm
```
npm install dll.js
```

# Demo
Right <a href="http://thednp.github.io/dll.js/">here</a>

# Base syntax
```js
new dll('selector',callback);
```
	
# What it does
* Do lazy loading for an element that is subject to lazy load via `data-src`, or
* Do to all child items of a given element
* Do <code>backgroundImage</code> to elements other than <code>&lt;img&gt;</code> if they have <code>data-src</code> attribute.
* Do callback when load event is triggered for one element, or for the last child element of a given parent.
* Do lazy loading for video elements having `<source>` with `data-src` attribute
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
    
# Other examples
If your script is in your site head, you should do this
```js
function loadFunctionExample(){
	new dll('[data-src]', myFunction);
}
window.addEventListener('load', loadFunctionExample, false);
```

If you want to lazy load on scroll, with [elementInViewport](https://gist.github.com/vincentorback/9ca8446a4c7c87ce3623) you can do:
```js
function scrollExample(){
	var el = document.getElementById('myItem');
	if ( elementInViewport(el) ){
		new dll(el, callback)
	}
	function callback(){
		//do some stuff when loading finished
	}
}
window.addEventListener('scroll', scrollExample, false);
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

#License
<a href="https://github.com/thednp/dll.js/blob/master/LICENSE">MIT License</a>
