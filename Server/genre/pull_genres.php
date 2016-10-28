<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . '.php';
   });

   $dbHandler = new DBHandler("arcane");
   $payload = new Payload();

   $result = $dbHandler->select(["genre_name AS name"], "genre", [], []);

   $payload->data = $result->fetchAll();
   $payload->status = "SUCCESS";

   echo json_encode($payload);

?>
