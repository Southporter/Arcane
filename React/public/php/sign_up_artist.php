<?php
$servername    = "localhost";
$username      = "php_user";
$password      = "php-user";
$first_name    = $_POST["firstname"];
$last_name     = $_POST["lastname"];
$group_name    = $_POST["groupname"];
$genre         = $_POST["genre"];
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
$select_group_name = "SELECT artist_name FROM artist WHERE artist_name = '" . group_name . "';";
 
$insert_group_name = "INSERT INTO artist ( artist_name, genre_id, ";

$select_user_id = "(SELECT admin_user_id FROM admin_user WHERE first_name = 'PHP' AND last_name = 'SCRIPT')";
$insert_login = "INSERT INTO login ( email, password, created_by, creation_date, last_updated_by, last_updated_date ) VALUES ( '" . $email . "', '" . $encrypted_pass . "', " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE())";
$result = $mysqldb->query($insert_login);

if ($result == FALSE) {
   echo "ERROR username";
} else {
   $select_login   = "(SELECT login_id FROM login WHERE email = '" . $email . "')";

   $insert_artist = "INSERT INTO artist ( artist_name, genre_id, created_by, creation_date, last_updated_by, last_updated_date ) VALUES ( '" . $group_name . "', " . $genre . ", " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE() );";

   $result = $mysqldb->query($insert_artist);

   if ($result == FALSE) {
      echo "ERROR group name" . $genre;
   } else {
      
      $select_artist = "( SELECT artist_id FROM artist WHERE artist_name = '" . $group_name . "')";

      $insert_user = "INSERT INTO user ( first_name, last_name, login_id, artist_id, created_by, creation_date, last_updated_by, last_updated_date) VALUES ( '" . $first_name . "', '" . $last_name . "', " . $select_login . ", " . $select_artist . ", " . $select_user_id . ", UTC_DATE(), " . $select_user_id . ", UTC_DATE())";
      
      $result = $mysqldb->query($insert_user);

      if ($result == FALSE) {
	 echo "ERROR user insert";
      } else{
         echo "SUCCESS";
      }
   }
}

$mysqldb->close();
?>
