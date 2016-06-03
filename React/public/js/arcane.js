var isMenuOpen = false;
var audioFileType = "";

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
}

function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
}

function controlNav() {
   if (!isMenuOpen) {
     openNav();
     isMenuOpen = true;
   } else {
     closeNav();
     isMenuOpen = false;
   }
}

function setUpPlayer() {
   song = new Audio();
   if (song.canPlayType('audio/mpeg;')) {
      audioFileType = ".mp3";
   } else {
      audioFileType = ".ogg";
   }

}
