import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout() {
      this.transitionTo('login');
    }
  }
});