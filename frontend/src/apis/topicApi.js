import axiosClient from './axiosClient';

const URL = '/topics';

const topicApi = {
  getTopicList: () => {
    return axiosClient.get(`${URL}`);
  },
};

export default topicApi;
