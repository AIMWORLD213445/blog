import Ember from 'ember';

export default Ember.Component.extend({
  // addNewPost: false,
  actions: {
    // newPostFormShow() {
    //   this.set('addNewPost', true);
    // },
    savePost() {
      var params= {
        username: this.get('username'),
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date(),
      };
      this.set('username', "");
      this.set('title', "");
      this.set('body', "");
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
