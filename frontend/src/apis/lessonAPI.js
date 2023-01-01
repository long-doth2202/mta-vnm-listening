import axiosClient from './axiosClient';

const URL = '/lessons';

const lessonApi = {
  getLessonList: (idTopic) => {
    return axiosClient.get(`${URL}`, {
      params: {
        idTopic,
      }
    });
  },
};

export default lessonApi;
