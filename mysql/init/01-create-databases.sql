-- create databases
CREATE DATABASE IF NOT EXISTS `schema-a`;
CREATE DATABASE IF NOT EXISTS `schema-b`;

-- create root user and grant rights
-- CREATE USER 'root'@'%' IDENTIFIED BY 'local';
-- GRANT ALL ON *.* TO 'root'@'%';

CREATE USER 'dev_user'@'%' IDENTIFIED BY 'dev_user';
GRANT ALL ON *.* TO 'dev_user'@'%';