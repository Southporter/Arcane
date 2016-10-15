system rm create_tables.txt
TEE create_tables.txt


SELECT "Creating Admin User table" AS "Action";

CREATE TABLE IF NOT EXISTS admin_user
( admin_user_id     INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, first_name        CHAR(16)     NOT NULL
, last_name         CHAR(20)     NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
) engine=InnoDB AUTO_INCREMENT=1 CHARSET=utf8;

SELECT "Seeding Admin User table" AS "Action";

INSERT INTO admin_user
( first_name
, last_name
, created_by
, creation_date
, last_updated_by
, last_updated_date
)
VALUES
( "MYSQL"
, "ADMIN"
, 1
, UTC_DATE()
, 1
, UTC_DATE()
);

INSERT INTO admin_user
( first_name
, last_name
, created_by
, creation_date
, last_updated_by
, last_updated_date
)
VALUES
( "Shem"
, "Sedrick"
, 1
, UTC_DATE()
, 1
, UTC_DATE()
);

INSERT INTO admin_user
( first_name
, last_name
, created_by
, creation_date
, last_updated_by
, last_updated_date
)
VALUES
( "Php"
, "Api"
, 1
, UTC_DATE()
, 1
, UTC_DATE()
);

SELECT "Modifing Admin User with self-referencing foreign keys" AS "Action";

ALTER TABLE admin_user
   ADD CONSTRAINT admin_user_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id);

ALTER TABLE admin_user
   ADD CONSTRAINT admin_user_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id);


SELECT "Creating login table" AS "Action";

CREATE TABLE login
( login_id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, email             CHAR(60)     NOT NULL
, password          CHAR(60)     NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
) engine=InnoDB CHARSET=utf8;


SELECT "Creating User table" AS "Action";

CREATE TABLE user
( user_id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, first_name        CHAR(16)     NOT NULL
, last_name         CHAR(20)     NOT NULL
, login_id          INT UNSIGNED NOT NULL
, artist_id         INT UNSIGNED
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT user_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT user_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id)
) engine=InnoDB CHARSET=utf8;

SELECT "Creating Genre table" AS "Action";

CREATE TABLE genre
( genre_id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, genre_name        CHAR(16)     NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT genre_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT genre_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id)
) engine=InnoDB CHARSET=utf8;

SELECT "Creating Album table" AS "Action";

CREATE TABLE album
( album_id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, genre_id          INT UNSIGNED NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT album_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT album_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id)
) engine=InnoDB CHARSET=utf8;

SELECT "Creating Song table" AS "Action";

CREATE TABLE song
( song_id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, album_id          INT UNSIGNED
, url               CHAR(60)
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT song_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT song_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT song_fk3 FOREIGN KEY (album_id) REFERENCES album(album_id)
) engine=InnoDB CHARSET=utf8;

SELECT "Creating Artist table" AS "Action";

CREATE TABLE artist
( artist_id         INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, artist_name       CHAR(16)     NOT NULL
, genre_id          INT UNSIGNED NOT NULL
, album_id          INT UNSIGNED NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT artist_fk1 FOREIGN KEY (created_by) REFERENCES admin_user(admin_user_id)
, CONSTRAINT artist_fk2 FOREIGN KEY (last_updated_by) REFERENCES admin_user(admin_user_id)
) engine=InnoDB CHARSET=utf8;
