system rm create_tables.txt
TEE create_tables.txt

SELECT "Creating user table" AS "Action";

CREATE TABLE IF NOT EXISTS user
( user_id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, first_name        CHAR(16)     NOT NULL
, last_name         CHAR(20)     NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, KEY user_fk1 (created_by)
, CONSTRAINT user_fk1 FOREIGN KEY (created_by)      REFERENCES user(user_id)
, KEY user_fk2 (last_updated_by)
, CONSTRAINT user_fk2 FOREIGN KEY (last_updated_by) REFERENCES user(user_id)
) engine=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS address;
SELECT "Creating address table" AS "Action";

CREATE TABLE address
( address_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, street            CHAR(60)     NOT NULL
, city              CHAR(20)     NOT NULL
, state             CHAR(20)     NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT address_fk1 FOREIGN KEY (created_by) REFERENCES user(user_id)
, CONSTRAINT address_fk2 FOREIGN KEY (last_updated_by) REFERENCES user(user_id)
) engine=InnoDB DEFAULT CHARSET=latin1;

SELECT "Creating login table" AS "Action";
CREATE TABLE IF NOT EXISTS login
( login_id      INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, email         CHAR(60)     NOT NULL
, password      CHAR(60)     NOT NULL
, created_by    INT UNSIGNED NOT NULL
, creation_date DATE         NOT NULL
, last_updated_by INT UNSIGNED NOT NULL
, last_updated_date DATE     NOT NULL
, CONSTRAINT login_fk1  FOREIGN KEY (created_by) REFERENCES user(user_id)
, CONSTRAINT login_fk2  FOREIGN KEY (last_updated_by) REFERENCES user(user_id)
) engine=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS customer;

SELECT "Creating customer table" AS "Action";
CREATE TABLE customer
( customer_id       INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, first_name        CHAR(16)     NOT NULL
, last_name         CHAR(20)     NOT NULL
, login_id          INT UNSIGNED NOT NULL
, reservation_id    INT UNSIGNED
, address_id        INT UNSIGNED NOT NULL
, phone             INT UNSIGNED NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT customer_fk1 FOREIGN KEY (address_id)      REFERENCES address(address_id)
, CONSTRAINT customer_fk2 FOREIGN KEY (login_id)        REFERENCES login(login_id)
, CONSTRAINT customer_fk3 FOREIGN KEY (created_by)      REFERENCES user(user_id)
, CONSTRAINT customer_fk4 FOREIGN KEY (last_updated_by) REFERENCES user(user_id)
) engine=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS reservations;

SELECT "Creating reservations table" AS "Action";

CREATE TABLE reservations
( reservation_id    INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
, reservation_date  DATE         NOT NULL
, start_time        TIMESTAMP    NOT NULL
, end_time          TIMESTAMP    NOT NULL
, customer_id       INT UNSIGNED NOT NULL
, address_id        INT UNSIGNED NOT NULL
, created_by        INT UNSIGNED NOT NULL
, creation_date     DATE         NOT NULL
, last_updated_by   INT UNSIGNED NOT NULL
, last_updated_date DATE         NOT NULL
, CONSTRAINT reservations_fk1 FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
, CONSTRAINT reservations_fk2 FOREIGN KEY (address_id)  REFERENCES address(address_id)
, CONSTRAINT reservations_fk3 FOREIGN KEY (created_by)  REFERENCES user(user_id)
, CONSTRAINT reservations_fk4 FOREIGN KEY (last_updated_by) REFERENCES user(user_id)
) engine=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE customer
  ADD CONSTRAINT customer_fk5 FOREIGN KEY (reservation_id) REFERENCES reservations(reservation_id);

NOTEE
