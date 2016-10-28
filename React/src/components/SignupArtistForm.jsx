var React = require('react');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var GenreListStore = require('../reflux/genre-list-store.jsx');

var PasswordBox = require('./PasswordBox.jsx');
var TextBox = require('./TextBox.jsx');
var RectangleTextButton = require('./RectangleTextButton.jsx');
var Dropdown = require('./Dropdown.jsx');
var DropdownHard = require('./DropdownHardCode.jsx');

var SignupArtistForm = React.createClass({
   mixins:[Reflux.listenTo(GenreListStore, "onChange")],
   getInitialState: function() {
      return { genreList: [] };
   },
   componentWillMount: function() {
      Actions.getGenres();
   },
   onChange: function(event, genres) {
      this.setState({ genreList: genres});
      console.info("onChange fired: " , genres);
   },
   submitSignup: function (e) {
      e.preventDefault();
      var password = $('#enter_artist_new_password').val();
      var password_reenter = $("#reenter_artist_new_password").val();
      if (password != password_reenter) {
         $('#signup_artist_reenter_password_error').toggleClass("hidden-error visible-error");
         return;
      } else if (password.length < 8) {
         $('#signup_artist_bad_password_error').toggleClass("hidden-error visible-error");
         return;
      }

      this.checkGroupName(password);

   },
   checkGroupName: function(password) {
      var groupname = $("#enter_artist_band_name").val();

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
         if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText == "SUCCESS") {

               //Begin Insert
               var xhr2 = new XMLHttpRequest();
               xhr2.onreadystatechange = function() {
                  if (xhr2.readyState == 4 && xhr.status == 200) {
                     if (xhr2.responseText = "SUCCESS") {
                        $("#welcome-modal").modal("hide");
                     } else if (xhr2.responseText == "ERROR username" || xhr2.responseText == "ERROR username exists") {
                        $('#signup_artist_email_error').toggleClass("hidden-error visible-error");
                        return;
                     }
                  } else if (xhr2.readyState == 4){
                     alert("Sorry, there's an error on our server... Please try again later.");
                  }
               }
               var form = new FormData();
               form.append('firstname', $("#enter_listener_first_name").val());
               form.append('lastname', $("#enter_listener_last_name").val());
               form.append('groupname', $("#enter_artist_band_name").val());
               form.append('genre', $("#enter_artist_genre").val());
               form.append('username', $("#enter_listener_new_user_name").val());
               form.append('password', password);

               xhr2.open("POST", "php/sign_up_artist.php", true);
               xhr2.send(form);
            } else {
               $('#signup_artist_group_error').toggleClass("hidden-error visible-error");
            }
            //End Insert

         } else if (xhr.readyState == 4){
            alert("Sorry, there's an error on our server... Please try again later.");
         }
      }
      var form = new FormData();
      form.append('group_name', groupname);
      xhr.open("POST", "php/check_group.php", true);
      xhr.send(form);
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
                        <div id="signup_artist_group_error" className="hidden-error col-xs-6 col-sm-6 col-md-5 col-lg-6">
                           <p>That Band Name is already in our database. You will have to find another one..</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <Dropdown id="enter_artist_genre" list={this.state.genreList} />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <TextBox id="enter_artist_new_user_name" label="Username" />
                        </div>
                        <div id="signup_artist_email_error" className="hidden-error col-xs-6 col-sm-6 col-md-5 col-lg-6">
                           <p>That's not an email. Try again.</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           <PasswordBox id="enter_artist_new_password" label="Password"/>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6">
                           <p id="signup_artist_reenter_password_error" className="hidden-error">Passwords don't match. Try again.</p>
                           <p id="signup_artist_bad_password_error" className="hidden-error">Passwords aren't valid. Try again.</p>
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
