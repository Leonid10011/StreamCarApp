const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Notification = require('../../models/notification');
const ReadStatus = require('../../models/readStatus');
const log = require('../../utility/logger'); // Import the logger
const checkAuth = require('../middleware/check-auth');
const authorize = require('../middleware/authorize');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

router.get('/', checkAuth, async (req, res, next) => {
  log.info('Attempting to fetch notifications');
  Notification.find()
    .exec()
    .then((docs) => {
      log.info(`Fetched notifications: ${JSON.stringify(docs)}`);
      res.status(200).json(docs);
    })
    .catch((error) => {
      log.error(`Error fetching notifications: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/', checkAuth, authorize(['admin']), async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const notificationId = new mongoose.Types.ObjectId();
    const notification = new Notification({
      _id: notificationId,
      date: req.body.date,
      description: req.body.description,
    });

    await notification.save({ session });

    const readStatuses = req.body.userIds.map((userId) => ({
      _id: new mongoose.Types.ObjectId(),
      notificationId: notificationId,
      userId: userId,
      read: false,
    }));

    await ReadStatus.insertMany(readStatuses, { session });

    await session.commitTransaction();
    session.endSession();

    log.info('Notification and read statuses created successfully');
    res.status(201).json({
      message: 'Notification and read statuses created',
      createdNotification: notification,
      createdReadStatuses: readStatuses,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    if (error.name === 'ValidationError') {
      validationErrorMongooseModel(res, error);
    } else {
      log.error(`Error creating notification and read statuses: ${error}`);
      res.status(500).json({
        error: error,
      });
    }
  }
});

router.delete(
  '/:notificationId',
  checkAuth,
  authorize(['admin']),
  async (req, res, next) => {
    const objectId = req.params.notificationId;
    log.info(`Attempting to delete notification with ID ${objectId}`);

    Notification.deleteOne({ _id: objectId })
      .exec()
      .then((result) => {
        res.status(204).json(result);
      })
      .catch((error) => {
        log.error(`Error deleting notification with ID ${objectId}: ${error}`);
        res.status(500).json({
          error: error,
        });
      });
  },
);

router.get('/user/:userId', checkAuth, async (req, res, next) => {
  const userId = req.params.userId;
  log.info(`Attempting to fetch notifications for user ID ${userId}`);

  Notification.aggregate([
    {
      $lookup: {
        from: 'readstatuses',
        let: { notificationId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$notificationId', '$$notificationId'] },
                  { $eq: ['$userId', userId] },
                ],
              },
            },
          },
        ],
        as: 'userReadStatus',
      },
    },
    {
      $addFields: {
        read: { $arrayElemAt: ['$userReadStatus.read', 0] },
      },
    },
    {
      $match: {
        userReadStatus: { $ne: [] },
      },
    },
    {
      $project: {
        userReadStatus: 0,
      },
    },
  ])
    .then((results) => {
      log.info('Fetched notifications for user');
      res.status(200).json(results);
    })
    .catch((error) => {
      log.error(`Error fetching notifications for user ID ${userId}: ${error}`);
      res.status(500).json({ error: error });
    });
});

module.exports = router;
