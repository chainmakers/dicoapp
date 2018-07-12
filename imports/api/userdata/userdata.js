<<<<<<< HEAD
=======
// Definition of the links collection

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Mongo } from 'meteor/mongo';

const UserdataRemote = new Mongo.Collection('userdata');
const UserdataLocal = new Mongo.Collection(null);

<<<<<<< HEAD
export const Userdata = Meteor.isDesktop ? UserdataLocal : UserdataRemote;
=======
export const Userdata = Meteor.isDesktop ? UserdataLocal : UserdataRemote;
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
