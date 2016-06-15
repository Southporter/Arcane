var audioFileType = "";
var isPlaying = false;
var isPaused = false;

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

$(document).ready( function() {
   setUpPlayer();

   play.click( function(e) {
      e.preventDefault();
      if (!isPlaying) {
         if (!isPaused) {
            song.src = "/home/perrin/Music/iris" + audioFileType;
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
      alert("We are currently working on this functionality. Please be patient as we continue to update our program. Thanks!\nArcane Development Team");
   });
});
