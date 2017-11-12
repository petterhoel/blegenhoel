<?php
/*
-----------------
Language: Italian
-----------------
*/

$lang = array();
$language = "it";

// Menu
$lang['NATURA+OIL'] = 'Su tela';
$lang['NATURA+PAPER'] = 'Su carta';
$lang['NATURA+TEXT'] = 'La storia';
$lang['WORKS1'] = 'Lavori 1';
$lang['WORKS2'] = 'Lavori 2';
$lang['BIO'] = 'Bio';
$lang['CONTACT'] = 'Contatti';

// carousel info box
$carousel_info = array();
$carousel_info['from'] = "Da";
$carousel_info['for_sale'] = 'In vendita';
$carousel_info['get_in_touch'] = 'contatti';

// artwork techniques for current language - corresponds with database field number
require 'includes/technique_to_array.php';
$technique = array();
$technique = technique_to_array($technique, $language);

// contact page text
$contact_page = array();
$contact_page["intro_text"] = "<section><p class='teal'>Per domande, appuntamenti o acquisti compilare lo schema sottostante.</p></section>";
$contact_page["name"] = "Nome *";
$contact_page["email"] = "E-mail";
$contact_page["message"] = "Il tuo messaggio";
$contact_page["robot"] = "Dimostra che non sei un robot.";
$contact_page["send_button"] = "Inviare";
$contact_page["fill_prompt"] = "* Dati obbligatori";
$contact_page["thank_you"] = "<p class='teal center'>".$_POST["name"]."! Ti ringrazio per la tua richiesta che sarà letta il più presto possibile.</p>";
$contact_page["captcha_fail"] = "<p class='error center'>Ciao! Il campo \"non sono un robot\" non è stato segnato. Il tuo messaggio non è stato inviato. Torna indietro e riprova.</p>";
?>