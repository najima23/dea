const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

const preventDefault = (e: Event) => {
  e.preventDefault();
};

const preventDefaultForScrollKeys = (e: Event) => {
  // @ts-ignore
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
  return null;
};

// modern Chrome requires { passive: false } when adding event
const supportsPassive = false;

const wheelOpt = supportsPassive ? { passive: true } : false;
const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export const disableScroll = () => {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};

// call this to Enable
export const enableScroll = () => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  // @ts-ignore
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  // @ts-ignore
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};
