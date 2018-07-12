<<<<<<< HEAD
=======
// Definition of the links collection

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Mongo } from 'meteor/mongo';

const SwapdataRemote = new Mongo.Collection('swapdata');
const SwapdataLocal = new Mongo.Collection(null);
export const Swapdata = Meteor.isDesktop ? SwapdataLocal : SwapdataRemote;
<<<<<<< HEAD
=======

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
