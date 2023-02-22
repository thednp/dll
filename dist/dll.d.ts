export type CallbackFunction = (...args: any[]) => any;
declare const DLL: (target: HTMLElement | string, callback?: CallbackFunction) => void;

export {
	DLL as default,
};

export as namespace DLL;

export {};
