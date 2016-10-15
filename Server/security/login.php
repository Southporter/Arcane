<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . '.php';
   });

   $dbHandler = new DBHandler();
   $payload = new Payload();
   $dbHandler->setupConnection("arcane");
?>
