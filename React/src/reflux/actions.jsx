var Reflux = require('reflux');

var Actions = Reflux.createActions([
   "getMenuItems",
   "getGenres",
   "postGenre",
   "getAudioPlayer",
   "play",
   "next",
   "pause",
   "back",
   "skip",
   "getNextSong",
   "getSongList"
]);

module.exports = Actions;
