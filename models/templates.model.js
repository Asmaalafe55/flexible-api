const db = require('../database/connection');

function getAllTemplates() {
  return db.query('SELECT * FROM templates').then((result) => result.rows);
}

function getTemplateById(id) {
  return db
    .query('SELECT * FROM templates WHERE template_id = $1', [id])
    .then((result) => result.rows[0]);
}

function addTemplate(data) {
  return db
    .query(
      'INSERT INTO templates (template_name, template_img, template_keywords, template_description) VALUES ($1 , $2, $3, $4) RETURNING template_id',
      [
        data.name,
        data.imageUrl,
        JSON.stringify(data.keywords),
        data.description,
      ]
    )
    .then((result) => result.rows[0]);
}

function removeTemplate(id) {
  return db
    .query('DELETE FROM templates WHERE template_id = $1', [id])
    .then((result) => result.rows);
}

function editTemplate(data) {
  return db
    .query(
      `UPDATE templates SET template_name=$1, template_img=$2, template_keywords=$3, template_description=$4  WHERE template_id=$5`,
      [
        data.template_name,
        data.template_img,
        data.template_keywords,
        data.template_description,
        data.template_id,
      ]
    )
    .then((result) => result.rows);
}
module.exports = {
  getAllTemplates: getAllTemplates,
  getTemplateById: getTemplateById,
  addTemplate: addTemplate,
  removeTemplate: removeTemplate,
  editTemplate: editTemplate,
};
