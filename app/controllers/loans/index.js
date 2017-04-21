import Ember from 'ember';

export default Ember.Controller.extend({
  toggleReturnedAndSave(loan) {
    loan.returned = ! loan.returned;
    return loan.save(); // promise
  },
  save(loan) {
    return loan.save(); // promise
  },
});
