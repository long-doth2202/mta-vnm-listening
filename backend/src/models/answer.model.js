const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  _id: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  _lessonID: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  _topicID: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  audioURL: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  question: {
    type: String,
    required: true,
    maxLength: 300,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    maxLength: 300,
    trim: true,
  },
  answerList: [{
    word: {
      type: String,
      required: true,
      maxLength: 300,
      trim: true,
    }
  }]
});

const AnswerModel = mongoose.model('answer', answerSchema, 'answers');

module.exports = AnswerModel;
