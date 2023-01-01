const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  id: {
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
});

const TopicModel = mongoose.model('topic', topicSchema, 'topics');

module.exports = TopicModel;
