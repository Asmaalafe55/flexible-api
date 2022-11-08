const catchAsync = require('../utils/catchAsync');
const templatesModel = require('../models/templates.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const templates = catchAsync(async (req, res) => {
  const templates = await templatesModel.getAllTemplates();
  res.status(httpStatus.OK).send(templates);
});

const templateById = catchAsync(async (req, res) => {
  const id = req.body.id;
  if (!id) throw new ApiError(httpStatus.BAD_REQUEST, 'Missing id');
  const template = await templatesModel.getTemplateById(id);
  if (!template)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'No template found with this id'
    );
  res.status(httpStatus.OK).send(template);
});

const addNewTemplate = catchAsync(async (req, res) => {
  const data = req.body;
  if (!data) throw new ApiError(httpStatus.BAD_REQUEST, 'Missing Data');
  const templateId = await templatesModel.addTemplate(data);
  if (!templateId)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Template not added!');
  res.status(httpStatus.OK).send(templateId);
});

module.exports = {
  templates: templates,
  templateById: templateById,
  addNewTemplate: addNewTemplate,
};
