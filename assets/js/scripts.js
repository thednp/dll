//generate a random image from http://dummy-image-generator.com/
var fl = document.querySelector('.fill'),
	size4k = '3840x2160',
	sizeSmall = '450x205',
	imgs =  [ 
	{type: 'people', 	name: 'Eye'}, 
	{type: 'abstract',	name: 'DesiccationCracks'},
	{type: 'abstract',	name: 'Utrecht'},
	{type: 'abstract',	name: 'Rope'},
	{type: 'abstract',	name: 'Stripes'},
	{type: 'abstract',	name: 'FairyLights'},
	{type: 'abstract',	name: 'Comb'},
	{type: 'abstract',	name: 'RedDots'},
	{type: 'abstract',	name: 'Stones' },
	{type: 'animals',	name: 'Sheep'},
	{type: 'animals',	name: 'Dragonfly'},
	{type: 'animals',	name: 'Puffin'},
	{type: 'animals',	name: 'KingVulture'},
	{type: 'animals',	name: 'Butterfly'},
	{type: 'animals',	name: 'Cat'},
	{type: 'animals',	name: 'Gull'},
	{type: 'animals',	name: 'Jellyfish'},
	{type: 'animals',	name: 'WhiteTiger'},
	{type: 'objects',	name: 'Zipper' },
	{type: 'nature',	name: 'Coronet' },
	{type: 'nature',	name: 'SeedGreen' },
	{type: 'nature',	name: 'Dew' },
	{type: 'nature',	name: 'LonelyBloom' },
	{type: 'nature',	name: 'Copper' },
	{type: 'nature',	name: 'Seed' },
	{type: 'nature',	name: 'PickUpSticks' },
	{type: 'nature',	name: 'SpiderWeb' },
	{type: 'nature',	name: 'Waterfalls' },
	{type: 'nature',	name: 'LaceFlower' },
	{type: 'nature',	name: 'Raindrops' },
	{type: 'nature',	name: 'Orchid' },
	{type: 'bw',		name: 'Staining' }
];
var iml = imgs.length;
var n = Math.floor(Math.random()*iml);
var n1 = Math.floor(Math.random()*iml);
makeSRC(fl,size4k,imgs[n].type,imgs[n].name);

function makeSRC(el,size,type,name){
	el.setAttribute('data-src','http://img.dummy-image-generator.com/'+type+'/dummy-'+size+'-'+name+'.jpg');
}

var testCols1 = document.querySelector('.testCol1'), itms1 = testCols1.querySelectorAll('[data-src]');
for ( var i=0, itl=itms1.length; i<itl; i++ ){
	var rd = Math.floor(Math.random()*iml)
	makeSRC(itms1[i],sizeSmall,imgs[rd].type,imgs[rd].name);
}

var testCols2 = document.querySelector('.testCol2'), itms2 = testCols2.querySelectorAll('[data-src]');
makeSRC(testCols2,'980x800',imgs[n1].type,imgs[n1].name);
for ( var i=0, itl=itms2.length; i<itl; i++ ){
	var rd = Math.floor(Math.random()*iml)
	makeSRC(itms2[i],sizeSmall,imgs[rd].type,imgs[rd].name);
}


//some DLL demo
new dll('.fill',pageLoadFinished);
function pageLoadFinished() {
	var loader = document.querySelector('.page-loader'), isIE = document.documentElement.classList.contains('ie');
	loader.getElementsByTagName('P')[0].innerHTML = 'Done. Now other examples.';
	setTimeout(function() {
		//play some KUTE tweens
		if ( !isIE ) {
			new KUTE.Animate(loader, {from: { translate: {y: 0}, opacity:1 }, to: { translate: {y: -1000}, opacity:0}, duration: 1500, easing: 'exponentialInOut' });
			new KUTE.Animate('.site-wrapper', {from: { translate: { y: '100%'}, opacity: 0 }, to: { translate: { y: '0%'}, opacity: 1 }, delay: 500, duration: 1200, easing: 'exponentialInOut' })
		} else {
			new KUTE.Animate(loader, {from: { position: {top: '50%'}, opacity:1 }, to: { position: {top: '-10%'}, opacity:0}, duration: 1500, easing: 'exponentialInOut' });			
			new KUTE.Animate('.site-wrapper', {from: { position: {top: '100%'}, opacity: 0 }, to: { position: { top: '0%'}, opacity: 1 }, delay: 500, duration: 1200, easing: 'exponentialInOut' })
		}
		new KUTE.Animate('.cover', {from: { opacity: 0 }, to: { opacity: 1 }, duration: 2000, easing: 'linear' })
		new KUTE.Animate('.navbar-wrapper', {from: { opacity: 0 }, to: { opacity: 1 }, delay: 2000, duration: 2000, easing: 'linear' })
	}, 2000)
}

// /////click
document.querySelector('.btn').addEventListener('click', clickExample, false);

function clickExample(e){
	e.preventDefault();
	var el = document.querySelector('.testCol1');
	
	if ( !el.classList.contains('loaded') ){
		new dll(el, cbi);
	}	

	function cbi(){
		el.classList.add('loaded');
		var itms = el.getElementsByTagName('IMG'), il = itms.length;
		for ( var i = 0; i<il; i++ ) {
			var dl = 550*i;
			new KUTE.Animate(itms[i], {from: { scale: 1.5, opacity: 0 }, to: { scale: 1, opacity: 1 }, delay: dl, duration: 700, easing: 'elasticOut' });	
		}
	}
}

// /////scroll
window.addEventListener('scroll', scrollExample, false);

function scrollExample(){
	var el = document.querySelector('.testCol2');
	if ( new elementInViewport(el) && !el.classList.contains('loaded') ){
		new dll(el, cbi);
	}
	function cbi(){
		el.classList.add('loaded');
		var itms = el.getElementsByTagName('IMG'), il = itms.length;
		new KUTE.Animate(el, {from: { opacity: 0 }, to: { opacity: 1 }, duration: 2000, easing: 'linear' });
		setTimeout(function(){
			for ( var i = 0; i<il; i++ ) {
				var dl = 250*i;
				new KUTE.Animate(itms[i], {from: { scale: 0.2, opacity: 0 }, to: { scale: 1, opacity: 1 }, delay: dl, duration: 500, easing: 'backOut' });	
			}
		}, 1500)
	}
}

//syntax highlighter
if (SyntaxHighlighter!==undefined) {
	SyntaxHighlighter.config.tagName = 'span';
	SyntaxHighlighter.all();
}