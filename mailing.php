<?php 
    $to = "demirakbal@gmail.com";
    $from = $_POST['Email'];
    $name = $_POST['Name'];
    $subject = $_POST['Subject'];
    $subject2 = "Copy of your message";
    $message = $name . " sent the following message:" . "\n\n" . $_POST['Message'] . "\n\n" . "Sent via the contact form on demirakbal.com";
    $message2 = "Here is a copy of your message to Demir Akbalıkcı:" . "\n\n" . $_POST['Message'] . "\n\n" . "Sent via the contact form on demirakbal.com";
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    header("Location: https://demirakbal.com");
?>
