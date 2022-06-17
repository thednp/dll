declare module "dll/src/dataSRC" {
    export default dataSRC;
    /** Global namespace for the `data-src` attribute. */
    const dataSRC: "data-src";
}
declare module "dll/src/loadMedia" {
    /**
     * Load media for single target.
     * @param {HTMLImageElement | HTMLSourceElement | HTMLElement} mediaElement
     * @param {Function=} imageCallback callback function
     */
    export default function loadMedia(mediaElement: HTMLImageElement | HTMLSourceElement | HTMLElement, imageCallback?: Function | undefined): void;
}
declare module "dll/src/getMediaElements" {
    /**
     * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
     * with `data-src` attribute.
     *
     * @param {HTMLElement=} source
     * @returns {(HTMLElement | HTMLImageElement | HTMLSourceElement)[]?}
     */
    export default function getMediaElements(source?: HTMLElement | undefined): (HTMLElement | HTMLImageElement | HTMLSourceElement)[] | null;
}
declare module "dll/src/dll" {
    /**
     * Lazy load one or more items with `data-src` attribute.
     * * target can be  `<img>` | `<video>` | `HTMLElement`
     * * or any `HTMLElement` that contains the above elements
     * * or `HTMLElement` that has the `data-src` attribute
     * @param {HTMLElement | string} target target
     * @param {Function} callback
     */
    export default function DLL(target: HTMLElement | string, callback: Function): void;
}
