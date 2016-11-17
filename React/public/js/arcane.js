$(document).ready( function() {

   //$("#welcome-modal").modal({keyboard: false, backdrop: 'static', show: false});
   //$("#welcome-modal").modal('show');

   $("#login-menu-switch").click( function(e) {
      $('#login-form-page').animate({
         left: '0%',
      }, 500, function() {
         $('#enter_user_name').focus();
      });
      $('#modal-button-menu').animate({
         left: '150%',
      }, 500);
   });
   $("#signup-menu-switch").click(function(e) {
      $('#signup-modal-menu').animate({
         left: '0%',
      }, 500);
      $('#modal-button-menu').animate({
         left: '-150%',
      }, 500);
   });
   $("#signup-listener-switch").click(function(e) {
      $('#signup-listener-page').animate({
         left: '0%',
      }, 500, function() {
         $('#enter_listener_first_name').focus();
      });
      $('#signup-modal-menu').animate({
         left: '-150%',
      }, 500);
   });
   $("#signup-artist-switch").click(function(e) {
      $('#signup-artist-page').animate({
         left: '0%',
      }, 500, function() {
         $('#enter_artist_first_name').focus();
      });
      $('#signup-modal-menu').animate({
         left: '-150%',
      }, 500);
   });
});
