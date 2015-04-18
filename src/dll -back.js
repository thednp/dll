// Double Lazy Load / dll.js | by dnp_theme
// MIT License (http://www.opensource.org/licenses/mit-license.html)


// function(w){
	
	var dll = function(el,fn){
		this.el = typeof el === 'object' ? el : document.querySelector(el);
		this.fn = typeof fn === 'function' ? fn : null; // callback function
		// this.onScroll = this.el && this.el.getAttribute('data-dll-scroll') === 'true' ? true : false; //element has own data-dll-scroll attribute, does lazy load to element when in viewport
		this.srcOnly = this.el && this.el.getAttribute('data-src-only') || null; //element has own data-src-only attribute, does lazy load to element only
		this.src = this.el && this.el.getAttribute('data-src') || null; //element has own data-src attribute, does src to element and / or childNodes
		if (this.srcOnly||this.src||this.el.querySelector('[data-src]') !== null) { this.init() }
		
		// this.init()
	}
	dll.prototype = {
		init: function() {
			var self=this, images = this.getElements();
			for (var i = 0; i < images.length; i++) {
				var _i = i, onScroll = images[i].getAttribute('data-dll-scroll') === 'true' ? true : false;
				
				function processDLL() {
					if ( _i === images.length-1 && self.fn) {
						self.loader(images[_i],self.fn);
					} else {
						self.loader(images[_i])
					}
				}
				function scrollHandle() {
					if ( self.isInViewport(images[_i]) ){
						console.log(images[_i]);
						processDLL()
					}
				}
				if ( onScroll ) {
					window.addEventListener('scroll',scrollHandle,false)
				} else {
					processDLL()
				}
				
			}
		},
		loader: function(el,fn) {
			var img = new Image(), f = fn, srco = el.getAttribute('data-src-only'), src = el.getAttribute('data-src'), sc = srco || src;
			img.onload = function(){
				if (el.tagName === 'IMG') {
					el.src=src;
				} else {
					el.style.backgroundImage = 'url("'+sc+'")';
				}	
				srco && el.removeAttribute('data-src-only');
				src && el.removeAttribute('data-src');
				if (f) { f() }
			}
			img.src = sc
		},
		getElements: function() { //we get images of a given object or itself
			var q, qo, imgs = [], items = this.el.querySelectorAll('[data-src]');
			if ( (!this.srco && this.src && !items) || this.srcOnly ) {
				q = [this.el];
				qo = []
			} else if ( !this.srco && !this.src && items ) {
				q = items;
				qo = []
			} else if ( this.src && items ){
				q = items;
				qo = [this.el]
			} else if ( !this.el && !items ){
				q = document.querySelectorAll('[data-src]');
				qo = document.querySelectorAll('[data-src-only]')
			}
			for (var i = 0; i < q.length; i++) { imgs.push(q[i]); }
			for (var o = 0; o < qo.length; o++) { imgs.push(qo[o]); }
			return imgs
		},
		isInViewport: function(el) { //check element is in viewport
			var r = el.getBoundingClientRect();
			return ( 
				r.top >= 0
				&& r.left >= 0
				&& r.top <= (window.innerHeight || document.documentElement.clientHeight)
			)
		}
	};	
	
// }(window);