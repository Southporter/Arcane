<?php
$servername    = "localhost";
$username      = "php_user";
$password      = "php-user";
$first_name    = $_POST["first_name"];
$last_name     = $_POST["last_name"];
$street        = $_POST["street"];
$city	       = $_POST["city"];
$state	       = $_POST["state"];
$date          = $_POST["date"];
$start_time    = $_POST["start_time"];
$end_time      = $_POST["end_time"];
$email         = $_POST["email"];

$mysqldb = new mysqli($servername, $username, $password, "knockerball");

if ($mysqldb->connect_error) {
   die("Connection failed: " . $mysqldb->connect_error);
}

$select = "SELECT * FROM address WHERE street='" . $street . "' AND city='" . $city . "' AND state='" . $state . "';";
$result = $mysqldb->query($select);
if ($result->num_rows == 0) {
$select_user_id = "(SELECT user_id FROM user WHERE first_name = 'PHP' AND last_name = 'SCRIPT')";
$select_customer_id = "(SELECT customer_id FROM customer WHERE first_name = '" . $first_name . "' AND last_name = '" . $last_name . "' AND login_id= (SELECT login_id FROM login WHERE email='" . $email . "'))";
$insert_address = "INSERT INTO address (street, city, state, created_by, creation_date, last_updated_by, last_updated_date) VALUES ('" . $street . "', '" . $city . "', '" . $state . "', " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE());";
$select_address_id = "(SELECT address_id FROM address WHERE street = '" . $street . "' AND city = '" . $city . "' AND state = '" . $state . "')";

if (date_default_timezone_set("America/Denver")) {


$date_modified = date("Y-m-d", strtotime($date . " " . $start_time));
$start_date_time = date("Y-m-d H:i:s", strtotime($date . " " . $start_time));
$end_date_time = date ("Y-m-d H:i:s", strtotime($date . " " . $end_time));
$insert_reservation = "INSERT INTO reservations (reservation_date, start_time, end_time, customer_id, address_id, available, created_by, creation_date, last_updated_by, last_updated_date) VALUES ('" . $date_modified . "', '" . $start_date_time . "', '" . $end_date_time . "', " . $select_customer_id . ", " . $select_address_id . ", 'T', " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE());";

$update_customer = "UPDATE customer SET address_id=" . $select_address_id . " WHERE first_name='" . $first_name . "' AND last_name='" . $last_name . "';";
$result = $mysqldb->query($insert_address);

if ($result == FALSE) {
echo "ERROR: Address insertion failed";
} else {

$result = $mysqldb->query($update_customer);
$result = $mysqldb->query($insert_reservation);

if ($result == FALSE) {
echo "ERROR: Reservation insertion failed";
echo $date;
} else {
$update_customer = "UPDATE customer SET address_id=" . $select_address_id . " WHERE first_name='" . $first_name . "' AND last_name='" . $last_name . "';";
echo "SUCCESS: Reservation inserted";
}
}
} else {
echo "ERROR: No timezone set";
}
} else {
  echo "ERROR: Address already exists in the database";
}

$mysqldb->close();
?>
