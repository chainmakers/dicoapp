<<<<<<< HEAD
=======
// Tests for the behavior of the swapdata collection
//
// https://guide.meteor.com/testing.html

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Swapdata } from './swapdata.js';

if (Meteor.isServer) {
  describe('swapdata collection', function () {
    it('insert correctly', function () {
      const linkId = Swapdata.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Swapdata.find({ _id: linkId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'swapdata');
      assert.equal(count, 1);
    });
  });
}
