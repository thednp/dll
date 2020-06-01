import DLL from './dll.js'
import {one} from 'shorter-js/src/event/one.js'

// DATA API
function initComponent() {
  let DLLImages = Array.from(document.querySelectorAll('[data-src]'));
  DLLImages.map(x=>new DLL(x))
}
// initialize when loaded
document.body ? initComponent() : one(document, 'DOMContentLoaded', initComponent);
