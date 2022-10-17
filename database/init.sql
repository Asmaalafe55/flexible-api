BEGIN;

DROP TABLE IF EXISTS users, questions CASCADE;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(190) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  register_date DATE
);

CREATE TABLE questions (
  question_id INTEGER PRIMARY KEY,
  question_type INTEGER NOT NULL,
  question VARCHAR(150) NOT NULL,
  answers JSON
);

INSERT INTO users (user_id, first_name, last_name, email, password, register_date) VALUES
(2340,'First Name','Last Name','helloworld@gmail.com','helloworld','2022-10-17');

INSERT INTO questions (question_id, question_type, question, answers) VALUES
(2347, 3,'Question','["Berlin", "London"]');

COMMIT;
