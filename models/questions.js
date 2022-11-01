const db = require('../database/connection');

function fetchQuestions() {
  return db.query('SELECT * FROM questions').then((result) => result.rows);
}

function fetchQuestionById(id) {
  return db
    .query('SELECT * FROM questions WHERE question_id = $1', [id])
    .then((result) => result.rows[0]);
}

module.exports = {
  fetchQuestions: fetchQuestions,
  fetchQuestionById: fetchQuestionById,
};
