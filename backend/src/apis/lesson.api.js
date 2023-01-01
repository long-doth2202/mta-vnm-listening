const lessonApi = require('express').Router();
const lessonController = require('../controllers/lesson.controller');

lessonApi.get('/', lessonController.getLessonList);

// lessonApi.get('/', (req, res) => {
//   res.send('ROUTER SUCCESS');
// });

module.exports = lessonApi;
