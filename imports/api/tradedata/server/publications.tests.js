<<<<<<< HEAD
=======
// Tests for the links publications
//
// https://guide.meteor.com/testing.html

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { assert } from 'chai';
import { Tradedata } from '../tradedata.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('tradedata publications', function () {
  beforeEach(function () {
    Tradedata.remove({});
    Tradedata.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('tradedata.all', function () {
    it('sends all tradedata', function (done) {
      const collector = new PublicationCollector();
      collector.collect('tradedata.all', (collections) => {
        assert.equal(collections.tradedata.length, 1);
        done();
      });
    });
  });
});
