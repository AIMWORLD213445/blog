import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr('date'),
  comments: DS.hasMany('comment', { async: true }),
  category: DS.belongsTo('category', {async: true}),
});
