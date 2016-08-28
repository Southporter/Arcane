<?php
$servername    = "localhost";
$username      = "php_user";
$password      = "php-user";
$first_name    = $_POST["first_name"];
$last_name     = $_POST["last_name"];
$email         = $_POST["email"];
$street        = $_POST["street"];
$city	       = $_POST["city"];
$state	       = $_POST["state"];
$date          = $_POST["date"];
$start_time    = $_POST["start_time"];
$end_time      = $_POST["end_time"];
$duration      = $_POST["duration"];

$from = "nwaknockerball@gmail.com";

$subject = 'Thank you for your request';

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "BCC: ssedrick1@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = $first_name . ",<br />";
$message .= "Thank you for reserving our Knockerballs!<br />";
$message .= "Your reservation time of " . $start_time . " on " . $date . " has been successfully<br />";
$message .= "logged in our database, and our team has been notified. We look forward to<br />";
$message .= "servicing your event.<br />";
$message .= "You will be charged $" . $duration * 100 . ".00<br /><br />";
$message .= "Thank you, <br /><br />";
$message .= "NWA Knockerball, LLC.<br />";
$message .= "nwaknockerball@gmail.com<br />";
$message .= "nwaknockerball.com<br />";
$message .= "(479) 856-5937";

mail($email, $subject, $message, $headers);
echo "Email to client sent";

$message = "NWA Knockerball,<br />";
$message .= $first_name . " " . $last_name . " has requested your services on " . $date . " at " . $start_time . ".<br />";
$message .= "Their event will be at " . $street . ", " . $city . " for " . $duration . " hours. They have not paid yet and will do<br />";
$message .= "so at the event. They look forward to your business.<br />";
$message .= "<br />Sincerely,<br />";
$message .= "App Development Team";

mail($from, $subject, $message, $headers);
echo "Email to company sent";

?>
