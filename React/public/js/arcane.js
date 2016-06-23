var audioFileType = "";
var isPlaying = false;
var isPaused = false;
var index = 0;
var songlist = ["/home/perrin/Music/iris", "/home/perrin/Music/slide", "/home/perrin/Music/broadway", "/home/perrin/Music/black_ballon", "/home/perrin/Music/bullet_proof"];

var play     = $('#play');
var restart  = $('#previous');
var next     = $('#next');
var progress = document.getElementById('progressBar');
var song;

function setUpPlayer() {
   song = new Audio();
   if (song.canPlayType('audio/mpeg;')) {
      audioFileType = ".mp3";
      song.type = 'audio/mpeg';
   } else {
      audioFileType = ".ogg";
      song.type = 'audio/ogg';
   }

}

function playNext() {
   progress.MaterialSlider.change(0);
   index++;
   song.src = songlist[index] + audioFileType;
   song.play();
   isPlaying = true;
}

$(document).ready( function() {
   setUpPlayer();

   play.click( function(e) {
      e.preventDefault();
      if (!isPlaying) {
         if (!isPaused) {
            song.src = songlist[index.toString()] + audioFileType;
         }
         song.play();

         $(this).children('i').replaceWith('<i class="material-icons">pause</i>');
         $('#progressBar').attr('max', song.duration);
         isPlaying = true;
      } else {
         song.pause();
         $(this).children('i').replaceWith('<i class="material-icons">play_arrow<i>');
         isPlaying = false;
         curtime = parseInt(song.currentTime, 10);
         progress.MaterialSlider.change(curtime);
         isPaused = true;
      }
   });

   $("#progressBar").bind("change", function() {
      song.currentTime = $(this).val();
      $("#progressBar").attr("max", song.duration);
   });

   song.onended = function() {
      playNext();
   }

   song.ontimeupdate = function() {
      curtime = parseInt(song.currentTime, 10);
      progress.MaterialSlider.change(curtime);
   };

   restart.click( function(e) {
      e.preventDefault();
      progress.MaterialSlider.change(0);
      song.currentTime = 0;
   });

   next.click( function(e) {
      e.preventDefault();
      playNext();
   });

   $("#welcome-modal").modal({keyboard: false, backdrop: 'static', show: false});
   $("#welcome-modal").modal('show');

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
