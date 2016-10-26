var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var MenuStore = Reflux.createStore({
   listenables: [Actions],
   getMenuItems: function() {
      HTTP.get('public_html/php/api/menu/menu-list.php')
      .then(function (response) {
         this.data = JSON.parse(response.data);
         this.fireUpdate();
      }.bind(this));
   },
   fireUpdate: function() {
      this.trigger('change', this.data.list);
   }
});

module.exports = MenuStore;
