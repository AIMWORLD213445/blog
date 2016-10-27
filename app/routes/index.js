import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      posts: this.store.findAll('post'),
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
      debugger;
      var category = params.category;
      console.log(category);
      category.get('posts').addObject(newPost);
      newPost.save().then(function(){
        return category.save();
      });
      this.transitionTo('index');
    },
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
