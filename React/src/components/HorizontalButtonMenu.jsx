var React = require('react');
var RectangleButton = require('./RectangleTextButton.jsx');

var HorizontalButtonMenu = React.createClass({
   render: function() {
      return (
         <div id="modal-button-menu"className={"arcane-modal-screen horizontal-menu " + this.props.location}>
            <div className="row">
               <div className="col-xs-12">
                  <div style={{height: 60 + "px"}}>
                     <h4 className="welcome-text display-text">Welcome to <span className="company_name">Arcane</span></h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <RectangleButton type="button" id="login-menu-switch" name="Login"  />
                  <RectangleButton type="button" id="signup-menu-switch" name="Signup" />
               </div>
            </div>
         </div>
      );
   }
});

module.exports = HorizontalButtonMenu;
