// const { randomWordQuestionPack } = require('../helper/game.helper');
// const { getWordPack } = require('../services/common.service');
const { getAnswerListService } = require('../services/answer.service');


exports.getAnswerPack = async (req, res, next) => {
  try {
    let { _topicID, _lessonID  } = req.query;
    // console.log(_lessonID + "/" + _topicID);
    const answerList = await getAnswerListService(_topicID, _lessonID);
    return res.status(200).json(answerList);
  } catch (error) {
    console.error('GET BLOG LIST ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
