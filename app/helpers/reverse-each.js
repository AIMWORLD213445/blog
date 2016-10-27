import Ember from 'ember';

export function reverseEach(params) {
  params[0].content.reverse();
}

export default Ember.Helper.helper(reverseEach);
