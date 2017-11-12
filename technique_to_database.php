<?php
$no = array();
$no[2] = "Akvarell på papir";
$no[3] = "Akvarell og tusj på papir";
$no[4] = "Akvarell, tusj og blyant på papir";
$no[5] = "Olje på lerret";
$no[6] = "Olje og akryl på lerret";
$no[7] = "Olje og gesso på lerret";
$no[8] = "Olje på lerretsplate";
$no[9] = "Oljekritt på papir";
$no[10] = "Gouache på kartong";
$no[11] = "Tusj på papir";
$no[12] = "Tusj og en dash olje på papir";

$it = array();
$it[2] = "Acquarello su carta";
$it[3] = "Acquarello e inchiostro di china su carta";
$it[4] = "Acquarello, inchostro di china e matita su carta";
$it[5] = "Olio su tela";
$it[6] = "Olio e acrillico su tela";
$it[7] = "Olio e gesso su tela";
$it[8] = "Olio su cartone telato";
$it[9] = "Gesso olio su carta";
$it[10] = "Gouache su cartone";
$it[11] = "Inchiostro di china su carta";
$it[12] = "Inchiostro di china e una goccia di olio su carta";

/*require "../blegenhoel_local_connect.php";

for ($i = 2; $i < count($no); $i++){

  if ($statement = $database_connection->prepare("INSERT INTO technique (no, it) VALUES(?, ?)")){
    $statement->bind_param("ss", $no[$i], $it[$i]);
    $statement->execute();
    echo "Lagt til " . $no[$i] . $it[$i]. "<br>";
  } else {
    echo 'Error ' . mysqli_error($database_connection);
    die();
  }

}*/



