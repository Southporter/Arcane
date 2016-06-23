var React = require('react');
var LoginForm = require('./LoginForm.jsx');
var ButtonMenu = require('./HorizontalButtonMenu.jsx');
var SignupForm = require('./SignupForm.jsx');

var WelcomeModal = React.createClass({

   render: function() {
      return (
         <div className="modal fade" id="welcome-modal" tabIndex="-1">
            <div className="modal-dialog" role="document">
               <div className="arcane-modal modal-content">
                  <div className="modal-header">
                     <h4 className="display-text modal-title">Login or Signup</h4>
                  </div>
                  <div className="arcane-modal-body modal-body">
                     <LoginForm  location="push-left"/>
                     <ButtonMenu location="center" />
                     <SignupForm location="push-right" />
                  </div>
               </div>
            </div>
         </div>
         );
   }
});

module.exports = WelcomeModal;
