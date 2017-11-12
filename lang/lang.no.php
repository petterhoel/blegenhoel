<?php
/*
-------------------
Language: Norwegian
-------------------
*/

$lang = array();
$language = "no";

// Menu
$lang['NATURA+OIL'] = 'På lerret';
$lang['NATURA+PAPER'] = 'På papir';
$lang['NATURA+TEXT'] = 'Om Natura +';
$lang['WORKS1'] = 'Arbeider 1';
$lang['WORKS2'] = 'Arbeider 2';
$lang['BIO'] = 'Bio';
$lang['CONTACT'] = 'Kontakt';

// carousel info box
$carousel_info = array();
$carousel_info['from'] = "Fra";
$carousel_info['for_sale'] = 'Til salgs';
$carousel_info['get_in_touch'] = 'ta kontakt';

// artwork techniques for current language - corresponds with database field number
require 'includes/technique_to_array.php';
$technique = array();
$technique = technique_to_array($technique, $language);

// contact page text
$contact_page = array();
$contact_page["intro_text"] = "<section><p class='teal'>Ta kontakt om du har spørsmål, ønsker en avtale om visning eller et eventuelt kjøp.</p></section>";
$contact_page["name"] = "Navn *";
$contact_page["email"] = "E-post";
$contact_page["message"] = "Din melding";
$contact_page["robot"] = "Vis at du ikke er en robot";
$contact_page["send_button"] = "Send melding";
$contact_page["fill_prompt"] = "* Må fylles ut";
$contact_page["thank_you"] = "<p class='teal center'>Takk for melding, ".$_POST["name"].". Jeg leser den snartest mulig.</p>";
$contact_page["captcha_fail"] = "<p class='error center'>Hei! Det ser ut som du ikke har fylt ut robotfeltet riktig. Meldingen din er ikke sendt. Vennligst gå tilbake og prøv på nytt.</p>";
?>