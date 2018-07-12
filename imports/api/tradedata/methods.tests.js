<<<<<<< HEAD
=======
// Tests for links methods
//
// https://guide.meteor.com/testing.html

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Tradedata } from './tradedata.js';
import './methods.js';

if (Meteor.isServer) {
  describe('tradedata methods', function () {
    beforeEach(function () {
      Tradedata.remove({});
    });

    it('can add a new tradedata', function () {
      const addTradedata = Meteor.server.method_handlers['tradedata.insert'];

      addTradedata.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Tradedata.find().count(), 1);
    });
  });
}
