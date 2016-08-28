<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "arcane";
$group = $_POST["group_name"];

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open the Database...\n");
}


$select = "SELECT artist_id FROM artist WHERE artist_name='" . $group . "';";
$result = $mysqldb->query($select);

if ($result === false) {
   echo "ERROR group name";
} else {
   echo "SUCCESS";
}

$mysqldb->close();
?>
