<?php
$servername = "localhost";
$username   = "php_user";
$password   = "php-user";
$first_name = $_POST["first_name"];
$last_name  = $_POST["first_name"];
$email      = $_POST["email"];
$street     = $_POST["street"];
$phone      = $_POST["phone"];

$mysqldb = new mysqli($servername, $username, $password, "knockerball");

if ($mysqldb->connect_error) {
   die("Connection failed: " . $mysqldb->connect_error);
}

$select_login = "(SELECT login_id FROM login WHERE email = '" . $email . "')";
$select_address = "(SELECT address_id FROM address WHERE street = '" . $street . "')";
$select_user_id = "(SELECT user_id FROM user WHERE first_name = 'PHP' AND last_name = 'SCRIPT')";
$insert = "INSERT INTO customer ( first_name, last_name, login_id, address_id, phone, created_by, creation_date, last_updated_by, last_updated_date) VALUES ( '" . $first_name . "', '" . $last_name . "', " . $select_login . ", " . $select_address . ", " . $phone . ", " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE())";
$result = $mysqldb->query($insert);
if ($result == TRUE) {
echo "Success!\n";
} else {
echo "ERROR: Could not complete insert. Notifying developer...\n";
}


$mysqldb->close();
echo "DB closed\n";
?>