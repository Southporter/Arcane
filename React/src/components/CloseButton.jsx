var React = require('react');

var CloseButton = React.createClass({
    render: function() {
        return <button type={this.props.type} onClick="{this.props.onClick}" className="close-button mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-js-ripple-effect" >
                  <i className="material-icons" align="right" >close</i>
               </button>
    }
});

module.exports = CloseButton;
