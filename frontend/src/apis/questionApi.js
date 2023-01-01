import axiosClient from './axiosClient';

const URL = '/questions';

const questionApi = {
  getQuestionList: (_topicID, _lessonID) => {
    return axiosClient.get(`${URL}`, {
      params: {
        _topicID,
        _lessonID,
      }
    });
  },
};

export default questionApi;
