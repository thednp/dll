import { on, DOMContentLoadedEvent, isNode, querySelectorAll } from '@thednp/shorty';

import DLL from './dll';
import dataSRC from './dataSRC';

// DATA API
const initComponent = (context?: ParentNode) => {
  const lookup = isNode(context) ? context : document;
  [...querySelectorAll(`[${dataSRC}]`, lookup)].forEach(x => DLL(x));
};

// initialize when loaded
if (document.body) initComponent();
else on(document, DOMContentLoadedEvent, () => initComponent(), { once: true });
