import on from '@thednp/shorty/src/event/on';
import DOMContentLoadedEvent from '@thednp/shorty/src/strings/DOMContentLoadedEvent';
import isNode from '@thednp/shorty/src/is/isNode';
import querySelectorAll from '@thednp/shorty/src/selectors/querySelectorAll';

import DLL from './dll';
import dataSRC from './dataSRC';

// DATA API
function initComponent(context) {
  const lookup = isNode(context) ? context : document;
  [...querySelectorAll(`[${dataSRC}]`, lookup)].forEach((x) => new DLL(x));
}

// initialize when loaded
if (document.body) initComponent();
else on(document, DOMContentLoadedEvent, initComponent, { once: true });
