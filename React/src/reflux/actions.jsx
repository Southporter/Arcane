var Reflux = require('reflux');

var Actions = Reflux.createActions([
   "getMenuItems",
   "getGenres",
   "postGenre"
]);

module.exports = Actions;
