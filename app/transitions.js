import { animate, stop } from 'liquid-fire';

export default function() {
  this.setDefault({ duration: 500 });

  this.transition(
    this.fromRoute('login'),
    this.toRoute('index'),
    this.use('login-to-app'),
  );

  this.transition(
    this.toRoute('login'),
    this.use('app-to-login'),
  );
}
