
/* La définition de la schéma */
use jsvanilla;

/* user */
create table if not exists contact (
  messageId int auto_increment not null,
  email varchar(256) not null, 
  familyName varchar(256) not null, 
  givenName varchar(256),
  gender ENUM('male','female','other','unknown') default 'unknown',
  conditions boolean default false,
  newsletter boolean default false,
  message text not null,
  primary key(messageId)
);

drop trigger if exists before_insert_contact;

create trigger before_insert_contact
before insert
on contact for each row set new.email = lower(trim(new.email));

/* ... */


/* Fichier d'un utilisateur */
create table if not exists photo (
  photoId int auto_increment not null,
  url varchar(512) not null,
  filename varchar(256),
  mimeType varchar(256),
  primary key(photoId)
);


delete from photo;

insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-abdurrahim-israfilov-18401184.jpg", "abdurrahim-israfilov.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-alfredo-flores-18570210.jpg", "alfredo-flores.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-alina-chernii-18762005.jpg", "alina-chernii.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-is%CC%A7%C4%B1l-18792374.jpg", "is.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-levent-simsek-13009499.jpg", "levent-simsek.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-luca-dross-16061695.jpg", "luca-dross.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-manuel-schlichter-18765488.jpg", "manuel-schlichter.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-martin-wischeropp-18737714.jpg", "martin-wischeropp.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-memin-bi%CC%87li%CC%87r-14701288.jpg", "memin-bi.jpg", "image/jpeg");
insert into photo (url, filename, mimeType) values ("https://js-vanilla-images.s3.fr-par.scw.cloud/images/pexels-monstera-production-5635102.jpg", "monstera-production.jpg", "image/jpeg");
