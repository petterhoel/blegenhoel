<?php

DEFINE ('DB_USER', 'dev');
DEFINE ('DB_PASSWORD', '1234');
DEFINE ('DB_HOST', '');
DEFINE ('DB_NAME', 'blegenhoel.dev');

$database_connection = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not codkdkdnnect to MySQL: ' . mysqli_connect_error());
$database_connection->set_charset('utf8');

?>