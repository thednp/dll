import DLL from './dll.js'

// DATA API
function initComponent(lookup) {
  lookup = lookup ? lookup : document;
  let DLLImages = Array.from(lookup.querySelectorAll('[data-src]'));
  DLLImages.map(x=>new DLL(x))
}
// initialize when loaded
document.body ? initComponent() : document.addEventListener( 'DOMContentLoaded', function initWrapper(){
  initComponent()
  document.removeEventListener( 'DOMContentLoaded', initWrapper )
});
