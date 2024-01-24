/*
Script de création de la base de données `jsvanilla`.
*/
create database IF NOT EXISTS jsvanilla;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'api-dev'@'%.%.%.%' identified by 'api-dev-password';
grant select, update, insert, delete on jsvanilla.* to 'api-dev'@'%.%.%.%';
flush privileges;