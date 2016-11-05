var Reflux = require('reflux');

var Actions = Reflux.createActions([
   "getMenuItems",
   "getGenres",
   "postGenre",
   "getAudioPlayer",
   "getSongList"
]);

module.exports = Actions;
