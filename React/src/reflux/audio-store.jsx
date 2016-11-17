var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var AudioStore = Reflux.createStore({
   listenables: [Actions],
   init: function() {
      console.info("Setting up AudioPlayer");
      if (this.audioPlayer == null) {
         this.audioPlayer = new Audio();
         if (this.audioPlayer.canPlayType('audio/mpeg')) {
            this.audioType = ".mp3";
            this.audioPlayer.type = 'audio/mpeg';
         } else {
            this.audioType = ".ogg";
            this.audioPlayer.type = 'audio/mpeg';
         }
         this.audioPlayer.onended = this.playNext;
         this.audioPlayer.ontimeupdate = this.fireUpdate;
      }
   },
   play: function() {
      if (this.audioPlayer != null) {
         this.init();
      }
      if (!this.isPlaying) {
         if (!this.isPaused) {
            this.audioPlayer.src = this.getNextSong() + this.audioType;
         }
         this.audioPlayer.play();
         this.isPlaying = true;
         this.isPaused = false;
      } else {
         this.pause();
      }
   },
   next: function() {
      console.info("Playing Next");
      this.audioPlayer.src = this.getNextSong() + this.audioType;
      this.audioPlayer.play();
   },
   pause: function() {
      if (!this.isPaused) {
         this.audioPlayer.pause();
         this.isPaused = true;
         this.isPlaying = false;
      }
   },
   back: function() {
      this.audioPlayer.currentTime = 0;
   },
   getNextSong: function() {
      if (this.songList == null) {
         this.getSongList();
         this.index = 0;
      }
      return this.songList[this.index++];
   },
   skip: function(event, value) {
      this.audioPlayer.currentTime = value;
   },
   getSongList: function() {
      this.songList = ["php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/iris",
      "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/slide",
      "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/broadway",
      "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/black-balloon",
      "php/api/Music/GooGooDolls/Dizzy-Up-The-Girl/bullet-proof"];
   },
   fireUpdate: function() {
      var currTime = parseInt(this.audioPlayer.currentTime, 10);
      var max = this.audioPlayer.duration;
      this.trigger('change', currTime, max);
   }
});

module.exports = AudioStore;
