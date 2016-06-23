var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var LoginForm = React.createClass({
   submitLogin: function (e) {
      e.preventDefault();
      $('#welcome-modal').modal('hide');
   },

   render: function() {
      return (
         <div id="login-form-page" className={"arcane-modal-screen " + this.props.location}>
            <div className="row">
               <form id="login_form" onSubmit={this.submitLogin}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <TextBox id="enter_user_name" label="Username" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <PasswordBox id="enter_password" label="Password"/>
                           <RectangleTextButton type="submit" id="login-submit" name="submit" />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }

});

module.exports = LoginForm;