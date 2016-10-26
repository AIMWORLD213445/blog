import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr('date')
});
