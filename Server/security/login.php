<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . '.php';
   });

   $dbHandler = new DBHandler("arcane");
   $payload = new Payload();

   if (filter_var($_POST["username"], FILTER_VALIDATE_EMAIL) === false) {
      $payload->status  = "ERROR";
      $payload->message = "Email is not valid";
      return;
   }

   $connected = $dbHandler->connect("arcane");
   if ($connected == true) {
      $result = $dbHandler->select(["password", "login_id"], "login", ["email"], [$_POST["username"]]);
      if (gettype($result) != "string") {
         $row = $result->fetch_row();
         if (password_verify($_POST['password'], $row[0])) {
            $payload->status = "SUCCESS";
         } else {
            $payload->status = "ERROR";
            $payload->message = "Password Incorrect";
         }
      } else {
         $error_message = explode(":", $result);
         $payload->status = $error_message[0];
         $payload->message = $error_message[1];
      }
   } else {
      $payload->status  = "ERROR";
      $payload->message = "Could not connect to the Database: " . $connected;
   }

   echo json_encode($payload);
?>
