BEGIN;

DROP TABLE IF EXISTS users, questions CASCADE;

CREATE TABLE users (
  User ID INTEGER PRIMARY KEY,
  First name TEXT NOT NULL,
  Last name TEXT NOT NULL,
  Email TEXT PRIMARY KEY,
  Password VARCHAR(255) NOT NULL,
  RegisterDate date
);

CREATE TABLE questions (
  Question ID INTEGER PRIMARY KEY,
  Question type TEXT NOT NULL,
  Question TEXT NOT NULL,
  Answers  TEXT
);

INSERT INTO users (User ID, First name, Last name, Email, Password, RegisterDate) VALUES
(2340,'First Name','Last Name','helloworld@gmail.com','helloworld','2022-10-17');

INSERT INTO questions (Question ID, Question type, Question, Answers) VALUES
(2347,'Question Type','Question','Answers');

COMMIT;
