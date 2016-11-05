var React = require('react');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx')
var AudioStore = require('../reflux/audio-store.jsx');

var Controls = require('./Controls.jsx');

var AudioPlayer = React.createClass({
   mixins: [Reflux.listenTo(AudioStore, "onChange")],
   getInitialState: function() {
      return {
         audioFileType: "",
         isPlaying: false,
         isPaused: false,
         index: 0,
         songList: [],
         play: null,
         restart: null,
         next: null,
         progress: null,
         player: null
      }
   },
   componentWillMount: function() {
      Actions.getAudioPlayer();
      Actions.getSongList();
   },
   componentDidMount: function() {
      var play     = $('#play')[0];
      var restart  = $('#previous')[0];
      var next     = $('#next')[0];
      var progress = $('#progressBar')[0];
      this.setState({
         play: play,
         restart: restart,
         next: next,
         progress: progress
      });
   },
   onChange: function(event, audioPlayer, list) {
      if (audioPlayer != null) {
         var audioType = ""
         if (audioPlayer.canPlayType('audio/mpeg')) {
            audioType = ".mp3";
            audioPlayer.type = 'audio/mpeg';
         } else {
            audioType = ".ogg";
            audioPlayer.type = 'audio/ogg';
         }
         audioPlayer.onended = this.playNext;
         audioPlayer.ontimeupdate = function() {
            var curtime = parseInt(this.state.player.currentTime, 10);
            this.state.progress.MaterialSlider.change(curtime);
         }.bind(this);
         this.setState({player: audioPlayer, audioFileType: audioType, songList: list});
      } else {
         this.setState({songList: list});
      }
   },

   playNext: function() {
      console.debug("Playing Next", this.state.progress);
      this.state.progress.MaterialSlider.change(0);
      var player = this.state.player;
      player.src = this.state.songList[this.state.index] + this.state.audioFileType;
      player.play();
      console.debug("Setting state after playing next");
      this.setState({index: this.state.index + 1, isPlaying: true, player: player});
   },

   playClick: function(e) {
      e.preventDefault();
      if (typeof(this.state.songList) == "undefined") {
         Actions.getSongList();
      } else {
         var player = this.state.player;
         if (!this.state.isPlaying) {
            if (!this.state.isPaused) {
               //TODO Fix the following line
               player.src = this.state.songList[this.state.index] + this.state.audioFileType;
            }
            player.play();
            $('#play').children('i').replaceWith('<i class="material-icons">pause</i>');
            this.state.progress.attr('max', player.duration);
            console.debug()
            this.setState({isPlaying: true, isPaused: false, player: player});
         } else {
            this.state.player.pause();
            $('#play').children('i').replaceWith('<i class="material-icons">play_arrow</i>');
            this.setState({isPlaying: false, isPaused: true});
            var curtime = parseInt(this.state.player.currentTime, 10);
            this.state.progress.MaterialSlider.change(curtime);
         }
      }
   },

   progressUpdate: function() {
      this.state.player.currentTime = this.state.progress.val();
      this.state.progress.attr("max", this.state.player.duration);
   },

   restartClick: function(e) {
      e.preventDefault();
      this.state.progress.MaterialSlider.change(0);
      this.state.player.currentTime = 0;
   },

   nextClick: function(e) {
      e.preventDefault();
      console.info("Next clicked!");
      this.playNext();
   },

   render: function() {
      return <Controls playClick={this.playClick} progressUpdate={this.progressUpdate} nextClick={this.nextClick} previousClick={this.restartClick}/>;
   }
});

module.exports = AudioPlayer;
