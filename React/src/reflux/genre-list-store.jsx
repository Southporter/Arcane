var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var GenreListStore = Reflux.createStore({
   listenables: [Actions],
   getGenres: function() {
      HTTP.get('public_html/php/api/genre/pull_genres.php')
      .then(function (response) {
         console.info("Response:", response.data);
         this.genreList = response.data;
         console.info("Genre list: ", this.genreList);
         this.fireUpdate();
      }.bind(this));
   },
   postGenre: function() {
      //Do nothing yet
   },
   fireUpdate: function() {
      this.trigger('change', this.genreList);
   }
});

module.exports = GenreListStore;
