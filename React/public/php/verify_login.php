<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "knockerball";
$email    = $_POST["email"];
$user_password = $_POST["password"];

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
   echo "email";
   return;
}

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open the Database...\n");
}

$select = "SELECT password, salt, login_id FROM login WHERE email = '" . $email . "';";

if ($result = $mysqldb->query($select)) {
   $row = $result->fetch_row();


   if (password_verify($user_password, $row[0])) {
      $select = "SELECT first_name, last_name, phone FROM customer WHERE login_id = " . $row[2] . ";";

      if ($result = $mysqldb->query($select)) {
      	 $row = $result->fetch_row();
	 $return = '{ "info" : ' . json_encode($row) . '}';
      	 echo $return ;
      } else {
      	 echo "Login id";
      }
      
   } else {
      echo "password";
   }
} else {
   echo "email";
}

$mysqldb->close();

?>