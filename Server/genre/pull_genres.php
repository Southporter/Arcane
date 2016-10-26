<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . '.php';
   });

   $val = '{ "list": [{ "name": "Alternative Rock", "icon": "genre", "url":"/main/genres" }, ';
   $val .= '{ "name": "Upload", "icon": "cloud_upload", "url": "/main/uploads" }, ';
   $val .= '{ "name": "Radio", "icon": "play_circle_outline", "url": "/main/genres"}, ';
   $val .= '{ "name": "My Music", "icon": "music_note", "url": "/main/artist-music"}, ';
   $val .= '{ "name": "Profile", "icon": "account_circle", "url": "/main/artist"}, ';
   $val .= '{ "name": "About", "icon": "info", "url": "/about"}';
   $val .= '] }';

   $payload = new Payload();

   $payload->data = $val;
   $payload->status = "SUCCESS";

   echo json_encode($payload);

?>
