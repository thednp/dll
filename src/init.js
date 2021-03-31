import DLL from './dll.js';

// DATA API
function initComponent(context) {
  const lookup = context instanceof Element ? context : document;
  const DLLImages = Array.from(lookup.querySelectorAll('[data-src]'));
  DLLImages.map((x) => new DLL(x));
}
// initialize when loaded
if (document.body) initComponent();
else {
  document.addEventListener('DOMContentLoaded', function initWrapper() {
    initComponent();
    document.removeEventListener('DOMContentLoaded', initWrapper);
  });
}
