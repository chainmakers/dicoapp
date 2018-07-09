
import { Userdata } from '../../api/userdata/userdata.js';
import { Tradedata } from '../../api/tradedata/tradedata.js';
import tokenconfig from '../../api/config/tokenconfig.js';

Meteor.setInterval(function() {
    if (Userdata.find().count() > 4) {
        Meteor.call('getbalance', 'BTC');
        Meteor.call('getbalance', 'LTC');
        Meteor.call('getbalance', 'KMD');
        Meteor.call('getbalance', tokenconfig.dICOtoken.shortcode);
    }
    if (Userdata.find().count() > 4 && Tradedata.find().count() > 0) {
        Meteor.call('getprice', 'KMD');
        Meteor.call('getprice', 'BTC');
        Meteor.call('getprice', 'LTC');
        Meteor.call("checkswapstatus");
    }
}, 15000);

Meteor.setInterval(function() {
    if (Userdata.find().count() > 6) {
        Meteor.call('listtransactions', "BTC");
        Meteor.call('listtransactions', "LTC");
        Meteor.call('listtransactions', "KMD");
        Meteor.call('listtransactions', tokenconfig.dICOtoken.shortcode);
    }
}, 120000);

