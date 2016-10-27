import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params = {
        name: this.get('name'),
      };
      this.sendAction('saveCategory', params);
    }
  }
});
