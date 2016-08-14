var React = require('react');
var RectangleButton = require('./RectangleTextButton.jsx');

var SignupButtonMenu = React.createClass({
   render: function() {
      return (
         <div id="signup-modal-menu" className={"row arcane-modal-screen horizontal-menu " + this.props.location}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div className="row">
                  <h4 className="display-text">Are you an Artist?<br />Or a Listener?</h4>
                  <p className="display-text">Listeners get to listen to great new music</p>
                  <p className="display-text">In addition, Artists get to upload music from their band to the Arcane database.</p>
               </div>
               <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                     <RectangleButton type="button" id="signup-artist-switch" name="Artist"  />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                     <RectangleButton type="button" id="signup-listener-switch" name="Listener" />
                  </div>
               </div>
            </div>
         </div>
      );
   }
});

module.exports = SignupButtonMenu;
