var React = require('react');
var Slider = require('material-ui/Slider');

var ProgressBar = React.createClass({
   render: function() {
      return <input onChange={this.props.onChange} className="mdl-slider mdl-js-slider" id="progressBar" type="range" min="0" max="100" defaultValue="0" tabIndex="0" />
      //return (<Slider onChange={this.props.onChange} value={0} />);
   }
});

module.exports = ProgressBar;
