var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var SignupForm = React.createClass({
   submitSignup: function (e) {
      e.preventDefault();
      $('#welcome-modal').modal('hide');
   },

   render: function() {
      return (
         <div id="signup-form-page" className={"arcane-modal-screen " + this.props.location}>
            <div className="row">
               <form id="signup_form" onSubmit={this.submitSignup}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_first_name" label="First Name" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_last_name" label="Last Name" />
                        </div>
                     </div>
                     <div className="row">
                        <TextBox id="enter_new_user_name" label="Username" />
                     </div>
                     <div className="row">
                        <PasswordBox id="enter_new_password" label="Password"/>
                     </div>
                     <div className="row">
                        <PasswordBox id="reenter_new_password" label="Confirm Password" />
                        <RectangleTextButton type="submit" id="signup-submit" name="submit" />
                     </div>                     
                  </div>
               </form>
            </div>
         </div>
      );
   }

});

module.exports = SignupForm;
