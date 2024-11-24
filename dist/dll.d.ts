declare type CallbackFunction = (...args: unknown[]) => void;

/**
 * Lazy load one or more items with `data-src` attribute.
 * * target can be  `<img>` | `<video>` | `Element`
 * * or any `Element` that contains the above elements
 * * or `Element` that has the `data-src` attribute
 *
 * @param target target
 * @param callback
 */
declare const DLL: (target: Element | string, callback?: CallbackFunction) => void;
export default DLL;

export { }
