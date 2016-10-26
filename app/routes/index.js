import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post').then(results=> results.sortBy('timestamp').reverse()),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    update(post, params){
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
