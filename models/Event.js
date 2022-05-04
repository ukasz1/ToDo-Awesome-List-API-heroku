const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  task: String,
  description: String,
  day: String,
  month: String,
  year: String,
  hour: String,
  minute: String,
  unixTime: String
})

module.exports = mongoose.model('Event', EventSchema)