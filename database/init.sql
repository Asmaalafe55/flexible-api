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
  question_id SERIAL PRIMARY KEY,
  question_type VARCHAR(20) NOT NULL,
  question VARCHAR(150) NOT NULL,
  answer_options JSON,
  website_type VARCHAR(20) NOT NULL
);

INSERT INTO users (user_id, first_name, last_name, email, password, register_date) VALUES
(2340,'First Name','Last Name','helloworld@gmail.com','helloworld','2022-10-17');

INSERT INTO questions (question_type, question, answer_options, website_type) VALUES
('textbox', 'Event name', NULL, 'event'),
('radio', 'How can people attend your event?', '["Buy tickets", "Sign-up sheet (free)", "Just show up", "Contact us"]', 'event'),
('textbox', 'What is the event address?', NULL, 'event'),
('date dropdown', 'When is the event?', NULL, 'event'),
('checkboxes', 'What features would you like to add?', '["Gallery", "Social media links", "Music", "Videos", "Text boxes (blog style)", "Countdown"]', 'event'),


COMMIT;
