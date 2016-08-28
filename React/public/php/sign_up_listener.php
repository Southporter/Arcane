<?php
$servername    = "localhost";
$username      = "php_user";
$password      = "php-user";
$first_name    = $_POST["firstname"];
$last_name     = $_POST["lastname"];
$email         = $_POST["username"];
$user_password = $_POST["password"];

$encrypted_pass = password_hash($user_password, PASSWORD_BCRYPT);
if (!password_verify($user_password, $encrypted_pass)) {
   echo "ERROR hash";
   return;
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
   echo "ERROR username";
   return;
}

$mysqldb = new mysqli($servername, $username, $password, "arcane");

if ($mysqldb->connect_error) {
   die("ERROR server");
}
$select_user_id = "(SELECT admin_user_id FROM admin_user WHERE first_name = 'PHP' AND last_name = 'SCRIPT')";
$insert_login = "INSERT INTO login ( email, password, created_by, creation_date, last_updated_by, last_updated_date ) VALUES ( '" . $email . "', '" . $encrypted_pass . "', " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE())";
$result = $mysqldb->query($insert_login);

if ($result == FALSE) {
   echo "ERROR username insert";
} else {
  $select_login   = "(SELECT login_id FROM login WHERE email = '" . $email . "')";
$insert = "INSERT INTO user ( first_name, last_name, login_id, created_by, creation_date, last_updated_by, last_updated_date) VALUES ( '" . $first_name . "', '" . $last_name . "', " . $select_login . ", " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE())";
	$result = $mysqldb->query($insert);

	if ($result == FALSE) {
	   echo "ERROR username exists";
	} else{
	echo "SUCCESS";
	}
}

$mysqldb->close();
?>
