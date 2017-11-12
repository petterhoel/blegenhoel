CREATE TABLE log_entry
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    time_of_entry INT NOT NULL,
    poster_name VARCHAR(200) NOT NULL,
    email VARCHAR(200),
    message TEXT NOT NULL,
    user_agent VARCHAR(300) NOT NULL,
    ip VARCHAR(100) NOT NULL,
    http_reference VARCHAR(200) NOT NULL,
    captcha_success VARCHAR(100) NOT NULL,
    captcha_error VARCHAR(100),
    visible BOOLEAN DEFAULT TRUE  NOT NULL
);
