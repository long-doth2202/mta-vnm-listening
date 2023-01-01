const questionApi = require('express').Router();
const questionController = require('../controllers/question.controller');

questionApi.get('/', questionController.getAnswerPack);

module.exports = questionApi;
