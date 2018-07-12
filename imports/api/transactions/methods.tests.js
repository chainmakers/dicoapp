<<<<<<< HEAD
=======
// Tests for links methods
//
// https://guide.meteor.com/testing.html

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Transactions } from './transactions.js';
import './methods.js';

if (Meteor.isServer) {
  describe('transactions methods', function () {
    beforeEach(function () {
      Transactions.remove({});
    });

    it('can add a new transactions', function () {
      const addTradedata = Meteor.server.method_handlers['transactions.insert'];

      addTradedata.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Transactions.find().count(), 1);
    });
  });
}
