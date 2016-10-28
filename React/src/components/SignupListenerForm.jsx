var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var SignupListenerForm = React.createClass({
   submitSignup: function (e) {
      e.preventDefault();
      var password = $('#enter_listener_new_password').val();
      var password_reenter = $("#reenter_listener_new_password").val();
      if (password != password_reenter) {
         $('#signup_listener_reenter_password_error').toggleClass("hidden-error visible-error");
         return;
      } else if (password.length < 8) {
         $('#signup_listener_bad_password_error').toggleClass("hidden-error visible-error");
         return;
      }

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
         if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.status == "SUCCESS") {
               $("#welcome-modal").modal("hide");
            } else if (response.status == "ERROR") {
               $('#signup_listener_email_error').toggleClass("hidden-error visible-error");
               return;
            }
         } else if (xhr.readyState == 4) {
            alert("Sorry, there's an error on our server... Please try again later.");
         }
      }
      var form = new FormData();
      form.append('firstname', $("#enter_listener_first_name").val());
      form.append('lastname', $("#enter_listener_last_name").val());
      form.append('username', $("#enter_listener_new_user_name").val());
      form.append('password', password);

      xhr.open("POST", "php/api/security/sign-up-listener.php", true);
      xhr.send(form);
   },

   render: function() {
      return (
         <div id="signup-listener-page" className={"arcane-modal-screen " + this.props.location}>
            <div className="row">
               <form id="signup_listener_form" onSubmit={this.submitSignup}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_listener_first_name" label="First Name" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_listener_last_name" label="Last Name" />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_listener_new_user_name" label="Email" />
                        </div>
                        <div id="signup_listener_email_error" className="hidden-error col-xs-6 col-sm-6 col-md-5 col-lg-6">
                           <p>That's not an email. Try again.</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <PasswordBox id="enter_listener_new_password" label="Password"/>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6">
                           <p id="signup_listener_reenter_password_error" className="hidden-error">Passwords don't match. Try again.</p>
                           <p id="signup_listener_bad_password_error" className="hidden-error">Passwords aren't valid. Try again.</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <PasswordBox id="reenter_listener_new_password" label="Confirm Password" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <RectangleTextButton type="submit" id="signup-listener-submit" name="submit" />
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }

});

module.exports = SignupListenerForm;
