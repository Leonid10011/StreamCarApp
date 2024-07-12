const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = require('../../models/question');
const EstimateQuestion = require('../../models/estimate');
const PrivateQuestion = require('../../models/private');
const logger = require('../../utility/logger');
const checkAuth = require('../middleware/check-auth');
const authorize = require('../middleware/authorize');
const validationErrorMongooseModel = require('../../utility/validationErrorMongooseModel');

router.get('/general/', checkAuth, async (req, res) => {
  logger.info('Attempting to fetch general questions');
  Question.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((error) => {
      logger.info('general error');
      logger.error(`Error fetching general questions: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/general', checkAuth, async (req, res) => {
  const question = new Question({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    answers: req.body.answers,
  });

  question
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Handling POST request for general questions',
        createdQuestion: question,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        logger.error(`Error creating general question: ${error}`);
        res.status(500).json({
          error: {
            message: error,
          },
        });
      }
    });
});

router.delete('/general/:questionId', checkAuth, (req, res) => {
  const objectId = req.params.questionId;

  Question.deleteOne({ _id: objectId })
    .exec()
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((error) => {
      logger.error(
        `Error deleting general question with ID ${objectId}: ${error}`,
      );
      res.status(500).json({
        error: error,
      });
    });
});

router.delete('/general', checkAuth, authorize(['admin']), async (req, res) => {
  Question.collection.drop((error) => {
    if (error) {
      logger.error(`Error dropping general questions collection: ${error}`);
      res.status(500).json({
        error: error,
      });
    } else {
      logger.info('General questions collection dropped successfully');
      res.status(204).end();
    }
  });
});

router.get('/estimate', checkAuth, async (req, res) => {
  logger.info('Attempting to fetch estimate questions');
  EstimateQuestion.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((error) => {
      logger.error(`Error fetching estimate questions: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/estimate/', checkAuth, async (req, res) => {
  const estimateQuestion = new EstimateQuestion({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    answer: req.body.answer,
  });

  estimateQuestion
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Handling POST request for estimate questions',
        createdQuestion: estimateQuestion,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        logger.error(`Error creating estimate question: ${error}`);
        res.status(500).json({
          message: error,
        });
      }
    });
});

router.delete('/estimate/:questionId', checkAuth, async (req, res) => {
  const objectId = req.params.questionId;

  EstimateQuestion.deleteOne({ _id: objectId })
    .exec()
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((error) => {
      logger.error(
        `Error deleting estimate question with ID ${objectId}: ${error}`,
      );
      res.status(500).json({
        error: error,
      });
    });
});

router.delete(
  '/estimate',
  checkAuth,
  authorize(['admin']),
  async (req, res) => {
    EstimateQuestion.collection.drop((error) => {
      if (error) {
        logger.error(`Error dropping estimate questions collection: ${error}`);
        res.status(500).json({
          error: error,
        });
      } else {
        logger.info('Estimate questions collection dropped successfully');
        res.status(204).end();
      }
    });
  },
);

router.get('/private/', checkAuth, async (req, res) => {
  logger.info('Attempting to fetch private questions');
  PrivateQuestion.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((error) => {
      logger.error(`Error fetching private questions: ${error}`);
      res.status(500).json({
        error: error,
      });
    });
});

router.post('/private/', checkAuth, async (req, res) => {
  const privateQuestion = new PrivateQuestion({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
  });

  privateQuestion
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Handling POST request for private questions',
        createdQuestion: privateQuestion,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        validationErrorMongooseModel(res, error);
      } else {
        logger.error(`Error creating private question: ${error}`);
        res.status(500).json({
          error: error,
        });
      }
    });
});

router.delete('/private/:questionId', checkAuth, async (req, res) => {
  const objectId = req.params.questionId;

  PrivateQuestion.deleteOne({ _id: objectId })
    .exec()
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((error) => {
      logger.error(
        `Error deleting private question with ID ${objectId}: ${error}`,
      );
      res.status(500).json({
        error: error,
      });
    });
});

router.delete('/private', checkAuth, async (req, res) => {
  PrivateQuestion.collection.drop((error) => {
    if (error) {
      logger.error(`Error dropping private questions collection: ${error}`);
      res.status(500).json({
        error: error,
      });
    } else {
      logger.info('Private questions collection dropped successfully');
      res.status(204).end();
    }
  });
});

module.exports = router;
