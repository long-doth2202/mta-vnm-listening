const { getLessonListService } = require('../services/lesson.service');

exports.getLessonList = async (req, res, next) => {
  try {
    let { idTopic } = req.query;
    // console.log("HI: " + idTopic);
    const lessonList = await getLessonListService(idTopic);
    return res.status(200).json(lessonList);
  } catch (error) {
    console.error('GET BLOG LIST ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
