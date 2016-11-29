<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . ".php";
   });

   $dbHandler = new DBHandler("arcane");
   $payload = new Payload();

   if ($_SERVER['REQUEST_METHOD'] === "GET") {
      if ($dbHandler->connected == true) {
         $result = $dbHandler->select(["genre_id"], "genre", ["genre_name"], [$_GET["genre"]]);
         if (gettype($result) != "string") {
            $row = $result->fetch();
            $genre_id = $row[0];

            $result = $dbHandler->select(["song_name AS name", "url", "album_id"], "song", ["genre_id"], [$genre_id]);
            if (gettype($result) != "string") {
               $result_arr = [];
               for ($i = 0; $i < 10 && $i < $result->rowCount(); $i++) {
                  $row = $result->fetch();
                  $obj = '{ "name": "' . $row[0] . '", "url": "' . $row[1] . '", "album": ';
                  $album_result = $dbHandler->select(['album_name'], "album", ["album_id"], [ '1']);
                  if (gettype($album_result) != "string") {
                     $r = $album_result->fetch();
                     $obj .= '"' . $r[0] . '"';
                  } else {
                     $obj .= '"Arcane Recommended"';
                  }
                  $obj .= "}";
                  array_push($result_arr, $obj);
               }

               $payload->data = $result_arr;
               if (count($result_arr) > 0) {
                  $payload->status = "SUCCESS";
               } else {
                  $payload->status = "ERROR";
                  $payload->message = "Could not find that genre";
               }
            } else {
               $error_message = explode(":", $result);
               $payload->status = $error_message[0];
               $payload->message = $error_message[1];
            }

         } else {
            $error_message = explode(":", $result);
            $payload->status = $error_message[0];
            $payload->message = $error_message[1];
         }
      } else {
         $payload->status = "ERROR";
         $payload->message = "Could not connect ot the Database: " . $dbHandler->connected;
      }
   }

   echo json_encode($payload);
?>
