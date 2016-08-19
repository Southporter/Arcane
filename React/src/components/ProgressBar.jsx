var React = require('react');

var ProgressBar = React.createClass({
   render: function() {
      return <input onChange={this.props.onChange} className="mdl-slider mdl-js-slider" id="progressBar" type="range" min="0" max="100" defaultValue="0" tabIndex="0" />
   }
});

module.exports = ProgressBar;
