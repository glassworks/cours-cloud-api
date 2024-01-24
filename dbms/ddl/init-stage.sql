/*
Script de création de la base de données `jsvanilla`.
*/
create database IF NOT EXISTS jsvanilla;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'api-stage'@'%.%.%.%' identified by 'api-stage-password';
grant select, update, insert, delete on jsvanilla.* to 'api-stage'@'%.%.%.%';
flush privileges;