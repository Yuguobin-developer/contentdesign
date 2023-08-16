require('./js/polyfills');
import { MDCRipple } from '@material/ripple';

const iconButtons = document.querySelector('.mdc-icon-button');
if (iconButtons) {
  const iconButtonRipple = new MDCRipple(iconButtons);
  iconButtonRipple.unbounded = true;
}
const fabs = document.querySelector('.mdc-fab');
if (fabs) {
  new MDCRipple(fabs);
}

let open = false;
const mediaQuery = '(min-width: 1000px)';
const drawer = document.querySelector('.content-design-drawer');
const scrim = document.querySelector('.content-design-scrim');
const menuButton = document.querySelector('#content-design-menu');
window.toggle = () => {
  menuButton.blur();
  if (open) {
    drawer.classList.remove('open');
    scrim.classList.remove('open');
    open = !open;
    return;
  }
  drawer.classList.add('open');
  scrim.classList.add('open');
  open = !open;
};
if (window.matchMedia(mediaQuery).matches) {
  open = false;
}
