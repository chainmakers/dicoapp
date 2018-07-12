<<<<<<< HEAD
=======
// All links-related publications

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { Swapdata } from '../swapdata.js';

Meteor.publish('swapdata.all', function () {
  return Swapdata.find();
});
