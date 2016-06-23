var React = require('react');
var RectangleButton = require('./RectangleTextButton.jsx');

var HorizontalButtonMenu = React.createClass({
   render: function() {
      return (
         <div id="modal-button-menu"className={"arcane-modal-screen horizontal-menu " + this.props.location}>
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <RectangleButton type="button" id="login-menu-switch" name="Login"  />
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <RectangleButton type="button" id="signup-menu-switch" name="Signup" />
               </div>
            </div>
         </div>
      );
   }
});

module.exports = HorizontalButtonMenu;
