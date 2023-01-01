const LessonModel = require('../models/lesson.model');

exports.getLessonListService = async (idTopic) => {
  try {
    // console.log(idTopic);
    const lessons = await LessonModel.find({_topicID: idTopic});
    // const lessons = await LessonModel.find();
    return lessons;
  } catch (error) {
    throw error;  
  }
};
