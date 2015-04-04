import { animate, stop, Promise } from 'liquid-fire';

export default function (opts={}) {
  var nav = this.oldElement.find('nav');
  var bottomNav = this.oldElement.find('.bottom-nav');
  var content = this.oldElement.find('> .container-fluid');
  var navHeight = parseInt(nav.css('height'), 10);

  return Promise.all([
    animate(nav, { translateY: -1 * navHeight + 'px' }, { easing: 'easeInQuart' }),
    animate(bottomNav, { translateY: navHeight + 'px' }, { easing: 'easeInQuart' }),
    animate(content, { opacity: 0 }, { easing: 'easeInQuart' })
  ]).then(() => {
    return animate(this.newElement, { scaleX: [1, 0], scaleY: [1, 0], opacity: 1 }, { easing: 'easeOutQuart' });
  });
}
