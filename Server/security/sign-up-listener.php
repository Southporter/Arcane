<?php
   spl_autoload_register(function ($class_name) {
      include $class_name . '.php';
   });

   $dbHandler = new DBHandler("arcane");
   $payload = new Payload();

   $first_name = $_POST["firstname"];
   $last_name  = $_POST["lastname"];
   $username   = $_POST["username"];
   $password   = password_hash($_POST["password"], PASSWORD_BCRYPT);

   if (filter_var($username, FILTER_VALIDATE_EMAIL) === false) {
      $payload->status = "ERROR";
      $payload->message = "Username is not a valid email address";
   } else {

      $result = $dbHandler->insert("login", [ $username, $password]);

      if (gettype($result) !== "string") {
         $result = $dbHandler->select(["login_id"], "login", ["email"], [$username]);
         if (gettype($result) != "string") {
            $row = $result->fetch_row();
            $result = $dbHandler->insert("user", [ $first_name, $last_name, $row[0], "NULL"]);
            // TODO Find out why it is not inserting into user table
            echo $result;
            if (gettype($result) != "string") {
               $payload->status = "SUCCESS";
               $payload->message = $result;
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
         $error_message = explode(":", $result);
         $payload->status = $error_message[0];
         $payload->message = $error_message[1];
      }
   }

   echo json_encode($payload);

?>
