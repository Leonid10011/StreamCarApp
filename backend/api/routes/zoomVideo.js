const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ZoomVideo = require('../../models/zoomVideo');
const log = require('../../utility/logger'); // Import the logger
const checkAuth = require('../middleware/check-auth');
const authorize = require('../middleware/authorize');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

router.get('/zoom/', checkAuth, async (req, res, next) => {
  log.info('Attempting to fetch zoom videos');
  ZoomVideo.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((error) => {
      log.error(`Error fetching zoom videos: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/zoom/', checkAuth, async (req, res, next) => {
  log.info('Attempting to create a new zoom video');
  const video = new ZoomVideo({
    _id: new mongoose.Types.ObjectId(),
    link: req.body.link,
    question: req.body.question,
    answer: req.body.answers,
  });

  video
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Handling post Request for ZoomVideo',
        createdVideo: video,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        log.error(`Error creating zoom video: ${error}`);
        res.status(500).json({
          error: error,
        });
      }
    });
});

router.delete('/zoom/:videoId', checkAuth, async (req, res, next) => {
  const objectId = req.params.videoId;
  log.info(`Attempting to delete zoom video with ID ${objectId}`);

  ZoomVideo.deleteOne({ _id: objectId })
    .exec()
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((error) => {
      log.error(`Error deleting zoom video with ID ${objectId}: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

// Drop the entire collection
router.delete('/zoom', checkAuth, authorize(['admin']), async (req, res) => {
  log.info('Attempting to drop zoom videos collection');
  try {
    await ZoomVideo.collection.drop();
    log.info('Collection dropped successfully');
    res.status(204).send();
  } catch (error) {
    log.error(`Error dropping zoom videos collection: ${error}`);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
