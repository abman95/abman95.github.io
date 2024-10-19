<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "abdullah.soeguet@outlook.de";
    $subject = "Neue Formulardaten von " . $name;
    $headers = "From: " . $email;
    
    $mailBody = "Name: " . $name . "\n";
    $mailBody .= "E-Mail: " . $email . "\n";
    $mailBody .= "Nachricht:\n" . $message;
    
    mail($to, $subject, $mailBody, $headers);
    
    header("Location: danke.html");
    exit();
}
?>
