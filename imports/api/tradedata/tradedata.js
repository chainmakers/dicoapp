<<<<<<< HEAD
=======
// Definition of the links collection

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Mongo } from 'meteor/mongo';

const TradedataRemote = new Mongo.Collection('tradedata');
const TradedataLocal = new Mongo.Collection(null);
<<<<<<< HEAD
export const Tradedata = Meteor.isDesktop ? TradedataLocal : TradedataRemote;
=======
export const Tradedata = Meteor.isDesktop ? TradedataLocal : TradedataRemote;
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
