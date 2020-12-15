<?php
  $name = htmlentities($_POST['name']);
  $email = htmlentities($_POST['email']);
  $msg = htmlentities($_POST['message']);

  $headers = "From: " . strip_tags($email) . "\r\n";
  $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
//  $headers .= "CC: susan@example.com\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $body = "<html><body>";
  $body .= "<p>name: $name</p>";
  $body .= "<p>email: $email</p>";
  $body .= "<p>message: $msg</p>";
  $body .= "</body></html>";

  mail("tendryll@gmail.com", "MFA Contact Form", $body, $headers);

  function assertName() {

  }

  function assertEmail() {

  }

  function assertMessage() {

  }


