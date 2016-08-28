<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "arcane";
$email    = $_POST["username"];
$user_password = $_POST["password"];

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
   echo "email filter " . $email. ".";
   return;
}

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open database\n");
}

$select = "SELECT password, login_id FROM login WHERE email = '" . $email . "';";

if ($result = $mysqldb->query($select)) {
   $row = $result->fetch_row();

   if (password_verify($user_password, $row[0])) {
      echo "Success";
   } else {
      echo "password";
   }
} else {
   echo "email db";
}

$mysqldb->close();

?>
