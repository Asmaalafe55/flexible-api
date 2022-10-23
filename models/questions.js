const db = require("../database/connection")

function fetchQuestions() {
    return db.query("SELECT * FROM questions").then((result) => {
        return result.rows
    })
}

function fetchQuestion() {
    return db.query("SELECT * FROM TABLE WHERE ID = " + id).then((result) => {
        return result.rows
    })
}

module.exports = {
    fetchQuestions: fetchQuestions,
    fetchQuestion: fetchQuestion
}