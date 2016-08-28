<?php
$server   = "localhost";
$username = "php_user";
$password = "php-user";
$db       = "knockerball";
$day      = $_POST["date"]; //format yyyy-mm-dd

$mysqldb = new mysqli($server, $username, $password, $db);

if ($mysqldb->connect_error) {
   die("Could not open the Database...\n");
}


$select = 'SELECT start_time, end_time FROM reservations WHERE reservation_date="';
$select .= $day . '" AND available="T";';

if ($result = $mysqldb->query($select)) {
   $json = '{ "times" : [';
   
   while ($row = $result->fetch_row()) {
   	 $start = $row[0];
	 $end   = $row[1];
	 $start = explode(' ', $start);
	 $startTime = $start[1];
	 $json .= '{"start_time": "' . $startTime . '", ';
	 $end = explode(' ', $end);
	 $endTime = $end[1];
	 $json .= '"end_time": "' . $endTime . '"},';
   }

   $json .= ']}';
   header('Content-type: application/json');
   echo $json;
} else {
  echo "No result from database";
}
$mysqldb->close();
?>