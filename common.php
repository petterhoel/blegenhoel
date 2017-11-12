<?php
session_start();
header('Cache-control: private'); // IE 6 FIX

if(isSet($_GET['lang']))
{
$lang = $_GET['lang'];

// register the session and set the cookie
$_SESSION['lang'] = $lang;

setcookie("lang", $lang, time() + (3600 * 24 * 30));
}
else if(isSet($_SESSION['lang']))
{
$lang = $_SESSION['lang'];
}
else if(isSet($_COOKIE['lang']))
{
$lang = $_COOKIE['lang'];
}
else
{
$lang = 'no';
}

switch ($lang) {
  case 'no':
  $lang_file = 'lang.no.php';
  $bio_file = 'includes/articles/bio.no.php';
  $natura_text = 'includes/articles/natura.no.php';
  $contact_file = 'includes/contact.php';
  break;

  // case 'en':
  // $lang_file = 'lang.en.php';
  // break;

  case 'it':
  $lang_file = 'lang.it.php';
  $bio_file = 'includes/articles/bio.it.php';
  $natura_text = 'includes/articles/natura.it.php';
  $contact_file = 'includes/contact.php';
  break;

  default:
  $lang_file = 'lang.no.php';
  $bio_file = 'includes/articles/bio.no.php';
  $natura_text = 'includes/articles/natura.no.php';
  $contact_file = 'includes/contact.php';

}

include 'lang/'.$lang_file;
?>