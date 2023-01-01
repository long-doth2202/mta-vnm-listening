const { getTopicListService } = require('../services/topic.service');

exports.getTopicList = async (req, res, next) => {
  try {
    const topicList = await getTopicListService();
    return res.status(200).json(topicList);
  } catch (error) {
    console.error('GET BLOG LIST ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
