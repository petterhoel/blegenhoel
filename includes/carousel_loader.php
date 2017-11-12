<?php
// connects to database and loades carousel and info based on $sql/query
function load_carousel($carousel_name){
  global $language;
  $sql = "SELECT title_$language as title, series_$language as series, technique,
            dimmentions, production_year, sold, img_path FROM artwork_info
            WHERE display = 1 AND
                  carousel like $carousel_name
            ORDER BY carousel_order ASC";

  require '../blegenhoel_dev_connect.php';

  $result = mysqli_query($database_connection, $sql);

  if (!$result) {
    //to do:
    echo 'Log error!';
    die();
  }

  include 'includes/get_carousel_html.php';
  $carousel_html = "";
  while ($artwork = mysqli_fetch_assoc($result)) {
    $carousel_html .= carousel_html($artwork);
  }
  return $carousel_html;

}
?>