import './help.html';
import helpLinks from '/imports/ui/helpers/helpLinks';
import tokenconfig from '/imports/api/config/tokenconfig.js';

Template.registerHelper('getLinks', function() {
  return helpLinks;
});

Template.registerHelper('dICOToken', function() {
  return tokenconfig.dICOtoken.shortcode;
});
