// utility
function elementInViewport (element) { //check element is in viewport
	var rect = element.getBoundingClientRect();
	return ( 
		rect.top >= 0
		&& rect.left >= 0
		&& rect.top <= (window.innerHeight || document.documentElement.clientHeight)
	)
}

function makeSRC(element,size){
	element.setAttribute('data-src','https://picsum.photos/'+size+'.jpg');
}

//generate a random image from http://dummy-image-generator.com/

var fill = document.querySelector('.fill'),
	sizeSmall = '900/410',
	avgSize = '980/800';

makeSRC(fill,'3840/2160');

var testCols1 = document.getElementsByClassName('testCol1')[0], 
		itms1 = testCols1.getElementsByTagName('IMG');

for ( var i=0, itl=itms1.length; i<itl; i++ ){
	makeSRC(itms1[i],sizeSmall);
}

var testCols2 = document.getElementsByClassName('testCol2')[0], 
		itms2 = testCols2.getElementsByTagName('IMG');
makeSRC(testCols2,avgSize);
for ( var i=0, itl=itms2.length; i<itl; i++ ){
	makeSRC(itms2[i],sizeSmall);
}

var testCols3 = document.getElementsByClassName('testCol3')[0];
makeSRC(testCols3,avgSize);

//some DLL demo
var loader = document.getElementsByClassName('page-loader')[0], 
		loaderImg = loader.getElementsByTagName('IMG')[0];

function pageLoadFinished() {
	setTimeout(function() {
		KUTE.fromTo(loaderImg, { opacity:1 }, { opacity:0}, { duration: 1500, easing: 'linear'}).start();
		loader.getElementsByTagName('P')[0].innerHTML = 'Done, now other examples..'
	}, 500);
	setTimeout(function() {
		//play some KUTE tweens
		KUTE.fromTo(loader,{ translate: [0,0], opacity:1 }, { translate: [0,-1000], opacity:0}, { duration: 700, easing: 'easingCircularIn' }).start();
		KUTE.fromTo('.site-wrapper', { translate: [0,550], opacity: 0 }, { translate: [0,0], opacity: 1 }, { delay: 700, duration: 1200, easing: 'easingCircularInOut' }).start()

		KUTE.fromTo('.cover', { opacity: 0 }, { opacity: 1 }, { delay: 2000, duration: 2000, easing: 'easingCircularIn' }).start()
		KUTE.fromTo('.navbar-wrapper', { opacity: 0 }, { opacity: 1 }, { delay: 4000, duration: 2000, easing: 'linear' }).start()
	}, 3000)
}
new dll('.cover',pageLoadFinished);

// /////click
var btn = document.querySelector('.btn');
function finished(){
	btn.innerHTML = 'All right!';		
}
function callback(){
	testCols1.classList.add('loaded');
	var itms = testCols1.getElementsByTagName('IMG'), il = itms.length;
	for ( var i = 0; i<il; i++ ) {
		var dl = 350*i;
		fn = i===(il-1) ? finished : '';
		KUTE.fromTo(itms[i], { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1 }, { delay: dl, duration: 700, easing: 'easingSinusoidalOut', complete: fn }).start();	
	}
	btn.innerHTML = 'Animating...';

}
function clickExample(e){
	e.preventDefault();
	if ( !testCols1.classList.contains('loaded') ){
		btn.innerHTML = 'Loading..';
		new dll(testCols1, callback);
	}
}
btn.addEventListener('click', clickExample, false);


// /////scroll
window.addEventListener('scroll', scrollExample, false);

function imgCallback(){
		
	if ( !testCols2.classList.contains('loaded') ){
		testCols2.classList.add('loaded');
		var itms = testCols2.getElementsByTagName('IMG'), il = itms.length;
		KUTE.fromTo(testCols2, { opacity: 0 }, { opacity: 1 }, { delay: 500, duration: 2000 }).start();
		for ( var i = 0; i<il; i++ ) {
			var dl = parseInt(250*i + 2500);
			KUTE.fromTo(itms[i], { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 }, { delay: dl, duration: 500, easing: 'easingBackOut' }).start();	
		}
	}
}

function videoCallback(){
		
	if ( !testCols3.classList.contains('loaded') ){
		testCols3.classList.add('loaded');
		KUTE.fromTo(testCols3, { opacity: 0 }, { opacity: 1 }, { delay: 500, duration: 2000 }).start();
		var itms = testCols3.getElementsByTagName('VIDEO'), il = itms.length;
		for ( var i = 0; i<il; i++ ) {
			var dl = parseInt(250*i + 2500);
			KUTE.fromTo(itms[i], { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 }, { delay: dl, duration: 500, easing: 'easingBackOut' }).start();	
		}
	}
}

function scrollExample(){
		
	if ( elementInViewport(testCols2) ){
		new dll(testCols2, imgCallback);
	}

	
	// VIDEO	
	if ( elementInViewport(testCols3) ){
		new dll(testCols3, videoCallback);
	}

}

//scroll top?
var toTop = document.getElementById('toTop'),
	toTopTween = KUTE.to( window, { scroll: 0 }, { easing: 'easingQuarticOut', duration : 1500  } );

function topHandler(e){
	e.preventDefault(); 
	toTopTween.start();
}

	toTop.addEventListener('click',topHandler,false);