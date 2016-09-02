var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var GenreListStore = Reflux.createStore({
   listenables: [Actions],
   getGenres: function() {

   },
   fireUpdate: function() {
      this.trigger('change', this.genreList);
   }
});
