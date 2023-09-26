<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "abdullah.soeguet@outlook.de"; // Ihre E-Mail-Adresse hier
    $subject = "Kontaktanfrage von $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    // Optional: Weiterleitung oder Bestätigungsseite anzeigen
    header("Location: confirmation.html"); // Ersetzen Sie 'confirmation.html' durch den Dateinamen Ihrer Bestätigungsseite
    exit;
}
?>
