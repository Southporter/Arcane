var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var GenreListStore = Reflux.createStore({
   listenables: Actions,
   init: function() {
      this.state = {genreList: []};
   },
   getGenres: function() {
      HTTP.get('public_html/php/api/genre/pull_genres.php')
      .then(function (response) {
         this.state.genreList = response.data;
         this.fireUpdate();
      }.bind(this));
   },
   postGenre: function() {
      //Do nothing yet
   },
   fireUpdate: function() {
      this.trigger('change', this.state);
   }
});

module.exports = GenreListStore;
