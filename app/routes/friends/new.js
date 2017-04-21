import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  // activate() {
  //   console.log('activate hook for friends new');
  // },
  // deactivate() {
  //   console.log('deactivate hook for friends new');
  // },
  
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      // console.log('resetController hook called');
      const model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  },
});
