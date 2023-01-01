const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  _id: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: 300,
    trim: true,
  },
  subTitle: {
    type: String,
    required: true,
    maxLength: 300,
    trim: true,
  },
  _topicID: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
});

const LessonModel = mongoose.model('lesson', lessonSchema, 'lessons');

module.exports = LessonModel;
