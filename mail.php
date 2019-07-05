<?php
if(isset( $_POST['form_first_name']))
$name = $_POST['form_first_name'];
if(isset( $_POST['form_last_name']))
$name = $_POST['form_last_name'];
if(isset( $_POST['form_email']))
$email = $_POST['form_email'];
if(isset( $_POST['form_message']))
$message = $_POST['form_message'];


$content="From: $name \n Email: $email \n Message: $message";
$recipient = "carlgwsmith@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>