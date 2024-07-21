export type CallbackFunction = (...args: any[]) => any;
/**
 * Lazy load one or more items with `data-src` attribute.
 * * target can be  `<img>` | `<video>` | `HTMLElement`
 * * or any `HTMLElement` that contains the above elements
 * * or `HTMLElement` that has the `data-src` attribute
 *
 * @param target target
 * @param callback
 */
declare const DLL: (target: HTMLElement | string, callback?: CallbackFunction) => void;

export {
	DLL as default,
};

export as namespace DLL;

export {};
