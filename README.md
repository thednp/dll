# Double Lazy Load | dll.js
Double Lazy Load for images and background images.

# CDN
Thanks to jsdelivr, we have CDN link <a href="http://www.jsdelivr.com/#!dll.js">here</a>.

# Base syntax
<pre>  new dll('selector',callback);</pre>
	
# What it does
* Do lazy loading for an element that is subject to lazy load via data-src, or
* Do to all child items of a given element
* Do <code>backgroundImage</code> to elements other than <code>&lt;img&gt;</code> if they have <code>data-src</code> attribute.
* Do callback when load event is triggered for one element, or for the last child element of a given parent.
* Do lazy load for all items having <code>data-src</code> attribute.

# Works with
Any valid selector or no selector.
<pre>new dll('.uniqueClassName'); // lazy loads an element with a given class and it's children if any have data-src</pre>
<pre>new dll('#uniqueID'); // lazy loads an element with a given ID and it's children if any have data-src</pre>
<pre>new dll(); // lazy loads any items with data-src from the entire page</pre>
    
# Other examples
If your script is in your site head, you should do this
<pre>
window.addEventListener('load', loadFunctionExample, false);
function loadFunctionExample(){
	new dll('[data-src]', myFunction);
}
</pre>

If you want to lazy load on scroll
<pre>
window.addEventListener('scroll', scrollExample, false);
	function scrollExample(){
		var el = document.getElementById('myItem');
		if ( new elementInViewport(el) ){
			new dll(el, callback)
		}
		function callback(){
			//do some stuff when loading finished
		}
	}
</pre>	

# A nasty example
Lazy load a parent <code>&lt;div id="myElement" data-src="..image.png"&gt;</code> with many elements inside subject to dll.js object:
<pre>
var el = document.getElementById('myElement'); //this is a parent
new dll(el, callback)
function callback(){
	console.log('I just finished lazy loading the last element for #myElement')
}

</pre>

#License
<a href="https://github.com/thednp/dll.js/blob/master/LICENSE">MIT License</a>
