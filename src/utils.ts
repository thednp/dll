import { isHTMLElement } from '@thednp/shorty';

export const isVideo = (target: unknown): target is HTMLVideoElement =>
  isHTMLElement(target) && target.tagName === 'VIDEO';
export const isSource = (target: unknown): target is HTMLSourceElement =>
  isHTMLElement(target) && target.tagName === 'SOURCE';
export const isImage = (target: unknown): target is HTMLImageElement =>
  isHTMLElement(target) && target.tagName === 'IMG';
