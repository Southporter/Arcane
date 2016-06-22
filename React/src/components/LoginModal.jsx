var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');
var CloseButton = require('./CloseButton.jsx');

var LoginModal = React.createClass({
   render: function() {
      return <div className="modal fade" id="login-modal" tabIndex="-1">
                <div className="modal-dialog" role="document">
                   <div className="arcane-modal modal-content">
                      <div className="modal-header">
                        <h4 className="display-text modal-title">Login or Signup</h4>
                      </div>
                      <div className="modal-body">
                         <form id="login_form">
                            <TextBox id="enter_user_name" label="Username" />
                            <PasswordBox id="enter_password" label="Password"/>
                            <RectangleTextButton type="submit" id="login-submit" name="submit" />
                         </form>
                      </div>
                   </div>
                </div>
             </div>
   }
});

module.exports = LoginModal;
