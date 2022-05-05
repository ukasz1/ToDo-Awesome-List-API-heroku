const express = require('express');
const router = express.Router();

const {
  getAllEvents,
  createEvent,
  deleteEvent
} = require('../controllers/events');

router.route('/').get(getAllEvents).post(createEvent);
router.route('/:id').delete(deleteEvent);

module.exports = router;