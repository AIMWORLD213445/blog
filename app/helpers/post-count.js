import Ember from 'ember';

export function postCount(index) {
  var greaterThan5 = false;
  if (index > 4) {
    greaterThan5 = true;
  }
  return greaterThan5;
}

export default Ember.Helper.helper(postCount);
