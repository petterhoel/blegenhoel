<?php
/*ini_set('display_errors', 1); // remove before prod
error_reporting(E_ALL); // remove before prod
*/?>

<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<?php

$petter_password = "Fluster11";
$petter_salt = mcrypt_create_iv(30);
$petter_salt = mcrypt_decrypt($petter_salt);
echo $petter_salt;
die();
$petter_hashed = hash("sha512", $petter_password . $petter_salt);
$petter_user = "petter@petterhoel.net";

$fatter_password = "Skodde123";
$fatter_salt = mcrypt_create_iv(30);

$fatter_hashed = hash("sha512", $fatter_password . $fatter_salt);
$fatter_user = "oystein@blegenhoel.no";

require '../../blegenhoel_local_connect.php';

if ($sql = $database_connection->prepare("INSERT INTO users (username, password, salt, superuser)  VALUES(?, ?, ?, ?)")){

  $t = true;
  $f = false;
  $sql->bind_param('sssi', $petter_user, $petter_hashed, $petter_salt, $t);
  $sql->execute();
  echo "Petter lagt inn!<br>";

  $sql->bind_param('sssi', $fatter_user, $fatter_hashed, $fatter_salt, $f);
  $sql->execute();
  echo "Fatter lagt til!";


} else {
  echo mysqli_error($database_connection);
        die();
}






echo "Salt: " . $petter_salt . "<br>Petter: " . $petter_hashed;
echo "<br>Salt: " . $fatter_salt . "<br>Fatter: " . $fatter_hashed;

?>
</body>