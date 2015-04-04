import { animate, stop, Promise } from 'liquid-fire';

export default function (opts={}) {
  var nav = this.newElement.find('nav');
  var bottomNav = this.newElement.find('.bottom-nav');
  var content = this.newElement.find('> .container-fluid');
  var navHeight = parseInt(nav.css('height'), 10);
  var firstStep;

  firstStep = animate(this.oldElement, { scaleY: 0, scaleX: 0, opacity: 0 }, { easing: 'easeInQuart' });

  return firstStep.then(() => {
    return Promise.all([
      animate(nav, { translateY: ['0px', -1 * navHeight + 'px'] }, { easing: 'easeOutQuart' }),
      animate(bottomNav, { bottom: ['0px', -1 * navHeight + 'px'] }, { easing: 'easeOutQuart' })
    ]).then(() => {
      return animate(content, { opacity: [1, 0] });
    });
  });
}
