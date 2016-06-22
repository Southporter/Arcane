var React = require('react');

var RectangleTextButton = React.createClass({
   render: function() {
      return (
         <button type={this.props.type} id={this.props.id} onClick={this.props.click} className="rectangle-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" >
            {this.props.name}
         </button>
      );
   }
});

module.exports = RectangleTextButton;
