<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "knockerball";

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open the Database...\n");
}


$select = "SELECT reservation_date, start_time, end_time, available FROM reservations;";

if ($result = $mysqldb->query($select)) {
   $rows = array();

   while ($row = mysqli_fetch_assoc($result)) {
   	 $rows[] = $row;
   }

   $json = '{"events":' . json_encode($rows) . '}';
   header('Content-type: application/json');
   echo $json;
} else {
  echo "No result from database\n";
}
$mysqldb->close();
?>