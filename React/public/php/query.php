<?php
$servername = "localhost";
$username   = $_POST["user_name"];
$password   = $_POST["user_password"];
$value      = $_POST["value"];

$mysqldb = new mysqli($servername, $username, $password, "knockerball");

if ($mysqldb->connect_error) {
   die("Connection failed: " . $mysqldb->connect_error);
}

if ($mysqldb->select_db("knockerball")) {
   $insert = 'INSERT INTO address ( street, city, state, created_by, creation_date, last_updated_by, last_updated_date) VALUES ( \'' .$value . '\', \'Rexburg\', \'Idaho\', 5, UTC_DATE(), 5, UTC_DATE())';
   $result = $mysqldb->query($insert);
   if ($result == TRUE) {
      echo "Success!\n";
   } else {
      echo "No results found\n";
   }
} else {
  echo "Could not select database\n";
}

$mysqldb->close();
echo "DB closed\n";
?>