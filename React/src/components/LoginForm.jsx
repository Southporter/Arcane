var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var LoginForm = React.createClass({
   submitLogin: function (e) {
      e.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
         if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText = "Success") {
               $("#welcome-modal").modal("hide");
            } else {
               alert("ERROR: on the server side");
            }
         }
      }
      var username = "username=" + $("#enter_user_name").value;
      var password = "password=" + $("#enter_password").value;
      xhr.open("POST", "php/login.php", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(username + "&" + password);
   },

   render: function() {
      return (
         <div id="login-form-page" className={"arcane-modal-screen " + this.props.location}>
            <div className="row">
               <form id="login_form" onSubmit={this.submitLogin}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                           <TextBox id="enter_user_name" label="Username" />
                        </div>
                        <div className="col-xs-0 col-sm-0 col-md-6 col-lg-6">
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                           <PasswordBox id="enter_password" label="Password"/>
                        </div>
                        <div className="col-xs-0 col-sm-0 col-md-6 col-lg-6">
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-6 col-lg-6">
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                           <RectangleTextButton type="submit" id="login-submit" name="submit" />
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
