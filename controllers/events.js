const Event = require('../models/Event')

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort('unixTime');
    res.status(200).json([...events]);
  }
  catch (error) {
    console.log(error)
  }
}

const createEvent = async (req, res) => {
  try {
    console.log(req.body);
    const bodyValidated = req.body;
    if (Number(bodyValidated.day) < 10) {
      bodyValidated.day = '0' + bodyValidated.day;
    }
    if (Number(bodyValidated.month) < 10) {
      bodyValidated.month = '0' + bodyValidated.month;
    }
    const event = await Event.create(bodyValidated)
    res.status(201).json({ event })
  } catch (error) {
    console.log('Incorrect data: ', error)
  }
}

const deleteEvent = async (req, res) => {
  try {
    const { id: eventID } = req.params;
    const event = await Event.findOneAndDelete({ _id: eventID })
    if (!event) {
      return res.status(404).json({ msg: `Event ${event} not found` });
    }
    res.status(200).json({ event: null, status: 'success' })
  }
  catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllEvents,
  createEvent,
  deleteEvent
}