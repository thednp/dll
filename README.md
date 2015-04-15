# Double Lazy Load | dll.js
Double Lazy Load for images and background images.

# Base syntax
<pre>  new dll('selector',callback);</pre>
	
# What it does
* Do dll lazy loading for an element that is subject to lazy load via data-src, or
* Do dll to all child items of a given element
* Do dll <code>backgroundImage</code> to elements other than <code>&lt;img&gt;</code> if they have <code>data-src</code> attribute.
  <pre>new dll('.uniqueClassName');</pre>
  <pre>new dll('#uniqueID');</pre>
    
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
		if ( elementInViewport(el) ){
			new dll(el, callback)
		}
		function callback(){
			//do some stuff when loading finished
		}
	}
</pre>	
#License
<a href="https://github.com/thednp/dll.js/blob/master/LICENSE">MIT License</a>
