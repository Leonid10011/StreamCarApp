const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ReadStatus = require('../../models/readStatus');
const log = require('../../utility/logger'); // Import the logger
const checkAuth = require('../middleware/check-auth');
const authorize = require('../middleware/authorize');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

router.get('/', checkAuth, async (req, res, next) => {
  log.info('Attempting to fetch read statuses');
  ReadStatus.find()
    .exec()
    .then((docs) => {
      log.info(`Fetched read statuses: ${JSON.stringify(docs)}`);
      res.status(200).json(docs);
    })
    .catch((error) => {
      log.error(`Error fetching read statuses: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/', checkAuth, async (req, res, next) => {
  log.info('Attempting to create a new read status');
  const readStatus = new ReadStatus({
    _id: new mongoose.Types.ObjectId(),
    notificationId: new mongoose.Types.ObjectId(req.body.notificationId), // Convert the ID here
    userId: req.body.userId,
    read: req.body.read,
  });

  readStatus
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Read status created',
        createdReadStatus: result,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        log.error(`Error creating read status: ${error}`);
        res.status(500).json({
          error: error,
        });
      }
    });
});

router.delete(
  '/:readstatusId',
  checkAuth,
  authorize(['admin']),
  async (req, res, next) => {
    const objectId = req.params.readstatusId;
    log.info(`Attempting to delete read status with ID ${objectId}`);

    ReadStatus.deleteOne({ _id: objectId })
      .exec()
      .then((result) => {
        res.status(204).json(result);
      })
      .catch((error) => {
        log.error(`Error deleting read status with ID ${objectId}: ${error}`);
        res.status(500).json({
          error: error,
        });
      });
  },
);

router.put('/:userId/:notificationId', checkAuth, async (req, res, next) => {
  const userId = req.params.userId;
  const notificationId = req.params.notificationId;
  log.info(
    `Attempting to update read status for user ID ${userId} and notification ID ${notificationId}`,
  );

  // Update the document
  ReadStatus.updateOne(
    {
      notificationId: notificationId,
      userId: userId,
    },
    {
      $set: { read: true }, // Setting the 'read' field to true
    },
  )
    .exec()
    .then((result) => {
      log.info(`Updated read status: ${JSON.stringify(result)}`);
      res.status(200).json(result); // Return the update result
    })
    .catch((error) => {
      log.error(
        `Error updating read status for user ID ${userId} and notification ID ${notificationId}: ${error}`,
      );
      res.status(500).json({ error: error });
    });
});

module.exports = router;
