const TopicModel = require('../models/topic.model');

exports.getTopicListService = async () => {
  try {
    const topics = await TopicModel.find();
    return topics;
  } catch (error) {
    throw error;
  }
};
