<<<<<<< HEAD
=======
// All links-related publications

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { Tradedata } from '../tradedata.js';

Meteor.publish('tradedata.all', function () {
  return Tradedata.find();
});
