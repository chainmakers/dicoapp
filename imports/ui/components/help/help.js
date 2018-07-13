import './help.html';
import helpLinks from '/imports/ui/helpers/helpLinks';

Template.registerHelper('getLinks', function() {
  return helpLinks;
});