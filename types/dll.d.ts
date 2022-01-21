declare module "dll.js/src/dataSRC" {
    export default dataSRC;
    /** Global namespace for the `data-src` attribute. */
    const dataSRC: "data-src";
}
declare module "dll.js/src/loadMedia" {
    /**
     * Load media for single target.
     * @param {HTMLImageElement | HTMLVideoElement | HTMLElement} mediaElement target media element
     * @param {Function} imageCallback callback function
     */
    export default function loadMedia(mediaElement: HTMLImageElement | HTMLVideoElement | HTMLElement, imageCallback: Function): void;
}
declare module "dll.js/src/getMediaElements" {
    /**
     * Returns an `Array` with all `<img>`, `<video>` or HTMLElement
     * with `data-src` attribute.
     *
     * @param {(HTMLElement | Element)=} source
     * @returns {(HTMLElement | Element)[]?} an `Array` of elements with data-src attribute
     */
    export default function getMediaElements(source?: (HTMLElement | Element) | undefined): (HTMLElement | Element)[] | null;
}
declare module "dll.js/src/dll" {
    /**
     * Lazy load one / more data-src `<img>` / `<video>`.
     * @param {HTMLElement | Element} target target
     * @param {Function} callback
     */
    export default function DLL(target: HTMLElement | Element, callback: Function): void;
}
