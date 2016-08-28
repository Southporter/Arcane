<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "arcane";

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open the Database...\n");
}


$select_customer_id = "SELECT genre_id, genre_name FROM genre "; 

if ($result = $mysqldb->query($select)) {
   $json = '{ "data" : [';
   
   while ($row = $result->fetch_row()) {
   	 $id   = $row[0];
	 $name = $row[1];
	 $json .= '{"' . $id. '": "' . $name . '", ';
   }

   $json .= ']}';
   header('Content-type: application/json');
   echo $json;
} else {
  echo "No result from database";
}
$mysqldb->close();
?>
