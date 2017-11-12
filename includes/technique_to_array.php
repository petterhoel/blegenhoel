<?php
function technique_to_array($technique, $language){

  require "../blegenhoel_dev_connect.php";

  $sql = "SELECT id, $language FROM technique ORDER BY id ASC";
  $result = mysqli_query($database_connection, $sql);

  if (!$result){
    // todo log error and message to user.
    echo 'Log error!';
    die();
  }

  while ($row = $result->fetch_array()){
    $technique[$row['id']] = $row[$language];
  }

  return $technique;

}
?>