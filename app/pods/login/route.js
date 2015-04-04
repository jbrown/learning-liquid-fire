import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      console.log('logging in...');
      this.transitionTo('index');
    }
  }
});
