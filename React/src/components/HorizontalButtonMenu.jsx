var React = require('react');
var RectangleButton = require('./RectangleTextButton.jsx');

var HorizontalButtonMenu = React.createClass({
   render: function() {
      return (
         <div id="modal-button-menu"className={"arcane-modal-screen horizontal-menu " + this.props.location}>
            <RectangleButton type="button" id="login-menu-switch" name="Login"  />
            <RectangleButton type="button" id="signup-menu-switch" name="Signup" />
         </div>
      );
   }
});

module.exports = HorizontalButtonMenu;
