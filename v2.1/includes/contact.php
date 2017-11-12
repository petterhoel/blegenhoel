<?php 
require_once 'includes/recaptchalib.php';

if (isset($_POST["name"])){
    $secret = "6LdAogATAAAAADGD4B3So7_ZNzdycFudHiU63eYx";
    $response = null;
    $reCaptcha = new ReCaptcha($secret);

    if ($_POST["g-recaptcha-response"]){
        $response = $reCaptcha -> verifyResponse(
            $_SERVER["REMOTE_ADDR"],
            $_POST["g-recaptcha-response"]
        );
    }

    $poster = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $client_ip = $_SERVER['REMOTE_ADDR'];
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    $referer = $_SERVER['HTTP_REFERER'];
    $request_time = $_SERVER['REQUEST_TIME'];
    $captcha_success = $response->success;
    

    if ($response != null && $response->success){
        include "includes/log.php";
        send_to_log((int)$request_time, $poster, $email, $message, $user_agent, $client_ip, $referer, $captcha_success);
        $ToEmail = 'oystein@blegenhoel.no'; 
        $EmailSubject = 'Ny melding fra '.$poster.' via blegenhoel.no'; 
        $mailheader = "From: ".$email."\r\n"; 
        $mailheader .= "Reply-To: ".$email."\r\n"; 
        $mailheader .= "Content-type: text/html; charset=utf8\r\n";
        $MESSAGE_BODY = nl2br($message).""; 
        mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
        echo "<img src='img/portrett-kvadrat.jpg'>";
        echo $contact_page["thank_you"];
        # log message
    } else {
        # log hacker but dont let them submit. Give user hint that they must solve capcha
        echo $contact_page["captcha_fail"];
    }

} else {

echo $contact_page["intro_text"];
?>

<form action="contact.php" method="post" class="contact" style="display:block;">
    <label for="name"><?php echo $contact_page["name"];?></label>
    <input id="name" type="text" name="name" />
    
    <label for="email"><?php echo $contact_page["email"];?></label>
    <input id="email" type="email" name="email" />
 
    <label for="message"><?php echo $contact_page["message"];?></label>
    <textarea id="message" name="message" ></textarea>
    
    <label for="captcha"><?php echo $contact_page["robot"];?></label>
    <div id="captcha" class="g-recaptcha" data-sitekey="6LdAogATAAAAAKadDIjYhUVZ4u5rVyHuIAqHFFps"></div>
    <input type="submit" class="button" value="<?php echo $contact_page["send_button"];?>">
    <label><?php echo $contact_page["fill_prompt"];?></label>
</form>


<?php
}
?>   
<footer>
+47 916 34 679 || oystein (at) blegenhoel (dot) no || Grindbakken 13, N-0764 Oslo
</footer> 


