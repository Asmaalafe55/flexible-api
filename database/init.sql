BEGIN;

DROP TABLE IF EXISTS users, questions CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(190) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  register_date DATE DEFAULT CURRENT_DATE
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
('text', 'Event name', NULL, 'event'),
('radio', 'How can people attend your event?', "[{value:"buy-tickets",text:"Buytickets",},{value:"signup-sheets",text:"Signupsheets",},{value:"just-show-up",text:"Justshowup"},{value:"contact-us",text:"Contactus",},]" , 'event'),
('text', 'What is the event address? (Fattoush, Haifa Auditorium, Zoom...)', NULL, 'event'),
('date dropdown', 'When is the event? (DD/MM/YYYY)', NULL, 'event'),
('checkbox', 'What features would you like to add?', "[{value:"gallery",answerid:1,text:"Gallery"},{value:"socialmedialinks",answerid:2,text:"Socialmedialinks",},{value:"textboxes(blogstyle)",answerid:5,text:"Textboxes(blogstyle)",},{value:"countdown",answerid:6,text:"Countdown"},]", 'event'),
('text', 'Name on blog', NULL, 'blog'),
('checkbox', 'What features would you like to add?', "[{value:"gallery",text:"Gallery"},{value:"socialmedialinks",text:"Socialmedialinks",},{value:"blog",text:"Blog"},{value:"chat",text:"Chat"}]", 'blog'),
('checkbox', 'How would you like your readers to contact you?', "[{value:"email",text:"Email"},{value:"phone",text:"Phone",},{value:"text",text:"Text"}]", 'blog'),
('radio', 'Would you like to add pagination or infinite scrolling for your posts?', "[{value:"yes",text:"Yes",},{value:"no",text:"No",},]", 'blog')


COMMIT;
