<!DOCTYPE html>
<html>
<head>
    <title>Kontaktskjema log</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="logstyle.css">
</head>

<body>    
<?php
    ini_set('display_errors',1); // remove before prod
    error_reporting(E_ALL); // remove before prod
    require_once('../../mysqli_connect.php');

    $query = 'SELECT id, time_of_entry, poster_name, email, 
                message, user_agent, ip, http_reference, 
                captcha_success
            FROM log_entry
            WHERE visible LIKE TRUE
            ORDER BY id desc';
   
    $response = @mysqli_query($database_connection, $query);
    

    if ($response){
        echo '
        <h1>Log kontaktskjema</h1>

        <table>
            <tr>
                <th>Tidspunkt</th>
                <th>Navn</th>
                <th>E-post</th>
                <th>Melding</th>
                <th>User agent</th>
                <th>IP</th>
                <th>http ref</th>
                <th>captcha success</th>
            </tr>';

        while ($row = mysqli_fetch_array($response)){
            $time = $row['time_of_entry'];//get int time reference
            echo '<tr><td>' . 
            date("j. F Y H:i:s", $time) . '</td><td>' .// convert it time reference
            $row['poster_name'] . '</td><td>' .
            $row['email'] . '</td><td>' .
            $row['message'] . '</td><td>' .
            $row['user_agent'] . '</td><td>' .
            $row['ip'] . '</td><td>' .
            $row['http_reference'] . '</td><td>' .
            $row['captcha_success'] . '</td>' .
            '</tr>';
        }

        echo '</table>';

    } else {
        echo '<h2>Could not get data :(</h2>';
        echo mysqli_error($database_connection);
    }

    mysqli_close($database_connection);

?>
</table>

</body>
</html>