<!DOCTYPE html>
<html>
<head>
    <title>Mailtester</title>
</head>
<body>
<?php 

if ($_POST["email"] <> "")
{
    $ToEmail = 'petter@petterhoel.net'; 
    $EmailSubject = 'Ny melding fra blegenhoel.no'; 
    $mailheader = "From: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["name"].""; 
    $MESSAGE_BODY .= "Email: ".$_POST["email"].""; 
    $MESSAGE_BODY .= "Comment: ".nl2br($_POST["message"]).""; 
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 



    echo "Meldingen ble sendt";
} else {
?>
<form action="mailtester.php" method="post" class="contact">
    <h2>Få høre a</h2>
    <label for="name">Du heter:</label>
    <input id="name" type="text" name="name" placeholder="Skriv navnet ditt" />
    
    <label for="email">E-post: </label>
    <input id="email" type="email" name="email" placeholder="Hvis du vil ha svar" />
 
    <label for="message">Din melding:</label>
    <textarea id="message" name="message" placeholder="Jeg vil gjerne høre fra deg, hva har du på hjertet?"></textarea>

    <!--<label for="captcha">Vis at du ikke er en robot</label>
    <div id="captcha" class="g-recaptcha" data-sitekey="6LdAogATAAAAAKadDIjYhUVZ4u5rVyHuIAqHFFps"></div>
        -->
    <input type="submit" class="button" value="Send">
</form>
<?php
}
?>






sendt?
</body>
</html>