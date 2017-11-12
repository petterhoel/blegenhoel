<?php
function add_csv($value){
    $csv = ',' . $value;
    return $csv;
}

function send_to_log($time, $name, $email, $message, $user_agent, $ip = 'n/a', $http_reference, $captcha_success = 0){

    require_once('../mysqli_connect.php');


    $query = 'INSERT INTO blegenhoel.log_entry (id, time_of_entry, poster_name, email, 
            message, user_agent, ip, http_reference, captcha_success) 
            VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)';


    $statement = mysqli_prepare($database_connection, $query);

    TRIM($name); 
    TRIM($email); 
    TRIM($message); 
    TRIM($user_agent); 
    TRIM($ip);
    TRIM($http_reference);
    TRIM($captcha_success);


    mysqli_stmt_bind_param($statement, "issssssi", $time, $name, $email,$message, 
                            $user_agent, $ip, $http_reference, $captcha_success);


    mysqli_stmt_execute($statement);

    $affected_rows = mysqli_stmt_affected_rows($statement);

    if ($affected_rows == 1){
        // success
    } else{
        echo "Logging failed<br>";
        echo mysqli_error($database_connection);
    } 
    mysqli_stmt_close($statement);
    mysqli_close($database_connection);

    $logdata_csv =  $time;
    $logdata_csv .=  add_csv($name);
    $logdata_csv .=  add_csv($email);
    $logdata_csv .=  add_csv($message);
    $logdata_csv .=  add_csv($user_agent);
    $logdata_csv .=  add_csv($ip);
    $logdata_csv .=  add_csv($http_reference);
    $logdata_csv .=  add_csv($captcha_success)."\n";
    $csv_data_file = "log/contact-log.txt";
    file_put_contents($csv_data_file, $logdata_csv, FILE_APPEND | LOCK_EX);

}
?>