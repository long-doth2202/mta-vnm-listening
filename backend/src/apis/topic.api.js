const topicApi = require('express').Router();
const topicController = require('../controllers/topic.controller');

topicApi.get('/', topicController.getTopicList);

// topicApi.get('/', (req, res) => {
//   res.send('ROUTER SUCCESS');
// });

module.exports = topicApi;
