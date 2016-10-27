import Ember from 'ember';

export default Ember.Component.extend({
  // addNewPost: false,
  actions: {
    // newPostFormShow() {
    //   this.set('addNewPost', true);
    // },
    selectCategory(category) {
      console.log(category);
      this.set('category', category);
    },
    savePost() {
      var params= {
        username: this.get('username'),
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date(),
        category: this.get('category')
      };
      this.set('username', "");
      this.set('title', "");
      this.set('body', "");
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
