var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var AudioStore = Reflux.createStore({
   listenables: [Actions],
   getAudioPlayer: function() {
      if (this.audioPlayer == null) {
         this.audioPlayer = new Audio();
      }
      this.fireUpdate();
   },
   getSongList: function() {
      this.songList = ["php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/iris", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/slide", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/broadway", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/black-balloon", "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/bullet-proof"];
      this.fireUpdate();
   },
   fireUpdate: function() {
      this.trigger('change', this.audioPlayer, this.songList);
   }
});

module.exports = AudioStore;
