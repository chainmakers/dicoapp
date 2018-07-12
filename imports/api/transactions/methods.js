<<<<<<< HEAD
=======
// Methods related to links

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Transactions } from './transactions.js';

Meteor.methods({
  'transactions.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Transactions.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
