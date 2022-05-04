const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  task: String,
  description: String,
  day: Number,
  month: Number,
  year: Number,
  hour: Number,
  minute: Number,
  unixTime: Number
})

module.exports = mongoose.model('Event', EventSchema)