<<<<<<< HEAD
=======
// All links-related publications

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { Transactions } from '../transactions.js';

Meteor.publish('transactions.all', function () {
  return Transactions.find();
});
