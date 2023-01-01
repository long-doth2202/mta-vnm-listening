const AnswerModel = require('../models/answer.model');

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

exports.getAnswerListService = async ( _topicID, _lessonID ) => {
  try {
    // console.log(idTopic);
    const answers = await AnswerModel.find({ _topicID: _topicID, _lessonID: _lessonID});

    // for (let i = 0; i < answers.length; i++) {
    //   answers[i].answerList = shuffle(answers[i].answerList);
    // }

    // shuffle(answers);

    // const lessons = await LessonModel.find();
    return answers;
  } catch (error) {
    throw error;  
  }
};
