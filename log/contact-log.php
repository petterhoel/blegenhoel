
<?php
require_once('../mysqli_connect.php');
echo "string";
$query = 'SELECT id, time_of_entry, poster_name, email, 
            message, user_agent, ip, http_reference, 
            captcha_success, captcha_error
        FROM entry_log
        WHERE visibiliy LIKE TRUE
        ORDER BY id desc';

$response = mysqli_qurey($dbc, $query);

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
        date("l j. F Y H:i", $time) . '</td><td>' .// convert it time reference
        $row['poster_name'] . '</td><td>' .
        $row['email'] . '</td><td>' .
        $row['message'] . '</td><td>' .
        $row['user_agent'] . '</td><td>' .
        $row['ip'] . '</td><td>' .
        $row['http_reference'] . '</td><td>' .
        $row['captcha_success'] . '</td><td>' .
        $row['captcha_error'] . '</td> .
        </tr>';
    }

    echo '</table>';

} else {
    echo '<h2>Could not get data :(</h2>';
    echo mysqli_error($dbc);
}

mysqli_close($dbc);

?>