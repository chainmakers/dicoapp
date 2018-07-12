<<<<<<< HEAD
=======
// Definition of the links collection

>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import { Mongo } from 'meteor/mongo';

const TransactionsRemote = new Mongo.Collection('transactions');
const TransactionsLocal = new Mongo.Collection(null);

<<<<<<< HEAD
export const Transactions = Meteor.isDesktop ? TransactionsLocal : TransactionsRemote;
=======
export const Transactions = Meteor.isDesktop ? TransactionsLocal : TransactionsRemote;
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
