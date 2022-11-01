const db = require('../database/connection');

function getAllTemplates() {
  return db.query('SELECT * FROM templates').then((result) => result.rows);
}

function getTemplateById(id) {
  return db
    .query('SELECT * FROM templates WHERE template_id = $1', [id])
    .then((result) => result.rows[0]);
}

module.exports = {
  getAllTemplates: getAllTemplates,
  getTemplateById: getTemplateById,
};
