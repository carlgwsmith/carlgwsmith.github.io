<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = "Contact Page Form";
$email_subject = "New Submission from Contact Form";
$email_body = "Name: $name./n".
              "Email: $email./n".
              "Message: $message./n";
$to = "carlgwsmith@gmail.com";
$headers = "From: $email_from /r/n";
$headers .="Reply-To: $email /r/n";

mail($to,$email_subject,$email_body,$headers);

header("location: contact.html");

?>