var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var LoginForm = React.createClass({
   submitLogin: function () {
      $('#welcome-modal').modal('hide');
   },

   render: function() {
      return (
         <div id="login-form-page" className={"arcane-modal-screen " + this.props.location}>
            <form id="login_form" onSubmit="submitLogin">
               <TextBox id="enter_user_name" label="Username" />
               <PasswordBox id="enter_password" label="Password"/>
               <RectangleTextButton type="submit" id="login-submit" name="submit" />
            </form>
         </div>
      );
   }

});

module.exports = LoginForm;
