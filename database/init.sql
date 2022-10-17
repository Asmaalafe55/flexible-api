BEGIN;

DROP TABLE IF EXISTS users, questions CASCADE;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email varchar(190) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  register_date date
);

CREATE TABLE questions (
  question_id INTEGER PRIMARY KEY,
  question_type TEXT NOT NULL,
  question TEXT NOT NULL,
  answers  TEXT
);

INSERT INTO users (user_id, first_name, last_name, email, password, register_date) VALUES
(2340,'First Name','Last Name','helloworld@gmail.com','helloworld','2022-10-17');

INSERT INTO questions (question_id, question_type, question, answers) VALUES
(2347,'Question Type','Question','Answers');

COMMIT;
