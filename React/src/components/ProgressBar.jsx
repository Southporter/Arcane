var React = require('react');

var ProgressBar = React.createClass({

   render: function() {
      return <input onChange="updateProgress()" className="mdl-slider mdl-js-slider" id="progressBar" type="range" min="0" max="100" value="0" tabIndex="0" />
   }
});

module.exports = ProgressBar;
