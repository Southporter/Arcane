var React = require('react');
var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');

var SignupArtistForm = React.createClass({
   submitSignup: function (e) {
      e.preventDefault();
      $('#welcome-modal').modal('hide');
   },

   render: function() {
      return (
         <div id="signup-artist-page" className={"arcane-modal-screen " + this.props.location}>
            <div className="row">
               <form id="signup_artist_form" onSubmit={this.submitSignup}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_artist_first_name" label="First Name" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_artist_last_name" label="Last Name" />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_artist_band_name" label="Band Name" />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_artist_new_user_name" label="Username" />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <PasswordBox id="enter_artist_new_password" label="Password"/>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <PasswordBox id="reenter_artist_new_password" label="Confirm Password" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <RectangleTextButton type="submit" id="signup-artist-submit" name="submit" />
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }

});

module.exports = SignupArtistForm;
