var Reflux = require('reflux');
var Actions = require('.actions.jsx');
var HTTP = require('../services/httpservice');

var SongStore = Reflux.createStore({
   listenables: [Actions],
   getSongList: function() {
      this.songList = ["php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/iris", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/slide", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/broadway", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/black-balloon", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/bullet-proof"];
      this.fireUpdate();
   },
   fireUpdate: function() {
      this.trigger('change', this.songList);
   }
});

module.exports = SongStore;
