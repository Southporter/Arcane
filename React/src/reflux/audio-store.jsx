var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var AudioStore = Reflux.createStore({
   listenables: [Actions],
   init: function() {
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
   play: function(genre) {
      if (this.audioPlayer != null) {
         this.init();
      }
      if (!this.isPlaying) {
         if (!this.isPaused) {
            this.audioPlayer.src = this.getNextSong(genre) + this.audioType;
         }
         this.audioPlayer.play();
         this.isPlaying = true;
         this.isPaused = false;
      } else {
         this.pause();
      }
   },
   next: function() {
      console.info("Playing Next", this.songList[0]);
      var song = this.songList[0];
      console.info("Song URL: ", song.url);
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
   getNextSong: function(genre) {
      if (this.songList == null) {
         this.getSongList(genre);
         this.index = 0;
      } else {
         var song = JSON.parse(this.songList[this.index++]);
         console.info("Song from song list", song.url);
         return "php/api/Music" + song.url;
      }
   },
   skip: function(event, value) {
      this.audioPlayer.currentTime = value;
   },
   getSongList: function(genre) {
      if (typeof(genre) != "string") {
         genre = "Alternative Rock";
      }
      HTTP.get('public_html/php/api/songs.php?genre=' + genre)
      .then(function (response) {
         if (response.status == "SUCCESS") {
            this.songList = response.data;
               console.log("Successful retrieval of songs", this.songList);
         } else {
            alert("Sorry, our server is having problems currently. Please try again later.");
            console.log(response);
         }
      }.bind(this));
   },
   fireUpdate: function() {
      var currTime = parseInt(this.audioPlayer.currentTime, 10);
      var max = this.audioPlayer.duration;
      this.trigger('change', currTime, max);
   }
});

module.exports = AudioStore;
