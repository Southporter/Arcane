var React = require("react");

var CircleButton = React.createClass({
   render: function() {
      return (
         <button type={this.props.type} onClick={this.props.click} id={this.props.id} className="circle-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect" >
            <i className="material-icons" >{this.props.name}</i>
         </button>
      );
   }
});

module.exports = CircleButton;
