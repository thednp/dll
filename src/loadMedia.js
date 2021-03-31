export default function loadMedia(mediaElement, imageCallback) {
  const isVideo = mediaElement.tagName === 'SOURCE';
  const loadEvent = isVideo ? 'loadstart' : 'load';
  const newVideo = isVideo ? document.createElement('VIDEO') : 0;
  const mediaObject = isVideo ? document.createElement('SOURCE') : new Image();
  const loadTarget = isVideo ? newVideo : mediaObject;
  const src = mediaElement.getAttribute('data-src');

  loadTarget.addEventListener(loadEvent, function loadWrapper() {
    if (mediaElement.tagName === 'IMG') { // 'IMG'
      mediaElement.src = src;
    } else if (mediaElement.tagName === 'SOURCE') { // 'VIDEO' 'SOURCE'
      mediaElement.src = src;
      mediaElement.parentNode.load();
    } else { // background-image
      mediaElement.style.backgroundImage = `url("${src}")`;
    }
    mediaElement.removeAttribute('data-src');
    if (imageCallback) imageCallback();
    loadTarget.removeEventListener(loadEvent, loadWrapper);
  });
  mediaObject.src = src;
  if (newVideo) newVideo.appendChild(mediaObject);
}
