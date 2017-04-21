import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    // example model looks like {friendsCount: 33}
    return this.get('ajax').request('/friends')
      .then(data => ({friendsCount: data.data.length}));
  },
})
