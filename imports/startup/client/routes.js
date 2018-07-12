import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

<<<<<<< HEAD
=======
// get layout template and UI views
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/seed/seed.js';
import '../../ui/pages/buy/buy.js';
import '../../ui/pages/wallet/wallet.js';
import '../../ui/pages/help/help.js';
import '../../ui/pages/not-found/not-found.js';

<<<<<<< HEAD
=======
// log in route
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/seed', {
  name: 'App.seed',
  action() {
    BlazeLayout.render('App_body', { main: 'App_seed' });
  },
});

<<<<<<< HEAD
=======
// wallet
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
FlowRouter.route('/wallet', {
  name: 'App.wallet',
  action() {
    BlazeLayout.render('App_body', { main: 'App_wallet' });
  },
});

<<<<<<< HEAD
=======
// buy
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
FlowRouter.route('/buy', {
  name: 'App.buy',
  action() {
    BlazeLayout.render('App_body', { main: 'App_buy' });
  },
});

<<<<<<< HEAD
=======
// help
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
FlowRouter.route('/help', {
  name: 'App.help',
  action() {
    BlazeLayout.render('App_body', { main: 'App_help' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
